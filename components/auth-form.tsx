"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { authClient } from "@/lib/auth-client";

type AuthFormProps = { mode: "sign-in" | "sign-up" };

export function AuthForm({ mode }: AuthFormProps) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);
  const isSignUp = mode === "sign-up";

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setPending(true);
    try {
      const result = isSignUp
        ? await authClient.signUp.email({ name: name.trim(), email: email.trim(), password })
        : await authClient.signIn.email({ email: email.trim(), password });
      if (result.error) {
        setError("We couldn’t sign you in with those details. Check them and try again.");
        return;
      }
      router.replace("/chat");
      router.refresh();
    } catch {
      setError("We couldn’t complete that request. Please try again.");
    } finally {
      setPending(false);
    }
  }

  return (
    <section className="w-full max-w-md rounded-3xl border border-line bg-surface p-7 shadow-2xl sm:p-9">
      <p className="text-xs font-medium uppercase tracking-[0.22em] text-accent-2">Private by design</p>
      <h1 className="mt-4 text-3xl font-semibold">{isSignUp ? "Start with ZIO" : "Welcome back"}</h1>
      <p className="mt-2 text-sm leading-6 text-muted">
        {isSignUp ? "Create an account to begin building a context that stays yours." : "Sign in to return to your conversations and saved context."}
      </p>
      <form onSubmit={onSubmit} className="mt-8 space-y-4">
        {isSignUp && (
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm text-muted">Name</label>
            <input id="name" name="name" autoComplete="name" required maxLength={80} value={name} onChange={(event) => setName(event.target.value)} className="w-full rounded-xl border border-line bg-background px-4 py-3 outline-none transition focus:border-accent" />
          </div>
        )}
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm text-muted">Email</label>
          <input id="email" name="email" type="email" autoComplete="email" required maxLength={254} value={email} onChange={(event) => setEmail(event.target.value)} className="w-full rounded-xl border border-line bg-background px-4 py-3 outline-none transition focus:border-accent" />
        </div>
        <div className="space-y-2">
          <label htmlFor="password" className="text-sm text-muted">Password</label>
          <input id="password" name="password" type="password" autoComplete={isSignUp ? "new-password" : "current-password"} required minLength={8} maxLength={128} value={password} onChange={(event) => setPassword(event.target.value)} className="w-full rounded-xl border border-line bg-background px-4 py-3 outline-none transition focus:border-accent" />
        </div>
        {error && <p role="alert" className="text-sm text-red-300">{error}</p>}
        <button type="submit" disabled={pending} className="w-full rounded-full bg-foreground px-5 py-3 font-medium text-background transition-opacity hover:opacity-90 disabled:opacity-50">
          {pending ? "Please wait…" : isSignUp ? "Create account" : "Sign in"}
        </button>
      </form>
      <p className="mt-6 text-center text-sm text-muted">
        {isSignUp ? "Already have an account? " : "New to ZIO? "}
        <Link href={isSignUp ? "/sign-in" : "/sign-up"} className="text-foreground underline decoration-accent underline-offset-4">
          {isSignUp ? "Sign in" : "Create an account"}
        </Link>
      </p>
    </section>
  );
}
