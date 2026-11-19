import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { AuthForm } from "@/components/auth-form";
import { Logo } from "@/components/logo";
import { auth } from "@/lib/auth";

export const metadata: Metadata = { title: "Create an account — ZIO" };

export default async function SignUpPage() {
  const session = await auth.api.getSession({ headers: await headers() });
  if (session?.user) redirect("/chat");

  return (
    <main className="flex min-h-screen flex-1 flex-col px-5 py-6 sm:px-8">
      <div className="w-fit"><Logo /></div>
      <div className="flex flex-1 items-center justify-center py-12"><AuthForm mode="sign-up" /></div>
    </main>
  );
}
