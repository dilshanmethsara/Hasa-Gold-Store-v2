import { Link } from "@tanstack/react-router";
import type { Game } from "@/lib/data";

export function GameTile({ game, index = 0 }: { game: Game; index?: number }) {
  return (
    <Link
      to="/games/$gameId"
      params={{ gameId: game.id }}
      className="group relative block rounded-3xl overflow-hidden glass-strong p-6 hover:-translate-y-1.5 transition-all duration-500 animate-fade-up"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <div className={`absolute -top-16 -right-16 w-48 h-48 rounded-full bg-gradient-to-br ${game.accent} opacity-20 blur-3xl group-hover:opacity-40 group-hover:scale-110 transition-all duration-700`} />

      <div className="relative">
        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${game.accent} flex items-center justify-center text-2xl shadow-lg mb-5 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
          <span>{game.emoji}</span>
        </div>

        <div className="text-[11px] uppercase tracking-widest text-muted-foreground font-medium">{game.publisher}</div>
        <h3 className="text-lg font-bold text-foreground mt-1">{game.name}</h3>
        <p className="text-sm text-muted-foreground mt-1 line-clamp-1">{game.tagline}</p>

        <div className="mt-5 flex items-center justify-between">
          <span className="text-xs text-muted-foreground">
            <span className="text-primary font-semibold">{game.currency}</span> available
          </span>
          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary group-hover:gap-2.5 transition-all">
            Top Up
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}
