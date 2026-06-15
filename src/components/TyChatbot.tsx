"use client";
import { useState, useRef, useEffect } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const GREETING: Message = {
  role: "assistant",
  content: "Hey! I'm Ty, TechUnaVerse's AI assistant. Ask me about our services, pricing, or anything else — I'm here to help! 👋",
};

export default function TyChatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([GREETING]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 150);
  }, [open]);

  async function send() {
    const text = input.trim();
    if (!text || loading) return;

    const next: Message[] = [...messages, { role: "user", content: text }];
    setMessages(next);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/.netlify/functions/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      const data = await res.json();
      setMessages((m) => [
        ...m,
        { role: "assistant", content: data.reply || data.error || "Something went wrong — please try again." },
      ]);
    } catch {
      setMessages((m) => [
        ...m,
        { role: "assistant", content: "Connection issue. Please try again or reach out at bri@techunaverse.com" },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Chat Panel */}
      {open && (
        <div
          className="fixed right-5 z-[60] flex flex-col rounded-[20px] overflow-hidden border border-[rgba(212,175,55,0.3)] shadow-[0_24px_70px_rgba(0,0,0,0.6)]"
          style={{
            bottom: "6.5rem",
            width: "min(370px, calc(100vw - 2.5rem))",
            height: "min(500px, calc(100vh - 10rem))",
          }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-3.5 border-b border-[rgba(212,175,55,0.2)] bg-[#0A0E2E] flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#7C3AED] flex items-center justify-center font-black text-[0.78rem] text-white shadow-[0_0_14px_rgba(212,175,55,0.45)] flex-shrink-0">
                TY
              </div>
              <div>
                <p className="font-bold text-[0.9rem] text-white leading-tight">Ty</p>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                  <p className="text-[0.68rem] text-slate-400">TechUnaVerse AI · Online</p>
                </div>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-slate-500 hover:text-white transition-colors text-xl leading-none pb-0.5"
              aria-label="Close chat"
            >
              ×
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#080C22]">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                {msg.role === "assistant" && (
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#7C3AED] flex items-center justify-center font-black text-[0.55rem] text-white mr-2 mt-1 flex-shrink-0">
                    TY
                  </div>
                )}
                <div
                  className={`max-w-[80%] rounded-[14px] px-4 py-2.5 text-[0.84rem] leading-relaxed ${
                    msg.role === "user"
                      ? "bg-gradient-to-br from-[#7C3AED] to-[#9D6DF5] text-white rounded-tr-[4px]"
                      : "bg-[rgba(255,255,255,0.05)] border border-[rgba(212,175,55,0.12)] text-slate-200 rounded-tl-[4px]"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start items-end gap-2">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#7C3AED] flex items-center justify-center font-black text-[0.55rem] text-white flex-shrink-0">
                  TY
                </div>
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
              placeholder="Ask Ty anything..."
              className="flex-1 bg-[rgba(255,255,255,0.05)] border border-[rgba(212,175,55,0.18)] rounded-[10px] px-3.5 py-2.5 text-[0.84rem] text-white placeholder-slate-600 outline-none focus:border-[rgba(212,175,55,0.5)] transition-colors min-w-0"
            />
            <button
              onClick={send}
              disabled={loading || !input.trim()}
              aria-label="Send message"
              className="w-10 h-10 rounded-[10px] bg-gradient-to-br from-[#D4AF37] to-[#B8960A] flex items-center justify-center text-[#080C22] font-black text-lg disabled:opacity-30 disabled:cursor-not-allowed hover:brightness-110 active:scale-95 transition-all flex-shrink-0"
            >
              ↑
            </button>
          </div>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close Ty chat" : "Chat with Ty"}
        className="fixed right-5 z-[60] w-14 h-14 rounded-full flex items-center justify-center font-black text-[0.8rem] text-[#080C22] shadow-[0_6px_30px_rgba(212,175,55,0.55)] hover:shadow-[0_8px_44px_rgba(212,175,55,0.75)] hover:scale-110 active:scale-95 transition-all duration-200"
        style={{
          bottom: "5.25rem",
          background: "linear-gradient(135deg, #D4AF37, #B8960A)",
        }}
      >
        {open ? "✕" : "TY"}
      </button>
    </>
  );
}
