import { desc, eq, and } from "drizzle-orm";
import { streamText, type ModelMessage, type UIMessage } from "ai";
import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { zioConversations, zioMemories } from "@/lib/db/schema";

export const maxDuration = 30;

const MAX_MESSAGE_LENGTH = 10_000;
const THREAD_ID = "main";
const SYSTEM_PROMPT = `You are ZIO, a private intelligence layer for ambitious people.
Voice: calm, warm, confident and restrained — never "cheerleader AI". Do not open with a generic assistant introduction.
Purpose: create clarity instead of overwhelm and momentum instead of catch-up. When useful, name the single next-best move rather than listing many options.
Honesty: never pretend to know what you don't. Frame observations as "I've noticed…" or "It sounds like…", never as verdicts like "you are…". No labels, diagnoses, or manipulation.
Memory: use only the explicitly saved context supplied below. A memory is a revisable user-approved note, not a diagnosis or certainty. Never claim to have saved a new memory automatically.
Actions: you cannot take actions in external systems. Never claim to have sent, scheduled, or changed anything.
Keep responses concise and well-structured.`;

function latestText(message: UIMessage | undefined) {
  if (!message || message.role !== "user") return "";
  return message.parts
    .filter((part): part is Extract<UIMessage["parts"][number], { type: "text" }> => part.type === "text")
    .map((part) => part.text)
    .join("\n")
    .trim();
}

function lexicalScore(query: string, text: string) {
  const terms = new Set(query.toLowerCase().split(/\W+/).filter((term) => term.length > 2));
  if (!terms.size) return 0;
  const candidate = new Set(text.toLowerCase().split(/\W+/).filter((term) => term.length > 2));
  let matches = 0;
  for (const term of terms) if (candidate.has(term)) matches += 1;
  return matches / terms.size;
}

export async function POST(request: Request) {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session?.user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  let body: { messages?: UIMessage[] };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
  if (!Array.isArray(body.messages) || body.messages.length > 60) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const message = latestText(body.messages.at(-1));
  if (!message || message.length > MAX_MESSAGE_LENGTH) {
    return NextResponse.json({ error: "Message must contain 1–10,000 characters" }, { status: 400 });
  }

  const userId = session.user.id;
  const previous = await db
    .select({ role: zioConversations.role, content: zioConversations.content })
    .from(zioConversations)
    .where(and(eq(zioConversations.userId, userId), eq(zioConversations.conversationId, THREAD_ID)))
    .orderBy(desc(zioConversations.createdAt))
    .limit(12);
  const memoryRows = await db
    .select({ kind: zioMemories.kind, content: zioMemories.content })
    .from(zioMemories)
    .where(and(eq(zioMemories.userId, userId), eq(zioMemories.status, "active"), eq(zioMemories.lifecycle, "active")))
    .orderBy(desc(zioMemories.updatedAt))
    .limit(40);
  const memories = memoryRows
    .map((memory) => ({ ...memory, score: lexicalScore(message, `${memory.kind} ${memory.content}`) }))
    .filter((memory) => memory.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 6);

  await db.insert(zioConversations).values({ userId, conversationId: THREAD_ID, role: "user", content: message });

  const history: ModelMessage[] = previous
    .reverse()
    .map((entry) => ({ role: entry.role, content: entry.content }));
  const system = memories.length
    ? `${SYSTEM_PROMPT}\n\nUser-approved saved context (use only when relevant):\n${memories.map((memory) => `- [${memory.kind}] ${memory.content}`).join("\n")}`
    : SYSTEM_PROMPT;

  const result = streamText({
    model: "anthropic/claude-sonnet-5.5",
    system,
    messages: [...history, { role: "user", content: message }],
    maxOutputTokens: 1000,
    abortSignal: request.signal,
    onFinish: async ({ text }) => {
      if (!text.trim()) return;
      await db.insert(zioConversations).values({ userId, conversationId: THREAD_ID, role: "assistant", content: text });
    },
  });

  return result.toUIMessageStreamResponse();
}
