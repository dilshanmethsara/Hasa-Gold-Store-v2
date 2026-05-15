import { createFileRoute } from "@tanstack/react-router";
import { Plus, ArrowDownLeft, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/dashboard/wallet")({
  component: WalletPage,
});

const tx = [
  { id: 1, t: "Top-up to Wallet", v: 50, in: true, d: "Today" },
  { id: 2, t: "Free Fire — 310 Diamonds", v: -2.99, in: false, d: "Today" },
  { id: 3, t: "PUBG — 660 UC", v: -9.99, in: false, d: "Yesterday" },
  { id: 4, t: "Wallet refund", v: 4.99, in: true, d: "3 days ago" },
];

function WalletPage() {
  return (
    <div className="space-y-6">
      <div>
        <div className="text-xs uppercase tracking-widest text-primary font-semibold">Wallet</div>
        <h1 className="text-3xl font-bold mt-1">Manage your balance</h1>
      </div>

      <div className="grid lg:grid-cols-[1fr_320px] gap-6">
        <div className="rounded-3xl p-8 bg-gradient-to-br from-primary via-electric to-cyan text-primary-foreground relative overflow-hidden animate-gradient">
          <div className="absolute inset-0 grid-pattern opacity-20" />
          <div className="absolute -right-10 -bottom-10 w-48 h-48 rounded-full bg-white/15 blur-2xl" />
          <div className="relative">
            <div className="text-xs uppercase tracking-widest opacity-80">Available balance</div>
            <div className="mt-2 text-5xl font-bold">$42.10</div>
            <div className="mt-1 text-sm opacity-85">≈ 4,210 HASA points</div>

            <div className="mt-8 flex gap-3">
              <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-primary text-sm font-semibold hover:scale-[1.02] transition-transform">
                <Plus className="w-4 h-4" /> Add funds
              </button>
              <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/15 backdrop-blur text-white text-sm font-medium border border-white/20">
                Withdraw
              </button>
            </div>
          </div>
        </div>

        <div className="glass-strong rounded-3xl p-6">
          <h3 className="text-sm font-semibold">Quick top-up</h3>
          <div className="mt-4 grid grid-cols-3 gap-2">
            {[10, 25, 50, 100, 250, 500].map((v) => (
              <button key={v} className="px-3 py-2.5 rounded-xl bg-secondary hover:bg-accent text-sm font-medium transition-colors">
                ${v}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="glass-strong rounded-3xl p-6">
        <h2 className="text-lg font-semibold">Recent transactions</h2>
        <div className="mt-4 divide-y divide-border">
          {tx.map((t) => (
            <div key={t.id} className="py-3.5 flex items-center gap-4">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${t.in ? "bg-success/15 text-success" : "bg-destructive/15 text-destructive"}`}>
                {t.in ? <ArrowDownLeft className="w-4 h-4" /> : <ArrowUpRight className="w-4 h-4" />}
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium">{t.t}</div>
                <div className="text-xs text-muted-foreground">{t.d}</div>
              </div>
              <div className={`text-sm font-semibold ${t.in ? "text-success" : "text-foreground"}`}>
                {t.in ? "+" : ""}${Math.abs(t.v).toFixed(2)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
