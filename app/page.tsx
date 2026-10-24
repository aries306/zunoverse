import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/home/hero";
import { Effect } from "@/components/home/effect";
import { Intelligence } from "@/components/home/intelligence";
import { Systems } from "@/components/home/systems";
import { Fabric } from "@/components/home/fabric";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Effect />
        <Intelligence />
        <Systems />
        <Fabric />
      </main>
      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-8 text-sm text-muted sm:flex-row sm:justify-between">
          <p>Your private intelligence. Clarity, confidence, momentum.</p>
          <p>&copy; ZIO. Built for the ambitious.</p>
        </div>
      </footer>
    </>
  );
}
