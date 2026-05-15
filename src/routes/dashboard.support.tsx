import { createFileRoute } from "@tanstack/react-router";
import { Send } from "lucide-react";

export const Route = createFileRoute("/dashboard/support")({
  component: Support,
});

const messages = [
  { who: "agent", t: "Hi Hassan! How can we help today? 👋", time: "10:24" },
  { who: "you", t: "My PUBG order is still pending.", time: "10:25" },
  { who: "agent", t: "Looking into it now — order HG-10420. Stand by.", time: "10:25" },
];

function Support() {
  return (
    <div className="space-y-6">
      <div>
        <div className="text-xs uppercase tracking-widest text-primary font-semibold">Support</div>
        <h1 className="text-3xl font-bold mt-1">We're here to help</h1>
      </div>

      <div className="glass-strong rounded-3xl p-0 overflow-hidden">
        <div className="px-6 py-4 border-b border-border flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-cyan flex items-center justify-center text-primary-foreground text-sm font-semibold">HS</div>
          <div className="flex-1">
            <div className="text-sm font-semibold">HASA Support</div>
            <div className="text-xs text-success flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" /> Online · ~2min response
            </div>
          </div>
        </div>
        <div className="p-6 space-y-3 min-h-[300px] bg-secondary/30">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.who === "you" ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-[70%] px-4 py-2.5 rounded-2xl text-sm ${
                m.who === "you" ? "bg-primary text-primary-foreground" : "bg-card border border-border"
              }`}>
                {m.t}
                <div className={`text-[10px] mt-1 ${m.who === "you" ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{m.time}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="p-4 border-t border-border flex gap-2">
          <input placeholder="Type a message…" className="flex-1 px-4 py-2.5 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-ring text-sm" />
          <button className="px-4 rounded-xl bg-primary text-primary-foreground"><Send className="w-4 h-4" /></button>
        </div>
      </div>
    </div>
  );
}
