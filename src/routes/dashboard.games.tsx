import { createFileRoute } from "@tanstack/react-router";
import { games } from "@/lib/data";

export const Route = createFileRoute("/dashboard/games")({
  component: SavedGames,
});

function SavedGames() {
  return (
    <div className="space-y-6">
      <div>
        <div className="text-xs uppercase tracking-widest text-primary font-semibold">Saved game IDs</div>
        <h1 className="text-3xl font-bold mt-1">Your linked accounts</h1>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        {games.map((g) => (
          <div key={g.id} className="glass-strong rounded-3xl p-5 flex items-center gap-4">
            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${g.accent} flex items-center justify-center text-2xl`}>{g.emoji}</div>
            <div className="flex-1 min-w-0">
              <div className="font-semibold">{g.name}</div>
              <div className="text-xs text-muted-foreground">ID: 1029***234</div>
            </div>
            <button className="text-sm text-primary font-medium hover:underline">Edit</button>
          </div>
        ))}
      </div>
    </div>
  );
}
