import { createFileRoute } from "@tanstack/react-router";
import { games, packagesByGame } from "@/lib/data";
import { Plus, Edit, Trash2 } from "lucide-react";

export const Route = createFileRoute("/admin/products")({
  component: AdminProducts,
});

function AdminProducts() {
  return (
    <div className="space-y-6">
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-2xl font-bold">Products</h1>
          <p className="text-sm text-muted-foreground">Manage games and top-up packages.</p>
        </div>
        <button className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-foreground text-background text-sm font-medium">
          <Plus className="w-4 h-4" /> Add game
        </button>
      </div>

      <div className="grid gap-5">
        {games.map((g) => (
          <div key={g.id} className="bg-card rounded-2xl border border-border overflow-hidden">
            <div className="p-5 flex items-center gap-4 border-b border-border">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${g.accent} flex items-center justify-center text-xl`}>{g.emoji}</div>
              <div className="flex-1">
                <div className="font-semibold">{g.name}</div>
                <div className="text-xs text-muted-foreground">{g.publisher} · {packagesByGame[g.id]?.length ?? 0} packages</div>
              </div>
              <button className="p-2 rounded-lg hover:bg-secondary"><Edit className="w-4 h-4" /></button>
              <button className="p-2 rounded-lg hover:bg-destructive/10 text-destructive"><Trash2 className="w-4 h-4" /></button>
            </div>
            <div className="p-5 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {packagesByGame[g.id]?.map((p) => (
                <div key={p.id} className="rounded-xl border border-border p-3 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-semibold">{p.amount.toLocaleString()} {g.currency}</div>
                    <div className="text-xs text-muted-foreground">${p.price.toFixed(2)}</div>
                  </div>
                  <button className="text-xs text-primary font-medium">Edit</button>
                </div>
              ))}
              <button className="rounded-xl border-2 border-dashed border-border p-3 text-sm text-muted-foreground hover:border-primary hover:text-primary transition flex items-center justify-center gap-1.5">
                <Plus className="w-4 h-4" /> Add package
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
