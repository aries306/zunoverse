import {
  Brain,
  Lightbulb,
  MessageSquare,
  PenLine,
  Puzzle,
  Search,
  Target,
  Wrench,
} from "lucide-react";

const systems = [
  { icon: MessageSquare, title: "Conversation", body: "Talk to ZIO like a partner. It remembers what matters and adapts how it helps." },
  { icon: Brain, title: "Intelligence Profile", body: "A living picture of what ZIO has learned — focus, patterns, motivation, opportunity." },
  { icon: Target, title: "Goals & Momentum", body: "Goals, projects, wins and streaks — tracked so ZIO can protect your momentum." },
  { icon: Lightbulb, title: "Next-Best Action", body: "Instead of seventeen options, ZIO names the one move that matters most right now." },
  { icon: PenLine, title: "Content Engine", body: "Posts, emails, scripts and campaigns — written in your voice, tuned to your audience." },
  { icon: Puzzle, title: "Prompt Builder", body: "Craft professional prompts with structure: role, context, objective, format, constraints." },
  { icon: Wrench, title: "Toolkits", body: "Frameworks for clarity, decisions and momentum — the operating systems behind outcomes." },
  { icon: Search, title: "Insight Engine", body: "Pattern recognition across your work — surfaced with evidence and honest confidence." },
];

export function Systems() {
  return (
    <section id="systems" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
      <p className="text-sm uppercase tracking-[0.18em] text-accent-2">One ecosystem</p>
      <h2 className="mt-3 max-w-2xl text-balance text-3xl font-semibold md:text-4xl">
        Capabilities wired into one intelligence.
      </h2>
      <p className="mt-4 max-w-2xl text-muted">
        Every capability shares the same memory, the same context, the same understanding of you.
        Nothing is a separate app.
      </p>
      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {systems.map(({ icon: Icon, title, body }) => (
          <li key={title} className="rounded-2xl border border-line bg-surface p-6">
            <span className="flex size-10 items-center justify-center rounded-xl bg-accent/15">
              <Icon className="size-5 text-accent" aria-hidden="true" />
            </span>
            <h3 className="mt-4 font-semibold">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
