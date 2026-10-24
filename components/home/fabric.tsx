import Link from "next/link";

const coreLoop = [
  "Context",
  "Contextual Memory",
  "Work Graph",
  "Connected Sources",
  "Hybrid Retrieval",
  "Reasoning",
  "Shadow",
  "Governance",
  "Idempotent Action",
  "Connector Runtime",
  "Evidence",
  "Outcome Verification",
  "Contradiction Scan",
  "Learning Candidate",
  "Memory Re-evaluation",
];

export function Fabric() {
  return (
    <section id="fabric" className="scroll-mt-20 border-t border-line bg-surface/50">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-sm uppercase tracking-[0.18em] text-accent-2">Autonomous fabric 5.8</p>
        <h2 className="mt-3 max-w-2xl text-balance text-3xl font-semibold md:text-4xl">
          Every action is governed, evidenced and verified.
        </h2>
        <ol className="mt-10 flex flex-wrap gap-2" aria-label="ZIO core loop">
          {coreLoop.map((step, i) => (
            <li
              key={step}
              className="rounded-full border border-line bg-background px-3 py-1.5 text-sm"
            >
              <span className="mr-2 font-mono text-xs text-muted">{i + 1}</span>
              {step}
            </li>
          ))}
        </ol>

        <div className="mt-20 flex flex-col items-center rounded-3xl border border-line bg-gradient-to-br from-accent/20 to-accent-2/10 px-6 py-16 text-center">
          <h2 className="text-balance text-3xl font-semibold md:text-4xl">
            Meet an intelligence that meets you back.
          </h2>
          <p className="mt-4 max-w-lg text-muted">
            Two minutes of conversation and it starts understanding where you&apos;re going.
          </p>
          <Link
            href="/chat"
            className="mt-8 rounded-full bg-foreground px-6 py-3 font-medium text-background transition-opacity hover:opacity-90"
          >
            Start with ZIO
          </Link>
        </div>
      </div>
    </section>
  );
}
