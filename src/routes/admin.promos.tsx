import { createFileRoute } from "@tanstack/react-router";
import { Plus, Copy } from "lucide-react";

export const Route = createFileRoute("/admin/promos")({
  component: AdminPromos,
});

const promos = [
  { code: "HASA10", off: "10%", uses: 482, max: 1000, status: "active" },
  { code: "WELCOME5", off: "$5", uses: 1238, max: 5000, status: "active" },
  { code: "PUBGFEST", off: "15%", uses: 218, max: 500, status: "active" },
  { code: "SUMMER24", off: "20%", uses: 5000, max: 5000, status: "ended" },
];

function AdminPromos() {
  return (
    <div className="space-y-6">
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-2xl font-bold">Promo codes</h1>
          <p className="text-sm text-muted-foreground">Create and manage discount campaigns.</p>
        </div>
        <button className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-foreground text-background text-sm font-medium">
          <Plus className="w-4 h-4" /> New promo
        </button>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        {promos.map((p) => (
          <div key={p.code} className="bg-card rounded-2xl border border-border p-5">
            <div className="flex items-start justify-between">
              <div className="font-mono text-xl font-bold gradient-text">{p.code}</div>
              <span className={`text-[11px] font-semibold px-2 py-1 rounded-full capitalize ${p.status === "active" ? "bg-success/15 text-success" : "bg-muted text-muted-foreground"}`}>{p.status}</span>
            </div>
            <div className="mt-2 text-sm text-muted-foreground">{p.off} off any top-up</div>
            <div className="mt-4 h-1.5 rounded-full bg-secondary overflow-hidden">
              <div className="h-full bg-gradient-to-r from-primary to-cyan" style={{ width: `${(p.uses / p.max) * 100}%` }} />
            </div>
            <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
              <span>{p.uses.toLocaleString()} / {p.max.toLocaleString()} uses</span>
              <button className="inline-flex items-center gap-1 hover:text-foreground"><Copy className="w-3 h-3" /> Copy</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
