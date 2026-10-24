import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { ZioChat } from "@/components/zio-chat";

export const metadata: Metadata = {
  title: "Talk to ZIO",
  description: "Talk to ZIO like a partner. It listens for what matters and names your next move.",
};

export default function ChatPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <ZioChat />
      </main>
    </>
  );
}
