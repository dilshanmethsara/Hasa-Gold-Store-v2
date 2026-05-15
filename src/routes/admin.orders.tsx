import { createFileRoute } from "@tanstack/react-router";
import { recentOrders } from "@/lib/data";
import { StatusBadge } from "./dashboard.index";
import { useState } from "react";

export const Route = createFileRoute("/admin/orders")({
  component: AdminOrders,
});

function AdminOrders() {
  const [list, setList] = useState(recentOrders);
  const cycle = (id: string) => {
    setList((prev) =>
      prev.map((o) => {
        if (o.id !== id) return o;
        const next: typeof o.status = o.status === "pending" ? "completed" : o.status === "completed" ? "failed" : "pending";
        return { ...o, status: next };
      }),
    );
  };
  return (
    <div className="space-y-6">
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-2xl font-bold">Orders</h1>
          <p className="text-sm text-muted-foreground">Manage and update order statuses.</p>
        </div>
        <button className="px-4 py-2 rounded-xl bg-foreground text-background text-sm font-medium">Export CSV</button>
      </div>

      <div className="bg-card rounded-2xl border border-border overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-secondary/50">
            <tr className="text-left text-xs uppercase tracking-wider text-muted-foreground">
              <th className="px-6 py-3 font-medium">Order</th>
              <th className="font-medium">Customer</th>
              <th className="font-medium">Game / Pack</th>
              <th className="font-medium">Status</th>
              <th className="font-medium">Date</th>
              <th className="font-medium text-right pr-6">Total</th>
              <th className="text-right pr-6 font-medium">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {list.map((o) => (
              <tr key={o.id} className="hover:bg-secondary/30">
                <td className="px-6 py-3.5 font-medium">{o.id}</td>
                <td className="text-muted-foreground">{o.playerId}</td>
                <td>{o.game} · <span className="text-muted-foreground">{o.pack}</span></td>
                <td><StatusBadge s={o.status} /></td>
                <td className="text-muted-foreground">{o.date}</td>
                <td className="text-right pr-6 font-semibold">${o.total.toFixed(2)}</td>
                <td className="text-right pr-6">
                  <button onClick={() => cycle(o.id)} className="text-primary text-xs font-medium hover:underline">
                    Update status
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
