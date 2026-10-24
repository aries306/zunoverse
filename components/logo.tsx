import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label="ZIO home">
      <span
        aria-hidden="true"
        className="flex size-8 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-accent-2 font-display text-sm font-bold text-background"
      >
        Z
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-base font-semibold">ZIO</span>
        <span className="text-[10px] uppercase tracking-[0.18em] text-muted">
          intelligence layer
        </span>
      </span>
    </Link>
  );
}
