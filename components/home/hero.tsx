import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[-12rem] h-[36rem] w-[56rem] -translate-x-1/2 rounded-full bg-accent/20 blur-3xl"
      />
      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6 pb-24 pt-24 text-center md:pt-32">
        <p className="rounded-full border border-line bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-muted">
          A personal intelligence ecosystem
        </p>
        <h1 className="mt-8 text-balance text-5xl font-semibold leading-[1.05] md:text-7xl">
          The intelligence layer for your{" "}
          <span className="bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-transparent">
            ambition.
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted">
          ZIO learns how you work, understands where you&apos;re going, and helps you get there —
          clarity instead of overwhelm, momentum instead of catch-up. Your own private
          intelligence, working behind the scenes.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/chat"
            className="flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 font-medium text-white transition-opacity hover:opacity-90"
          >
            Meet your ZIO
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
          <Link
            href="#intelligence"
            className="rounded-full border border-line px-6 py-3 font-medium transition-colors hover:bg-white/5"
          >
            How it learns
          </Link>
        </div>
        <p className="mt-6 text-sm text-muted">Private by design · Learns with permission · Honest about confidence</p>
      </div>
    </section>
  );
}
