"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import { Bot, LoaderCircle, MessageCircle, Send, X } from "lucide-react";

type ChatMessage = {
  id: number;
  role: "assistant" | "user";
  text: string;
};

function MessageText({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\]\(\/(?:[a-z0-9-]+)?(?:#[a-z0-9-]+)?\))/gi);

  return (
    <>
      {parts.map((part, index) => {
        const match = part.match(/^\[([^\]]+)\]\((\/(?:[a-z0-9-]+)?(?:#[a-z0-9-]+)?)\)$/i);
        if (!match) return <span key={index}>{part}</span>;
        return (
          <Link key={index} href={match[2]} className="font-medium underline underline-offset-2">
            {match[1]}
          </Link>
        );
      })}
    </>
  );
}

export default function SiteAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 0,
      role: "assistant",
      text: "Hello. Ask me about Alpha Interoil’s services, fleet, training, or QHSE information.",
    },
  ]);
  const nextMessageId = useRef(1);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, isLoading]);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const question = input.trim();
    if (!question || isLoading) return;

    setInput("");
    setMessages((current) => [
      ...current,
      { id: nextMessageId.current++, role: "user", text: question },
    ]);
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: question }),
      });
      const data = (await response.json()) as { answer?: string; error?: string };
      setMessages((current) => [
        ...current,
        {
          id: nextMessageId.current++,
          role: "assistant",
          text: data.answer || data.error || "I couldn’t answer that just now. Please try again.",
        },
      ]);
    } catch {
      setMessages((current) => [
        ...current,
        {
          id: nextMessageId.current++,
          role: "assistant",
          text: "I’m having trouble connecting. Please try again or use the Contact page.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      {isOpen && (
        <section
          aria-label="Alpha Interoil assistant"
          className="fixed bottom-24 right-4 z-[60] flex h-[min(560px,calc(100dvh-8rem))] w-[min(400px,calc(100vw-2rem))] flex-col overflow-hidden border border-border bg-background shadow-2xl sm:right-6"
        >
          <header className="flex items-center justify-between bg-surface-strong px-5 py-4 text-surface-strong-foreground">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand text-brand-foreground">
                <Bot className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h2 className="font-medium">Alpha Assistant</h2>
                <p className="text-xs text-surface-strong-foreground/70">Company information</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close assistant"
              className="rounded p-2 hover:bg-surface-strong-foreground/10"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </header>

          <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto p-4" aria-live="polite">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`max-w-[88%] whitespace-pre-wrap rounded-lg px-4 py-3 text-sm leading-relaxed ${
                  message.role === "user"
                    ? "ml-auto bg-brand text-brand-foreground"
                    : "mr-auto border border-border bg-secondary text-foreground"
                }`}
              >
                <MessageText text={message.text} />
              </div>
            ))}
            {isLoading && (
              <div className="mr-auto flex items-center gap-2 rounded-lg border border-border bg-secondary px-4 py-3 text-sm text-muted-foreground">
                <LoaderCircle className="h-4 w-4 animate-spin" aria-hidden="true" />
                Looking that up…
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="flex items-center gap-2 border-t border-border p-3">
            <label htmlFor="assistant-question" className="sr-only">Ask a question</label>
            <input
              ref={inputRef}
              id="assistant-question"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              maxLength={1200}
              placeholder="Ask about the company…"
              className="h-11 min-w-0 flex-1 rounded-md border border-input bg-background px-3 text-sm text-foreground outline-none placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              aria-label="Send question"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-brand text-brand-foreground disabled:cursor-not-allowed disabled:opacity-50"
            >
              <Send className="h-4 w-4" aria-hidden="true" />
            </button>
          </form>
          <p className="px-4 pb-3 text-center text-[11px] text-muted-foreground">
            Answers use information published on this website.
          </p>
        </section>
      )}

      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-label={isOpen ? "Close Alpha assistant" : "Open Alpha assistant"}
        aria-expanded={isOpen}
        className="fixed bottom-5 right-4 z-[60] flex h-14 items-center gap-2 rounded-full bg-brand px-5 text-sm font-medium text-brand-foreground shadow-lg transition-transform hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:right-6"
      >
        {isOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <MessageCircle className="h-5 w-5" aria-hidden="true" />}
        <span>{isOpen ? "Close" : "Ask Alpha"}</span>
      </button>
    </>
  );
}
