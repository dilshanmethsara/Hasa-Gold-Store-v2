import { createFileRoute } from "@tanstack/react-router";
import { recentOrders, games } from "@/lib/data";
import { StatusBadge } from "./dashboard.index";
import { Search } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/dashboard/orders")({
  component: OrdersPage,
});

function OrdersPage() {
  const [filter, setFilter] = useState<"all" | "completed" | "pending" | "failed">("all");
  const list = recentOrders.filter((o) => filter === "all" || o.status === filter);
  return (
    <div className="space-y-6">
      <div>
        <div className="text-xs uppercase tracking-widest text-primary font-semibold">Order history</div>
        <h1 className="text-3xl font-bold mt-1">Your orders</h1>
      </div>

      <div className="glass-strong rounded-3xl p-6">
        <div className="flex flex-wrap items-center gap-3 justify-between">
          <div className="relative flex-1 min-w-[200px] max-w-sm">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input placeholder="Search orders…" className="w-full pl-11 pr-4 py-2.5 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-ring" />
          </div>
          <div className="flex gap-1.5">
            {(["all", "completed", "pending", "failed"] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium capitalize transition-colors ${
                  filter === f ? "bg-foreground text-background" : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-5 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs uppercase tracking-wider text-muted-foreground border-b border-border">
                <th className="py-3 font-medium">Order</th>
                <th className="font-medium">Game</th>
                <th className="font-medium">Player ID</th>
                <th className="font-medium">Date</th>
                <th className="font-medium">Status</th>
                <th className="font-medium text-right">Total</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {list.map((o) => (
                <tr key={o.id} className="hover:bg-secondary/40 transition-colors">
                  <td className="py-3.5 font-medium">{o.id}</td>
                  <td className="flex items-center gap-2 py-3.5">
                    <span className="text-lg">{games.find((g) => g.name === o.game)?.emoji ?? "🎮"}</span>
                    <span>{o.pack}</span>
                  </td>
                  <td className="text-muted-foreground">{o.playerId}</td>
                  <td className="text-muted-foreground">{o.date}</td>
                  <td><StatusBadge s={o.status} /></td>
                  <td className="text-right font-semibold">${o.total.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
