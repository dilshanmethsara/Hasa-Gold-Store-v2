import { MessageCircle } from "lucide-react";
import { useState } from "react";

export function FloatingSupport() {
  const [open, setOpen] = useState(false);
  return (
    <>
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-80 glass-strong rounded-2xl p-5 animate-scale-in">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-semibold">Hi 👋 Need help?</div>
              <div className="text-xs text-muted-foreground">Average reply: 2 min</div>
            </div>
            <button onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground text-lg leading-none">×</button>
          </div>
          <div className="mt-4 rounded-xl bg-secondary p-3 text-sm">
            Welcome to HASA support. How can we help with your top-up today?
          </div>
          <input
            placeholder="Type your message…"
            className="mt-3 w-full px-3 py-2 rounded-xl bg-background border border-border text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
      )}
      <button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-primary to-cyan text-primary-foreground flex items-center justify-center shadow-[var(--shadow-glow)] hover:scale-105 transition-transform animate-pulse-glow"
        aria-label="Support chat"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    </>
  );
}
