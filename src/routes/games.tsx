import { createFileRoute, Outlet, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { FloatingSupport } from "@/components/FloatingSupport";
import { GameTile } from "@/components/GameTile";
import { games } from "@/lib/data";
import { Search } from "lucide-react";

export const Route = createFileRoute("/games")({
  head: () => ({
    meta: [
      { title: "Browse Games — HASA Gold Store" },
      { name: "description", content: "Browse all supported games and top up instantly." },
    ],
  }),
  component: GamesPage,
});

const filters = ["All", "Battle Royale", "MOBA", "Shooter"];

function GamesPage() {
  const [q, setQ] = useState("");
  const [active, setActive] = useState("All");
  
  const routerState = useRouterState();
  const isChildRouteActive = routerState.matches.some(m => m.routeId?.includes('$gameId'));
  
  // If a child route (game detail) is active, only render the outlet
  if (isChildRouteActive) {
    return <Outlet />;
  }
  
  // Otherwise render the games list
  const filtered = games.filter((g) => g.name.toLowerCase().includes(q.toLowerCase()));

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="hero-bg pt-12 pb-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="max-w-2xl">
              <div className="text-xs uppercase tracking-widest text-primary font-semibold">All games</div>
              <h1 className="mt-2 text-4xl md:text-5xl font-bold tracking-tight">Find your game.<br /><span className="gradient-text">Power up instantly.</span></h1>
              <p className="mt-4 text-muted-foreground">Browse our catalog of supported titles. New games added monthly.</p>
            </div>

            <div className="mt-10 flex flex-col md:flex-row md:items-center gap-4">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Search games…"
                  className="w-full pl-11 pr-4 py-3 rounded-2xl glass-strong text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {filters.map((f) => (
                  <button
                    key={f}
                    onClick={() => setActive(f)}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                      active === f
                        ? "bg-foreground text-background"
                        : "glass-strong text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 -mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((g, i) => <GameTile key={g.id} game={g} index={i} />)}
          </div>
          {filtered.length === 0 && (
            <div className="text-center py-20 text-muted-foreground">No games match "{q}"</div>
          )}
        </section>
      </main>
      <SiteFooter />
      <FloatingSupport />
    </div>
  );
}
