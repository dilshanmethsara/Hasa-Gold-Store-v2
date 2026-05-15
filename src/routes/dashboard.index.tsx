import { createFileRoute, Link } from "@tanstack/react-router";
import { recentOrders, games } from "@/lib/data";
import { ArrowUpRight, TrendingUp, Wallet, ShoppingBag, Sparkles } from "lucide-react";

export const Route = createFileRoute("/dashboard/")({
  component: DashboardOverview,
});

function DashboardOverview() {
  const stats = [
    { label: "Wallet balance", value: "$42.10", icon: Wallet, color: "from-primary to-cyan" },
    { label: "Total orders", value: "27", icon: ShoppingBag, color: "from-emerald-500 to-teal-500" },
    { label: "This month", value: "$184.20", icon: TrendingUp, color: "from-amber-500 to-orange-500" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <div className="text-xs uppercase tracking-widest text-primary font-semibold">Welcome back</div>
          <h1 className="text-3xl font-bold mt-1">Hello, Hassan 👋</h1>
        </div>
        <Link to="/games" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-br from-primary to-electric text-primary-foreground text-sm font-medium shadow-[var(--shadow-glow)] hover:scale-[1.02] transition-transform">
          <Sparkles className="w-4 h-4" /> New top-up
        </Link>
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        {stats.map((s, i) => (
          <div key={s.label} className="glass-strong rounded-3xl p-5 animate-fade-up" style={{ animationDelay: `${i * 60}ms` }}>
            <div className="flex items-center justify-between">
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center text-white`}>
                <s.icon className="w-5 h-5" />
              </div>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground" />
            </div>
            <div className="mt-4 text-2xl font-bold">{s.value}</div>
            <div className="text-xs text-muted-foreground mt-0.5">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-[1fr_320px] gap-6">
        <div className="glass-strong rounded-3xl p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Recent orders</h2>
            <Link to="/dashboard/orders" className="text-sm text-primary hover:underline">View all</Link>
          </div>
          <div className="mt-4 divide-y divide-border">
            {recentOrders.slice(0, 5).map((o) => (
              <div key={o.id} className="py-3 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-lg">
                  {games.find((g) => g.name === o.game)?.emoji ?? "🎮"}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium truncate">{o.pack}</div>
                  <div className="text-xs text-muted-foreground truncate">{o.game} · {o.id}</div>
                </div>
                <StatusBadge s={o.status} />
                <div className="text-sm font-semibold w-20 text-right">${o.total.toFixed(2)}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="glass-strong rounded-3xl p-6">
            <h3 className="text-sm font-semibold">Saved game IDs</h3>
            <div className="mt-4 space-y-3">
              {games.slice(0, 3).map((g) => (
                <div key={g.id} className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${g.accent} flex items-center justify-center text-lg`}>{g.emoji}</div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium">{g.name}</div>
                    <div className="text-xs text-muted-foreground">ID: 1029***234</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl p-6 bg-gradient-to-br from-primary to-electric text-primary-foreground relative overflow-hidden">
            <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-white/15 blur-2xl" />
            <div className="relative">
              <div className="text-xs uppercase tracking-widest opacity-80">Promo</div>
              <div className="mt-1 text-lg font-semibold">Get 10% off your next top-up</div>
              <div className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/20 text-xs font-mono">
                HASA10
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function StatusBadge({ s }: { s: "completed" | "pending" | "failed" }) {
  const map = {
    completed: "bg-success/15 text-success",
    pending: "bg-warning/15 text-warning",
    failed: "bg-destructive/15 text-destructive",
  } as const;
  return <span className={`text-[11px] font-semibold px-2 py-1 rounded-full capitalize ${map[s]}`}>{s}</span>;
}
