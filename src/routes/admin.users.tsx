import { createFileRoute } from "@tanstack/react-router";
import { adminUsers } from "@/lib/data";
import { Search } from "lucide-react";

export const Route = createFileRoute("/admin/users")({
  component: AdminUsers,
});

const statusColors = {
  active: "bg-success/15 text-success",
  vip: "bg-primary/15 text-primary",
  blocked: "bg-destructive/15 text-destructive",
} as const;

function AdminUsers() {
  return (
    <div className="space-y-6">
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-2xl font-bold">Users</h1>
          <p className="text-sm text-muted-foreground">Manage customer accounts.</p>
        </div>
        <div className="relative w-72">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input placeholder="Search users…" className="w-full pl-10 pr-4 py-2 rounded-xl bg-card border border-border text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
        </div>
      </div>

      <div className="bg-card rounded-2xl border border-border overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-secondary/50">
            <tr className="text-left text-xs uppercase tracking-wider text-muted-foreground">
              <th className="px-6 py-3 font-medium">User</th>
              <th className="font-medium">ID</th>
              <th className="font-medium">Orders</th>
              <th className="font-medium">Spent</th>
              <th className="font-medium">Status</th>
              <th className="text-right pr-6 font-medium">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {adminUsers.map((u) => (
              <tr key={u.id} className="hover:bg-secondary/30">
                <td className="px-6 py-3.5">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-cyan text-primary-foreground flex items-center justify-center text-xs font-semibold">
                      {u.name.split(" ").map((p) => p[0]).join("")}
                    </div>
                    <div>
                      <div className="font-medium">{u.name}</div>
                      <div className="text-xs text-muted-foreground">{u.email}</div>
                    </div>
                  </div>
                </td>
                <td className="text-muted-foreground">{u.id}</td>
                <td>{u.orders}</td>
                <td>${u.spent.toFixed(2)}</td>
                <td>
                  <span className={`text-[11px] font-semibold px-2 py-1 rounded-full capitalize ${statusColors[u.status as keyof typeof statusColors]}`}>
                    {u.status}
                  </span>
                </td>
                <td className="text-right pr-6">
                  <button className="text-primary text-xs font-medium hover:underline">Manage</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
