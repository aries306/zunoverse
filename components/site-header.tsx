import Link from "next/link";
import { headers } from "next/headers";
import { Logo } from "@/components/logo";
import { AccountActions } from "@/components/account-actions";
import { auth } from "@/lib/auth";

const links = [
  { href: "/#effect", label: "Effect" },
  { href: "/#intelligence", label: "Intelligence" },
  { href: "/#systems", label: "Systems" },
  { href: "/#fabric", label: "Fabric" },
];

export async function SiteHeader() {
  const session = await auth.api.getSession({ headers: await headers() });

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Logo />
        <nav aria-label="Main" className="hidden gap-8 text-sm text-muted md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-foreground">{link.label}</Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          {session?.user ? (
            <>
              <span className="hidden max-w-36 truncate text-sm text-muted sm:block">{session.user.name}</span>
              <AccountActions />
              <Link href="/chat" className="rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90">Open ZIO</Link>
            </>
          ) : (
            <>
              <Link href="/sign-in" className="px-2 py-2 text-sm text-muted transition-colors hover:text-foreground">Sign in</Link>
              <Link href="/sign-up" className="rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90">Talk to ZIO</Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
