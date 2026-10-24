import { Eye, Gauge, ShieldCheck } from "lucide-react";

const loop = [
  ["Interact", "Tell ZIO what you're working on, in normal language."],
  ["Understand", "ZIO identifies goals, preferences, friction and patterns."],
  ["Learn", "Meaningful context becomes memory — with your permission."],
  ["Adapt", "Responses shift to match how you actually work."],
  ["Anticipate", "ZIO surfaces the next best move before you ask."],
];

const principles = [
  {
    icon: ShieldCheck,
    title: "You stay in control",
    body: "See everything ZIO remembers. Edit it, correct it, delete it, or pause learning entirely.",
  },
  {
    icon: Gauge,
    title: "Honest about confidence",
    body: "Every insight carries a confidence level — \u201CI've noticed\u2026\u201D, never \u201Cyou are\u2026\u201D.",
  },
  {
    icon: Eye,
    title: "Psychology, used well",
    body: "Behavioral science applied to clarity and momentum — never manipulation, labels or diagnoses.",
  },
];

const stages = [
  ["Assistant", "Tell me what you need."],
  ["Personalized", "I know your goals and preferences."],
  ["Partner", "I understand how you work."],
  ["Proactive", "I noticed something you should know."],
  ["Anticipatory", "Based on where you're going, here's your next move."],
  ["Private intelligence", "I've already handled it."],
];

export function Intelligence() {
  return (
    <section id="intelligence" className="scroll-mt-20 border-y border-line bg-surface/50">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-sm uppercase tracking-[0.18em] text-accent-2">How it learns</p>
        <h2 className="mt-3 max-w-2xl text-balance text-3xl font-semibold md:text-4xl">
          Not another chatbot. An intelligence that compounds.
        </h2>

        <ol className="mt-12 grid gap-4 md:grid-cols-5">
          {loop.map(([title, body], i) => (
            <li key={title} className="rounded-2xl border border-line bg-background p-5">
              <span className="font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-2 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
            </li>
          ))}
        </ol>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {principles.map(({ icon: Icon, title, body }) => (
            <div key={title} className="rounded-2xl border border-line bg-background p-6">
              <Icon className="size-5 text-accent-2" aria-hidden="true" />
              <h3 className="mt-4 font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
            </div>
          ))}
        </div>

        <h3 className="mt-20 text-2xl font-semibold">From assistant to private intelligence.</h3>
        <ol className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {stages.map(([title, quote], i) => (
            <li key={title} className="bg-background p-6">
              <span className="text-xs uppercase tracking-[0.18em] text-muted">Stage {i + 1}</span>
              <p className="mt-2 font-display text-lg font-semibold">{title}</p>
              <p className="mt-1 text-sm text-muted">&ldquo;{quote}&rdquo;</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
