"use client";

import { useState, type FormEvent } from "react";

type MemoryItem = { id: string; kind: string; content: string; status: string };

export function MemoryPanel({ initialMemories }: { initialMemories: MemoryItem[] }) {
  const [memories, setMemories] = useState(initialMemories);
  const [content, setContent] = useState("");
  const [kind, setKind] = useState("note");
  const [pending, setPending] = useState(false);
  const [removingId, setRemovingId] = useState<string | null>(null);
  const [error, setError] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!content.trim()) return;
    setPending(true);
    setError("");
    try {
      const response = await fetch("/api/memories", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content, kind }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error ?? "Unable to save this note.");
      setMemories((current) => [result.memory, ...current].slice(0, 20));
      setContent("");
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "Unable to save this note.");
    } finally {
      setPending(false);
    }
  }

  async function removeMemory(id: string) {
    setRemovingId(id);
    setError("");
    try {
      const response = await fetch(`/api/memories?id=${encodeURIComponent(id)}`, { method: "DELETE" });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error ?? "Unable to remove this note.");
      setMemories((current) => current.filter((memory) => memory.id !== id));
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "Unable to remove this note.");
    } finally {
      setRemovingId(null);
    }
  }

  return (
    <aside className="rounded-3xl border border-line bg-surface p-5 sm:p-6">
      <div>
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent-2">Contextual memory</p>
        <h2 className="mt-2 text-xl font-semibold">Your saved context</h2>
        <p className="mt-2 text-sm leading-6 text-muted">Only notes you save here can shape future replies. You can review them whenever you like.</p>
      </div>
      <form onSubmit={onSubmit} className="mt-5 space-y-3">
        <label htmlFor="memory-kind" className="sr-only">Memory category</label>
        <select id="memory-kind" value={kind} onChange={(event) => setKind(event.target.value)} className="w-full rounded-xl border border-line bg-background px-3 py-2.5 text-sm text-foreground outline-none focus:border-accent">
          <option value="note">Note</option>
          <option value="goal">Goal</option>
          <option value="preference">Preference</option>
          <option value="project">Project</option>
        </select>
        <label htmlFor="memory-content" className="sr-only">Context to save</label>
        <textarea id="memory-content" value={content} onChange={(event) => setContent(event.target.value)} maxLength={1200} rows={3} placeholder="What should ZIO keep in mind?" className="w-full resize-y rounded-xl border border-line bg-background px-3 py-2.5 text-sm outline-none placeholder:text-muted focus:border-accent" />
        {error && <p role="alert" className="text-sm text-red-300">{error}</p>}
        <button type="submit" disabled={pending || !content.trim()} className="w-full rounded-full border border-line px-4 py-2.5 text-sm font-medium transition-colors hover:border-accent disabled:opacity-50">
          {pending ? "Saving…" : "Save approved context"}
        </button>
      </form>
      <div className="mt-6 border-t border-line pt-5">
        <h3 className="text-sm font-medium">Recent notes <span className="text-muted">({memories.length})</span></h3>
        {memories.length ? (
          <ul className="mt-3 space-y-3">
            {memories.slice(0, 8).map((memory) => (
              <li key={memory.id} className="rounded-xl bg-background/70 p-3">
                <div className="flex items-start justify-between gap-3">
                  <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-accent-2">{memory.kind}</span>
                  <button
                    type="button"
                    onClick={() => removeMemory(memory.id)}
                    disabled={removingId === memory.id}
                    aria-label={`Remove saved ${memory.kind}`}
                    className="shrink-0 text-xs text-muted underline decoration-line underline-offset-2 hover:text-foreground disabled:opacity-50"
                  >
                    {removingId === memory.id ? "Removing…" : "Remove"}
                  </button>
                </div>
                <p className="mt-1 text-sm leading-5 text-muted">{memory.content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-3 text-sm leading-5 text-muted">No context saved yet. Add a note when you want ZIO to remember something.</p>
        )}
      </div>
    </aside>
  );
}
