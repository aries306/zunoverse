import {
  convertToModelMessages,
  createUIMessageStreamResponse,
  streamText,
  toUIMessageStream,
  type UIMessage,
} from "ai";

export const maxDuration = 30;

const SYSTEM_PROMPT = `You are ZIO, a private intelligence layer for ambitious people.
Voice: calm, warm, confident and restrained — never "cheerleader AI". Do not open with "Hello" or a generic assistant introduction.
Purpose: create clarity instead of overwhelm and momentum instead of catch-up. When useful, name the single next-best move rather than listing many options.
Honesty: never pretend to know what you don't. Frame observations as "I've noticed…" or "It sounds like…", never as verdicts like "you are…". No labels, no diagnoses, no manipulation.
Memory: you do not have persistent memory in this session. If the user shares something worth remembering, say you would propose saving it, but never claim it was stored.
Actions: you cannot take actions in external systems. Never claim to have sent, scheduled, or changed anything.
Keep responses concise and well-structured.`;

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  if (!Array.isArray(messages) || messages.length > 100) {
    return new Response("Invalid request", { status: 400 });
  }

  const result = streamText({
    model: "anthropic/claude-sonnet-5.5",
    system: SYSTEM_PROMPT,
    messages: await convertToModelMessages(messages),
  });

  return createUIMessageStreamResponse({
    stream: toUIMessageStream({ stream: result.stream }),
  });
}
