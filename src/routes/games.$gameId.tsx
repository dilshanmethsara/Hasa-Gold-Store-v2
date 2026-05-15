import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { FloatingSupport } from "@/components/FloatingSupport";
import { getGame, packagesByGame, type Pack } from "@/lib/data";
import { Check, ShieldCheck, Zap, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/games/$gameId")({
  loader: ({ params }) => {
    const game = getGame(params.gameId);
    if (!game) throw notFound();
    return { game };
  },
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center hero-bg">
      <div className="glass-strong rounded-3xl p-10 text-center">
        <h1 className="text-2xl font-bold">Game not found</h1>
        <Link to="/games" className="mt-4 inline-block text-primary">Back to games</Link>
      </div>
    </div>
  ),
  component: GameTopUpPage,
});

function GameTopUpPage() {
  const { game } = Route.useLoaderData();
  const packs = packagesByGame[game.id] ?? [];
  const [playerId, setPlayerId] = useState("");
  const [serverId, setServerId] = useState("");
  const [selected, setSelected] = useState<Pack | null>(packs.find((p) => p.popular) ?? packs[0] ?? null);
  const [promo, setPromo] = useState("");

  const needsServer = game.id === "mobile-legends";
  const total = selected ? selected.price : 0;

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Game header */}
        <section className={`relative overflow-hidden bg-gradient-to-br ${game.accent}`}>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/0 to-background" />
          <div className="absolute inset-0 grid-pattern opacity-20" />
          <div className="relative mx-auto max-w-7xl px-4 pt-12 pb-32">
            <nav className="flex items-center gap-1.5 text-xs text-white/80">
              <Link to="/" className="hover:text-white">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <Link to="/games" className="hover:text-white">Games</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-white">{game.name}</span>
            </nav>

            <div className="mt-8 flex items-center gap-5">
              <div className="w-20 h-20 rounded-3xl glass-strong flex items-center justify-center text-4xl shadow-2xl">
                {game.emoji}
              </div>
              <div className="text-white">
                <div className="text-xs uppercase tracking-widest opacity-80">{game.publisher}</div>
                <h1 className="text-3xl md:text-5xl font-bold">{game.name}</h1>
                <p className="mt-1 opacity-85">{game.tagline}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Top-up flow */}
        <section className="mx-auto max-w-7xl px-4 -mt-24 relative z-10">
          <div className="grid lg:grid-cols-[1fr_400px] gap-6">
            {/* Left: Player ID + Packages */}
            <div className="space-y-6">
              <div className="glass-strong rounded-3xl p-6 md:p-8 animate-fade-up">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-semibold flex items-center justify-center">1</div>
                  <h2 className="text-lg font-semibold">Enter your Player ID</h2>
                </div>
                <div className={`mt-5 grid ${needsServer ? "md:grid-cols-2" : "md:grid-cols-1"} gap-3`}>
                  <div>
                    <label className="text-xs text-muted-foreground font-medium">Player ID</label>
                    <input
                      value={playerId}
                      onChange={(e) => setPlayerId(e.target.value)}
                      placeholder="e.g. 123456789"
                      className="mt-1.5 w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-ring transition"
                    />
                  </div>
                  {needsServer && (
                    <div>
                      <label className="text-xs text-muted-foreground font-medium">Server ID</label>
                      <input
                        value={serverId}
                        onChange={(e) => setServerId(e.target.value)}
                        placeholder="e.g. 2104"
                        className="mt-1.5 w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-ring transition"
                      />
                    </div>
                  )}
                </div>
                <p className="mt-3 text-xs text-muted-foreground flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-success" /> We never store your password — only your ID.
                </p>
              </div>

              <div className="glass-strong rounded-3xl p-6 md:p-8 animate-fade-up" style={{ animationDelay: "80ms" }}>
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-semibold flex items-center justify-center">2</div>
                  <h2 className="text-lg font-semibold">Choose package</h2>
                </div>

                <div className="mt-5 grid grid-cols-2 md:grid-cols-3 gap-3">
                  {packs.map((p) => {
                    const isActive = selected?.id === p.id;
                    return (
                      <button
                        key={p.id}
                        onClick={() => setSelected(p)}
                        className={`relative text-left rounded-2xl p-4 transition-all duration-300 ${
                          isActive
                            ? "bg-gradient-to-br from-primary to-electric text-primary-foreground scale-[1.02] shadow-[var(--shadow-glow)]"
                            : "bg-secondary hover:bg-accent border border-transparent hover:-translate-y-0.5"
                        }`}
                      >
                        {p.popular && (
                          <div className="absolute -top-2 right-3 text-[10px] font-bold bg-warning text-warning-foreground px-2 py-0.5 rounded-full">
                            POPULAR
                          </div>
                        )}
                        <div className={`text-2xl font-bold ${isActive ? "" : "gradient-text"}`}>
                          {p.amount.toLocaleString()}
                        </div>
                        <div className={`text-xs ${isActive ? "opacity-90" : "text-muted-foreground"}`}>
                          {game.currency}
                          {p.bonus ? ` + ${p.bonus} bonus` : ""}
                        </div>
                        <div className={`mt-3 text-sm font-semibold ${isActive ? "" : "text-foreground"}`}>
                          ${p.price.toFixed(2)}
                        </div>
                        {isActive && (
                          <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-white/30 flex items-center justify-center">
                            <Check className="w-3 h-3" />
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="glass-strong rounded-3xl p-6 md:p-8 animate-fade-up" style={{ animationDelay: "160ms" }}>
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-semibold flex items-center justify-center">3</div>
                  <h2 className="text-lg font-semibold">Promo code (optional)</h2>
                </div>
                <div className="mt-5 flex gap-2">
                  <input
                    value={promo}
                    onChange={(e) => setPromo(e.target.value)}
                    placeholder="HASA10"
                    className="flex-1 px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-ring uppercase"
                  />
                  <button className="px-5 rounded-xl bg-foreground text-background text-sm font-medium hover:opacity-90">Apply</button>
                </div>
              </div>
            </div>

            {/* Right: Order summary */}
            <aside className="lg:sticky lg:top-24 self-start">
              <div className="glass-strong rounded-3xl p-6 animate-fade-up" style={{ animationDelay: "240ms" }}>
                <div className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">Order summary</div>

                <div className="mt-5 flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${game.accent} flex items-center justify-center text-xl`}>{game.emoji}</div>
                  <div>
                    <div className="text-sm font-semibold">{game.name}</div>
                    <div className="text-xs text-muted-foreground">{game.publisher}</div>
                  </div>
                </div>

                <div className="mt-5 space-y-2 text-sm">
                  <Row label="Player ID" value={playerId || "—"} />
                  {needsServer && <Row label="Server ID" value={serverId || "—"} />}
                  <Row label="Package" value={selected ? `${selected.amount} ${game.currency}` : "—"} />
                  {selected?.bonus ? <Row label="Bonus" value={`+${selected.bonus}`} /> : null}
                  <Row label="Promo" value={promo ? promo.toUpperCase() : "—"} />
                </div>

                <div className="mt-5 pt-5 border-t border-border flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">Total</div>
                  <div className="text-2xl font-bold gradient-text">${total.toFixed(2)}</div>
                </div>

                <Link
                  to="/checkout"
                  search={{ game: game.id, pack: selected?.id ?? "", playerId, serverId }}
                  className="mt-5 group w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-gradient-to-br from-primary to-electric text-primary-foreground font-medium shadow-[var(--shadow-glow)] hover:scale-[1.01] transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Zap className="w-4 h-4" />
                  Buy Now
                </Link>

                <div className="mt-4 flex items-center justify-center gap-1.5 text-[11px] text-muted-foreground">
                  <ShieldCheck className="w-3 h-3" /> 256-bit secure · instant delivery
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <SiteFooter />
      <FloatingSupport />
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-medium text-foreground truncate max-w-[55%]">{value}</span>
    </div>
  );
}
