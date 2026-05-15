import { createFileRoute } from "@tanstack/react-router";
import { recentOrders, revenueSeries, games } from "@/lib/data";
import { TrendingUp, DollarSign, ShoppingBag, Users, ArrowUpRight } from "lucide-react";
import { StatusBadge } from "./dashboard.index";

export const Route = createFileRoute("/admin/")({
  component: AdminOverview,
});

function AdminOverview() {
  const stats = [
    { l: "Revenue (7d)", v: "$15,082", d: "+18.4%", i: DollarSign, c: "from-emerald-500 to-teal-500" },
    { l: "Orders (7d)", v: "1,284", d: "+12.1%", i: ShoppingBag, c: "from-primary to-electric" },
    { l: "New users", v: "428", d: "+9.6%", i: Users, c: "from-violet-500 to-fuchsia-500" },
    { l: "Conversion", v: "6.4%", d: "+0.8pp", i: TrendingUp, c: "from-amber-500 to-orange-500" },
  ];

  const max = Math.max(...revenueSeries.map((x) => x.v));

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Overview</h1>
        <p className="text-sm text-muted-foreground">Welcome back, admin. Here's what's happening today.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <div key={s.l} className="bg-card rounded-2xl p-5 border border-border animate-fade-up" style={{ animationDelay: `${i * 50}ms` }}>
            <div className="flex items-center justify-between">
              <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${s.c} text-white flex items-center justify-center`}>
                <s.i className="w-[18px] h-[18px]" />
              </div>
              <div className="flex items-center gap-1 text-[11px] font-semibold text-success bg-success/10 px-1.5 py-0.5 rounded">
                <ArrowUpRight className="w-3 h-3" /> {s.d}
              </div>
            </div>
            <div className="mt-4 text-2xl font-bold">{s.v}</div>
            <div className="text-xs text-muted-foreground mt-0.5">{s.l}</div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-[1fr_360px] gap-6">
        <div className="bg-card rounded-2xl p-6 border border-border">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold">Revenue</h2>
              <p className="text-xs text-muted-foreground">Last 7 days</p>
            </div>
            <select className="text-xs px-3 py-1.5 rounded-lg bg-secondary border-0">
              <option>7 days</option><option>30 days</option><option>90 days</option>
            </select>
          </div>
          <div className="mt-6 flex items-end gap-3 h-56">
            {revenueSeries.map((d, i) => (
              <div key={d.d} className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full flex-1 flex items-end">
                  <div
                    className="w-full rounded-t-xl bg-gradient-to-t from-primary to-cyan transition-all hover:opacity-80 animate-fade-up"
                    style={{ height: `${(d.v / max) * 100}%`, animationDelay: `${i * 60}ms` }}
                  />
                </div>
                <div className="text-[10px] text-muted-foreground">{d.d}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-card rounded-2xl p-6 border border-border">
          <h2 className="text-lg font-semibold">Top games</h2>
          <div className="mt-5 space-y-4">
            {games.slice(0, 5).map((g, i) => {
              const pct = [92, 78, 64, 48, 33][i];
              return (
                <div key={g.id}>
                  <div className="flex items-center gap-3 mb-1.5">
                    <div className={`w-7 h-7 rounded-lg bg-gradient-to-br ${g.accent} flex items-center justify-center text-sm`}>{g.emoji}</div>
                    <div className="flex-1 text-sm font-medium">{g.name}</div>
                    <div className="text-xs text-muted-foreground">{pct}%</div>
                  </div>
                  <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-primary to-cyan rounded-full" style={{ width: `${pct}%` }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="bg-card rounded-2xl border border-border overflow-hidden">
        <div className="p-6 border-b border-border flex items-center justify-between">
          <h2 className="text-lg font-semibold">Recent orders</h2>
          <button className="text-sm text-primary font-medium hover:underline">View all</button>
        </div>
        <table className="w-full text-sm">
          <thead className="bg-secondary/50">
            <tr className="text-left text-xs uppercase tracking-wider text-muted-foreground">
              <th className="px-6 py-3 font-medium">Order</th>
              <th className="font-medium">Customer ID</th>
              <th className="font-medium">Game</th>
              <th className="font-medium">Status</th>
              <th className="font-medium">Date</th>
              <th className="font-medium text-right pr-6">Total</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {recentOrders.map((o) => (
              <tr key={o.id} className="hover:bg-secondary/30">
                <td className="px-6 py-3.5 font-medium">{o.id}</td>
                <td className="text-muted-foreground">{o.playerId}</td>
                <td>{o.game}</td>
                <td><StatusBadge s={o.status} /></td>
                <td className="text-muted-foreground">{o.date}</td>
                <td className="text-right pr-6 font-semibold">${o.total.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
