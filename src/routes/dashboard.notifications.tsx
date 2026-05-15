import { createFileRoute } from "@tanstack/react-router";
import { Bell, ShoppingBag, Gift, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/dashboard/notifications")({
  component: Notifications,
});

const items = [
  { id: 1, icon: ShoppingBag, t: "Order HG-10421 delivered", d: "310 Diamonds added to your Free Fire account.", time: "2h ago", unread: true },
  { id: 2, icon: Gift, t: "Promo code HASA10", d: "Save 10% on your next top-up.", time: "1d ago", unread: true },
  { id: 3, icon: ShieldCheck, t: "New device sign-in", d: "iPhone · Karachi · 22:14", time: "2d ago" },
  { id: 4, icon: Bell, t: "Welcome to HASA Gold Store", d: "Your account is ready.", time: "1w ago" },
];

function Notifications() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-xs uppercase tracking-widest text-primary font-semibold">Inbox</div>
          <h1 className="text-3xl font-bold mt-1">Notifications</h1>
        </div>
        <button className="text-sm text-primary font-medium hover:underline">Mark all read</button>
      </div>

      <div className="glass-strong rounded-3xl divide-y divide-border overflow-hidden">
        {items.map((n) => (
          <div key={n.id} className={`p-5 flex gap-4 ${n.unread ? "bg-primary/[0.03]" : ""}`}>
            <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
              <n.icon className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <div className="text-sm font-semibold">{n.t}</div>
                {n.unread && <span className="w-1.5 h-1.5 rounded-full bg-primary" />}
              </div>
              <p className="mt-0.5 text-sm text-muted-foreground">{n.d}</p>
            </div>
            <div className="text-xs text-muted-foreground shrink-0">{n.time}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
