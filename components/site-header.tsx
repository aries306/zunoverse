import Link from "next/link";
import { Logo } from "@/components/logo";

const links = [
  { href: "/#effect", label: "Effect" },
  { href: "/#intelligence", label: "Intelligence" },
  { href: "/#systems", label: "Systems" },
  { href: "/#fabric", label: "Fabric" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Logo />
        <nav aria-label="Main" className="hidden gap-8 text-sm text-muted md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-foreground">
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/chat"
          className="rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
        >
          Talk to ZIO
        </Link>
      </div>
    </header>
  );
}
