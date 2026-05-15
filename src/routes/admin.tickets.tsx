import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/tickets")({
  component: AdminTickets,
});

const tickets = [
  { id: "T-1042", subject: "Order not delivered", user: "Hassan Ali", priority: "high", status: "open", time: "10m ago" },
  { id: "T-1041", subject: "Wrong package selected", user: "Aisha Khan", priority: "medium", status: "open", time: "1h ago" },
  { id: "T-1040", subject: "Refund request", user: "Marcus Lee", priority: "low", status: "pending", time: "3h ago" },
  { id: "T-1039", subject: "Account locked", user: "Sara Iqbal", priority: "high", status: "resolved", time: "Yesterday" },
];

const pmap = {
  high: "bg-destructive/15 text-destructive",
  medium: "bg-warning/15 text-warning",
  low: "bg-muted text-muted-foreground",
};
const smap = {
  open: "bg-primary/15 text-primary",
  pending: "bg-warning/15 text-warning",
  resolved: "bg-success/15 text-success",
};

function AdminTickets() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Support tickets</h1>
        <p className="text-sm text-muted-foreground">Track and respond to customer issues.</p>
      </div>
      <div className="bg-card rounded-2xl border border-border overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-secondary/50">
            <tr className="text-left text-xs uppercase tracking-wider text-muted-foreground">
              <th className="px-6 py-3 font-medium">Ticket</th>
              <th className="font-medium">Subject</th>
              <th className="font-medium">User</th>
              <th className="font-medium">Priority</th>
              <th className="font-medium">Status</th>
              <th className="font-medium">Updated</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {tickets.map((t) => (
              <tr key={t.id} className="hover:bg-secondary/30 cursor-pointer">
                <td className="px-6 py-3.5 font-medium">{t.id}</td>
                <td>{t.subject}</td>
                <td className="text-muted-foreground">{t.user}</td>
                <td><span className={`text-[11px] font-semibold px-2 py-1 rounded-full capitalize ${pmap[t.priority as keyof typeof pmap]}`}>{t.priority}</span></td>
                <td><span className={`text-[11px] font-semibold px-2 py-1 rounded-full capitalize ${smap[t.status as keyof typeof smap]}`}>{t.status}</span></td>
                <td className="text-muted-foreground">{t.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
