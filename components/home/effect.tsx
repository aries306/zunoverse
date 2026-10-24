import { ArrowRight } from "lucide-react";

const shifts = [
  ["Feeling overwhelmed", "Clarity about what matters most"],
  ["Managing repetitive tasks", "Focus on meaningful work"],
  ["Constantly catching up", "Building real momentum"],
  ["A business that needs you everywhere", "Systems that create value behind the scenes"],
];

export function Effect() {
  return (
    <section id="effect" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
      <p className="text-sm uppercase tracking-[0.18em] text-accent-2">The ZIO Effect</p>
      <h2 className="mt-3 max-w-2xl text-balance text-3xl font-semibold md:text-4xl">
        When intelligent systems work together, work starts to feel lighter.
      </h2>
      <ul className="mt-12 grid gap-4 md:grid-cols-2">
        {shifts.map(([from, to]) => (
          <li
            key={from}
            className="flex items-center gap-4 rounded-2xl border border-line bg-surface p-6"
          >
            <span className="flex-1 text-muted line-through decoration-muted/40">{from}</span>
            <ArrowRight className="size-4 shrink-0 text-accent" aria-hidden="true" />
            <span className="flex-1 font-medium">{to}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
