"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

interface Action { label: string; href: string }

interface Message {
  role: "user" | "assistant";
  content: string;
  actions?: Action[];
  followUps?: string[];
}

const GREETING: Message = {
  role: "assistant",
  content:
    "Hey! I'm Nova, TechUnaVerse's AI guide. I know every service, package, and division inside and out. What would you like to explore?",
};

const INITIAL_SUGGESTIONS = [
  "What AI services do you offer?",
  "How much does a KnowledgeBot cost?",
  "Tell me about UNA Studios",
  "How do I get started?",
];

// ── Helpers ────────────────────────────────────────────────────────────────────

function getActions(content: string): Action[] {
  const lower = content.toLowerCase();
  const actions: Action[] = [];
  if (
    lower.includes("book") ||
    lower.includes("discovery call") ||
    lower.includes("reach out") ||
    lower.includes("contact") ||
    lower.includes("inquiry")
  ) {
    actions.push({ label: "Book a Free Call →", href: "/contact" });
  }
  if (
    lower.includes("service") ||
    lower.includes("package") ||
    lower.includes("pricing") ||
    lower.includes("$")
  ) {
    actions.push({ label: "View All Services →", href: "/services" });
  }
  return actions.slice(0, 2);
}

function getFollowUps(content: string): string[] {
  const lower = content.toLowerCase();
  if (lower.includes("knowledgebot") || lower.includes("chatbot") || lower.includes("ai bot")) {
    return ["What's included in setup?", "How long does it take to build?", "Can it capture leads?"];
  }
  if (lower.includes("automation") || lower.includes("workflow")) {
    return ["What tools do you integrate with?", "What's a good automation use case?", "What does setup look like?"];
  }
  if (lower.includes("website") || lower.includes("web development")) {
    return ["Do you do e-commerce sites?", "What's your design process?", "How long does a site take?"];
  }
  if (lower.includes("strategy session") || lower.includes("$250")) {
    return ["What happens in a strategy session?", "Who leads the session?", "How do I book one?"];
  }
  if (lower.includes("digital transformation") || lower.includes("$5,000")) {
    return ["What's the implementation process?", "How long does it take?", "Who is this best for?"];
  }
  if (lower.includes("studios") || lower.includes("paddle") || lower.includes("engraving") || lower.includes("woodwork")) {
    return ["How do I get a quote?", "What's the turnaround time?", "Do you ship?"];
  }
  if (lower.includes("division") || lower.includes("builduna") || lower.includes("makers lab") || lower.includes("una apparel")) {
    return ["Which divisions are active now?", "Tell me about TechUnaVerse AI", "How do I get updates on coming-soon divisions?"];
  }
  if (lower.includes("founder") || lower.includes("brionna")) {
    return ["What's her background?", "How do I work directly with her?", "What does founder-led mean for my project?"];
  }
  return ["What services do you offer?", "What does it cost?", "How do I get started?"];
}

// ── Markdown renderer ──────────────────────────────────────────────────────────

function renderInline(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*|\$[\d,]+(?:\+|-[\d,]+\+?)?)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i} className="text-white font-semibold">{part.slice(2, -2)}</strong>;
    }
    if (/^\$[\d,]/.test(part)) {
      return <span key={i} className="text-[#D4AF37] font-semibold">{part}</span>;
    }
    return part;
  });
}

function renderContent(text: string) {
  // Split on blank lines to get paragraphs, then handle any remaining bullets within each
  const paragraphs = text.split(/\n\s*\n/).map(p => p.trim()).filter(Boolean);

  return (
    <div className="space-y-2">
      {paragraphs.map((para, pi) => {
        const lines = para.split("\n").map(l => l.trim()).filter(Boolean);
        const allBullets = lines.every(l => /^(?:[-•*]|\(\d+\)|\d+\.)\s/.test(l));

        if (allBullets) {
          return (
            <ul key={pi} className="space-y-1">
              {lines.map((line, li) => {
                const text = line.replace(/^(?:[-•*]|\(\d+\)|\d+\.)\s+/, "");
                return (
                  <li key={li} className="flex gap-2 items-start leading-snug">
                    <span className="text-[#D4AF37] flex-shrink-0 mt-0.5 text-[0.65rem]">▸</span>
                    <span>{renderInline(text)}</span>
                  </li>
                );
              })}
            </ul>
          );
        }

        return <p key={pi} className="leading-relaxed">{renderInline(lines.join(" "))}</p>;
      })}
    </div>
  );
}

// ── Nova Avatar ────────────────────────────────────────────────────────────────

function NovaAvatar({ size = "md" }: { size?: "sm" | "md" }) {
  const cls = size === "sm" ? "w-6 h-6 text-[0.52rem]" : "w-9 h-9 text-[0.78rem]";
  return (
    <div
      className={`${cls} rounded-full flex items-center justify-center font-black text-white flex-shrink-0`}
      style={{
        background: "linear-gradient(135deg, #D4AF37, #7C3AED)",
        boxShadow: size === "md" ? "0 0 16px rgba(212,175,55,0.45)" : undefined,
      }}
    >
      ✦
    </div>
  );
}

// ── Main Component ─────────────────────────────────────────────────────────────

export default function TyChatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([GREETING]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showInitial, setShowInitial] = useState(true);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 150);
  }, [open]);

  async function send(text?: string) {
    const msg = (text ?? input).trim();
    if (!msg || loading) return;

    setShowInitial(false);
    const userMsg: Message = { role: "user", content: msg };
    const next = [...messages, userMsg];
    setMessages(next);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });

      let data: { reply?: string; error?: string } = {};
      try { data = await res.json(); } catch { /* non-JSON */ }

      const content =
        data.reply ||
        data.error ||
        (res.ok ? "Something went wrong — please try again." : "Nova isn't available right now. Reach out at admin@techunaverse.com");

      const assistantMsg: Message = {
        role: "assistant",
        content,
        actions: data.reply ? getActions(content) : [],
        followUps: data.reply ? getFollowUps(content) : [],
      };

      setMessages((m) => [...m, assistantMsg]);
    } catch {
      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          content: "Having trouble connecting. Please try again or reach out at admin@techunaverse.com",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  const lastAssistantIdx = [...messages].map((m, i) => m.role === "assistant" ? i : -1).filter(i => i >= 0).at(-1);

  return (
    <>
      {/* ── Chat Panel ── */}
      {open && (
        <div
          className="fixed right-5 z-[60] flex flex-col rounded-[20px] overflow-hidden border border-[rgba(212,175,55,0.3)] shadow-[0_24px_70px_rgba(0,0,0,0.65)]"
          style={{
            bottom: "6.5rem",
            width: "min(380px, calc(100vw - 2.5rem))",
            height: "min(560px, calc(100vh - 10rem))",
          }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-3.5 border-b border-[rgba(212,175,55,0.2)] bg-[#0A0E2E] flex-shrink-0">
            <div className="flex items-center gap-3">
              <NovaAvatar size="md" />
              <div>
                <p className="font-bold text-[0.9rem] text-white leading-tight">Nova</p>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0 animate-pulse" />
                  <p className="text-[0.68rem] text-slate-400">TechUnaVerse Guide · Online</p>
                </div>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-slate-500 hover:text-white transition-colors text-xl leading-none pb-0.5"
              aria-label="Close Nova chat"
            >
              ×
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#080C22]">
            {messages.map((msg, i) => {
              const isLastAssistant = i === lastAssistantIdx;
              return (
                <div key={i}>
                  <div className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                    {msg.role === "assistant" && (
                      <div className="mr-2 mt-1 flex-shrink-0">
                        <NovaAvatar size="sm" />
                      </div>
                    )}
                    <div
                      className={`max-w-[82%] rounded-[14px] px-4 py-2.5 text-[0.84rem] leading-relaxed ${
                        msg.role === "user"
                          ? "bg-gradient-to-br from-[#7C3AED] to-[#9D6DF5] text-white rounded-tr-[4px]"
                          : "bg-[rgba(255,255,255,0.05)] border border-[rgba(212,175,55,0.12)] text-slate-200 rounded-tl-[4px]"
                      }`}
                    >
                      {msg.role === "assistant" ? renderContent(msg.content) : msg.content}
                    </div>
                  </div>

                  {/* Action buttons + follow-up chips — only on last assistant message */}
                  {msg.role === "assistant" && isLastAssistant && !loading && (
                    <div className="pl-8 mt-2 space-y-2">
                      {/* CTA action buttons */}
                      {msg.actions && msg.actions.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {msg.actions.map((a) => (
                            <Link
                              key={a.href}
                              href={a.href}
                              onClick={() => setOpen(false)}
                              className="text-[0.75rem] px-3.5 py-1.5 rounded-[8px] bg-gradient-to-r from-[#D4AF37] to-[#B8960A] text-[#080C22] font-bold hover:brightness-110 transition-all duration-200 no-underline"
                            >
                              {a.label}
                            </Link>
                          ))}
                        </div>
                      )}
                      {/* Follow-up suggestion chips */}
                      {msg.followUps && msg.followUps.length > 0 && (
                        <div className="flex flex-wrap gap-1.5">
                          {msg.followUps.map((s) => (
                            <button
                              key={s}
                              onClick={() => send(s)}
                              className="text-[0.72rem] px-2.5 py-1 rounded-full border border-[rgba(212,175,55,0.2)] text-slate-400 hover:border-[rgba(212,175,55,0.55)] hover:text-slate-200 transition-all duration-200 text-left"
                            >
                              {s}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Initial suggestions — shown only before first user message */}
            {showInitial && messages.length === 1 && (
              <div className="flex flex-wrap gap-2 pt-1 pl-8">
                {INITIAL_SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    onClick={() => send(s)}
                    className="text-[0.75rem] px-3 py-1.5 rounded-full border border-[rgba(212,175,55,0.25)] text-slate-300 hover:border-[rgba(212,175,55,0.6)] hover:text-white transition-all duration-200 text-left"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            {/* Loading indicator */}
            {loading && (
              <div className="flex justify-start items-end gap-2">
                <NovaAvatar size="sm" />
                <div className="bg-[rgba(255,255,255,0.05)] border border-[rgba(212,175,55,0.12)] rounded-[14px] rounded-tl-[4px] px-4 py-3">
                  <span className="flex gap-1 items-center">
                    {[0, 150, 300].map((delay) => (
                      <span
                        key={delay}
                        className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full animate-bounce"
                        style={{ animationDelay: `${delay}ms` }}
                      />
                    ))}
                  </span>
                </div>
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="bg-[#0A0E2E] border-t border-[rgba(212,175,55,0.15)] p-3 flex gap-2 flex-shrink-0">
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && send()}
              placeholder="Ask Nova anything…"
              className="flex-1 bg-[rgba(255,255,255,0.05)] border border-[rgba(212,175,55,0.18)] rounded-[10px] px-3.5 py-2.5 text-[0.84rem] text-white placeholder-slate-600 outline-none focus:border-[rgba(212,175,55,0.5)] transition-colors min-w-0"
            />
            <button
              onClick={() => send()}
              disabled={loading || !input.trim()}
              aria-label="Send message"
              className="w-10 h-10 rounded-[10px] bg-gradient-to-br from-[#D4AF37] to-[#B8960A] flex items-center justify-center text-[#080C22] font-black text-lg disabled:opacity-30 disabled:cursor-not-allowed hover:brightness-110 active:scale-95 transition-all flex-shrink-0"
            >
              ↑
            </button>
          </div>
        </div>
      )}

      {/* ── Floating Toggle Button ── */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close Nova" : "Chat with Nova"}
        className="fixed right-5 z-[60] w-14 h-14 rounded-full flex items-center justify-center font-black text-white shadow-[0_6px_30px_rgba(212,175,55,0.55)] hover:shadow-[0_8px_44px_rgba(212,175,55,0.75)] hover:scale-110 active:scale-95 transition-all duration-200"
        style={{
          bottom: "5.25rem",
          background: "linear-gradient(135deg, #D4AF37, #7C3AED)",
        }}
      >
        {open ? "✕" : "✦"}
      </button>
    </>
  );
}
