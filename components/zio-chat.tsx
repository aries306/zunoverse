"use client";

import { useChat } from "@ai-sdk/react";
import { ArrowUp, Square } from "lucide-react";
import { useState, type FormEvent, type KeyboardEvent } from "react";

const starters = [
  "Here's what I'm working on this week — help me find the one thing that matters.",
  "I keep putting off my pricing page. What's really going on?",
  "Turn my launch idea into three concrete next steps.",
];

export function ZioChat({ initialMessages }: { initialMessages: import("ai").UIMessage[] }) {
  const [input, setInput] = useState("");
  const { messages, sendMessage, status, stop, error } = useChat({ id: "zio-main", messages: initialMessages });
  const busy = status === "submitted" || status === "streaming";

  function submit(text: string) {
    const trimmed = text.trim();
    if (!trimmed || busy) return;
    sendMessage({ text: trimmed });
    setInput("");
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    submit(input);
  }

  function onKeyDown(e: KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key !== "Enter" || e.shiftKey) return;
    if (e.nativeEvent.isComposing || e.keyCode === 229) return;
    e.preventDefault();
    submit(input);
  }

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-4">
      <div className="flex-1 py-8" aria-live="polite">
        {messages.length === 0 ? (
          <div className="flex flex-col items-center pt-12 text-center">
            <h1 className="text-balance text-3xl font-semibold md:text-4xl">
              What are you building toward?
            </h1>
            <p className="mt-3 max-w-md text-muted">
              Tell ZIO what you&apos;re working on, in normal language. It listens for what matters.
            </p>
            <ul className="mt-10 grid w-full gap-3">
              {starters.map((s) => (
                <li key={s}>
                  <button
                    type="button"
                    onClick={() => submit(s)}
                    className="w-full rounded-2xl border border-line bg-surface px-5 py-4 text-left text-sm transition-colors hover:border-accent/50"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <ul className="flex flex-col gap-6">
            {messages.map((message) => (
              <li
                key={message.id}
                className={message.role === "user" ? "flex justify-end" : "flex justify-start"}
              >
                <div
                  className={
                    message.role === "user"
                      ? "max-w-[85%] rounded-2xl rounded-br-sm bg-accent px-4 py-3 text-white"
                      : "max-w-[85%] rounded-2xl rounded-bl-sm border border-line bg-surface px-4 py-3"
                  }
                >
                  <span className="sr-only">{message.role === "user" ? "You:" : "ZIO:"}</span>
                  {message.parts.map((part, i) =>
                    part.type === "text" ? (
                      <p key={`${message.id}-${i}`} className="whitespace-pre-wrap leading-relaxed">
                        {part.text}
                      </p>
                    ) : null,
                  )}
                </div>
              </li>
            ))}
            {status === "submitted" && (
              <li className="text-sm text-muted">ZIO is thinking…</li>
            )}
          </ul>
        )}
        {error && (
          <p role="alert" className="mt-6 text-sm text-red-400">
            Something went wrong. Please try again.
          </p>
        )}
      </div>

      <form
        onSubmit={onSubmit}
        className="sticky bottom-0 mb-4 flex items-end gap-2 rounded-2xl border border-line bg-surface p-2 shadow-2xl"
      >
        <label htmlFor="zio-input" className="sr-only">
          Message ZIO
        </label>
        <textarea
          id="zio-input"
          rows={1}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={onKeyDown}
          placeholder="Message ZIO…"
          className="max-h-40 flex-1 resize-none bg-transparent px-3 py-2 text-foreground outline-none placeholder:text-muted"
        />
        {busy ? (
          <button
            type="button"
            onClick={stop}
            aria-label="Stop generating"
            className="flex size-10 items-center justify-center rounded-xl bg-white/10"
          >
            <Square className="size-4" aria-hidden="true" />
          </button>
        ) : (
          <button
            type="submit"
            disabled={!input.trim()}
            aria-label="Send message"
            className="flex size-10 items-center justify-center rounded-xl bg-accent text-white disabled:opacity-40"
          >
            <ArrowUp className="size-4" aria-hidden="true" />
          </button>
        )}
      </form>
    </div>
  );
}
