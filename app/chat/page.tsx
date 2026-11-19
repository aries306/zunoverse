import type { Metadata } from "next";
import { and, desc, eq } from "drizzle-orm";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import type { UIMessage } from "ai";
import { SiteHeader } from "@/components/site-header";
import { ZioChat } from "@/components/zio-chat";
import { MemoryPanel } from "@/components/memory-panel";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { zioConversations, zioMemories } from "@/lib/db/schema";

export const metadata: Metadata = {
  title: "Talk to ZIO",
  description: "A private conversation with context you choose to save.",
};

export default async function ChatPage() {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session?.user) redirect("/sign-in");
  const userId = session.user.id;

  const [conversationRows, memoryRows] = await Promise.all([
    db
      .select({ id: zioConversations.id, role: zioConversations.role, content: zioConversations.content })
      .from(zioConversations)
      .where(and(eq(zioConversations.userId, userId), eq(zioConversations.conversationId, "main")))
      .orderBy(desc(zioConversations.createdAt))
      .limit(60),
    db
      .select({ id: zioMemories.id, kind: zioMemories.kind, content: zioMemories.content, status: zioMemories.status })
      .from(zioMemories)
      .where(and(eq(zioMemories.userId, userId), eq(zioMemories.status, "active"), eq(zioMemories.lifecycle, "active")))
      .orderBy(desc(zioMemories.updatedAt))
      .limit(20),
  ]);

  const initialMessages: UIMessage[] = conversationRows.reverse().map((row) => ({
    id: row.id,
    role: row.role,
    parts: [{ type: "text", text: row.content }],
  }));

  return (
    <>
      <SiteHeader />
      <main className="mx-auto grid w-full max-w-6xl flex-1 gap-6 px-4 py-6 lg:grid-cols-[minmax(0,1fr)_340px] lg:px-6 lg:py-8">
        <ZioChat initialMessages={initialMessages} />
        <div className="lg:sticky lg:top-24 lg:self-start"><MemoryPanel initialMemories={memoryRows} /></div>
      </main>
    </>
  );
}
