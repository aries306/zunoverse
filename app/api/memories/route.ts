import { and, desc, eq } from "drizzle-orm";
import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { z } from "zod";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { zioMemories } from "@/lib/db/schema";

const memoryInput = z.object({
  content: z.string().trim().min(1).max(1200),
  kind: z.string().trim().min(1).max(80).default("note"),
});

async function getUserId() {
  const session = await auth.api.getSession({ headers: await headers() });
  return session?.user.id;
}

export async function GET() {
  const userId = await getUserId();
  if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const memories = await db
    .select({ id: zioMemories.id, kind: zioMemories.kind, content: zioMemories.content, status: zioMemories.status })
    .from(zioMemories)
    .where(and(eq(zioMemories.userId, userId), eq(zioMemories.status, "active"), eq(zioMemories.lifecycle, "active")))
    .orderBy(desc(zioMemories.updatedAt))
    .limit(20);
  return NextResponse.json({ memories });
}

export async function POST(request: Request) {
  const userId = await getUserId();
  if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  let data: unknown;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
  const parsed = memoryInput.safeParse(data);
  if (!parsed.success) return NextResponse.json({ error: "Enter a note of up to 1,200 characters." }, { status: 400 });

  const [memory] = await db
    .insert(zioMemories)
    .values({
      userId,
      kind: parsed.data.kind,
      content: parsed.data.content,
      confidence: "1.000",
      status: "active",
      lifecycle: "active",
      source: "user-confirmed",
      scope: "user",
      provenance: { source: "user-confirmed", createdBy: "user" },
      verification: "user_confirmed",
    })
    .returning({ id: zioMemories.id, kind: zioMemories.kind, content: zioMemories.content, status: zioMemories.status });

  return NextResponse.json({ memory }, { status: 201 });
}

export async function DELETE(request: Request) {
  const userId = await getUserId();
  if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const id = new URL(request.url).searchParams.get("id");
  const parsedId = z.string().uuid().safeParse(id);
  if (!parsedId.success) return NextResponse.json({ error: "Invalid memory ID" }, { status: 400 });

  const [deleted] = await db
    .delete(zioMemories)
    .where(and(eq(zioMemories.id, parsedId.data), eq(zioMemories.userId, userId)))
    .returning({ id: zioMemories.id });
  if (!deleted) return NextResponse.json({ error: "Memory not found" }, { status: 404 });
  return NextResponse.json({ ok: true });
}
