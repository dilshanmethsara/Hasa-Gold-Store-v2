import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { FloatingSupport } from "@/components/FloatingSupport";
import { GameTile } from "@/components/GameTile";
import { games } from "@/lib/data";
import { ShieldCheck, Zap, Headphones, Star, ArrowRight, Sparkles, Search } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HASA Gold Store — Instant Game Top-Ups" },
      {
        name: "description",
        content:
          "Top up Free Fire, PUBG, COD, Mobile Legends and more in seconds. Secure, instant, trusted.",
      },
    ],
  }),
  component: HomePage,
});

const realtimeTopUps = [
  "Free Fire Diamonds",
  "PUBG UC Pack",
  "COD CP Bundle",
  "Mobile Legends Gems",
  "Valorant Points",
];

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <TrustStrip />
        <FeaturedGames />
        <HowItWorks />
        <Testimonials />
        <CTASection />
      </main>
      <SiteFooter />
      <FloatingSupport />
    </div>
  );
}

function Hero() {
  const [liveOrders, setLiveOrders] = useState(76);
  const [recentTopUp, setRecentTopUp] = useState(realtimeTopUps[0]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setLiveOrders((current) => Math.max(42, Math.min(124, current + Math.floor(Math.random() * 3) + 1)));
      setRecentTopUp(realtimeTopUps[Math.floor(Math.random() * realtimeTopUps.length)]);
    }, 2400);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden hero-bg animate-slide-up-fade">
      <div className="absolute inset-0 grid-pattern opacity-60 pointer-events-none" />
      {/* Floating shapes */}
      <div className="absolute top-32 left-10 w-24 h-24 rounded-3xl bg-gradient-to-br from-primary/30 to-cyan/30 blur-2xl animate-blob" />
      <div className="absolute top-48 right-20 w-32 h-32 rounded-full bg-gradient-to-br from-cyan/40 to-sky/40 blur-2xl animate-blob" />
      <div className="absolute bottom-20 left-1/3 w-20 h-20 rounded-2xl bg-gradient-to-br from-sky/40 to-primary/30 blur-xl animate-blob" />

      {/* Floating game emojis */}
      <div
        className="absolute top-40 left-[15%] text-4xl animate-float opacity-90 hidden md:block"
        style={{ animationDelay: "0.5s" }}
      >
        🔥
      </div>
      <div className="absolute top-60 right-[18%] text-4xl animate-float-slow opacity-90 hidden md:block">
        🎯
      </div>
      <div
        className="absolute bottom-40 right-[10%] text-3xl animate-float opacity-90 hidden md:block"
        style={{ animationDelay: "1s" }}
      >
        ⚔️
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pt-16 pb-24 md:pt-24 md:pb-36">
        <div className="max-w-3xl mx-auto text-center">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-strong text-xs font-medium text-primary animate-fade-up"
            style={{ animationDelay: "0ms" }}
          >
            <Sparkles className="w-3.5 h-3.5" />
            Trusted by 250,000+ gamers worldwide
          </div>

          <h1
            className="mt-8 text-5xl md:text-7xl font-bold tracking-tight animate-slide-up-fade"
            style={{ animationDelay: "80ms" }}
          >
            Instant Game Top-Ups.
            <br />
            <span className="gradient-text animate-gradient animate-subtle-focus">
              Secure. Fast. Trusted.
            </span>
          </h1>

          <p
            className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-up-fade"
            style={{ animationDelay: "160ms" }}
          >
            Diamonds, UC, CP and more — delivered to your account in seconds. The premium way to
            power up your game.
          </p>

          <div
            className="mt-10 flex flex-wrap items-center justify-center gap-3 animate-slide-up-fade"
            style={{ animationDelay: "240ms" }}
          >
            <Link
              to="/games"
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-br from-primary to-electric text-primary-foreground font-medium shadow-[var(--shadow-glow)] hover:scale-[1.04] hover:shadow-[0_12px_44px_var(--shadow-glow)] active:scale-[0.97] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] animate-pulse-soft"
            >
              Start Top-Up
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]" />
            </Link>
            <Link
              to="/games"
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl glass-strong text-foreground font-medium hover:bg-white hover:shadow-[var(--shadow-card)] hover:scale-[1.03] active:scale-[0.97] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
            >
              View Games
              <ArrowRight className="w-4 h-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]" />
            </Link>
          </div>

          <div
            className="mt-8 rounded-3xl border border-white/15 bg-slate-950/85 backdrop-blur-sm p-5 shadow-[0_18px_40px_-24px_rgba(0,0,0,0.35)] animate-slide-up-fade"
            style={{ animationDelay: "320ms" }}
          >
            <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-slate-100">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.24em] text-slate-100/90 ring-1 ring-white/10">
                <span className="h-2.5 w-2.5 rounded-full bg-success animate-pulse-soft" />
                Live top-ups
              </span>
              <span className="text-xs uppercase tracking-[0.22em] text-slate-300">Realtime working stats</span>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-slate-900/90 p-4 animate-slide-left-fade">
                <div className="text-[0.68rem] uppercase tracking-[0.24em] text-slate-300">Orders in progress</div>
                <div className="mt-2 text-3xl font-semibold text-white">{liveOrders}</div>
                <div className="mt-1 text-xs text-slate-400">Updating live every few seconds</div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-slate-900/90 p-4 animate-slide-right-fade">
                <div className="text-[0.68rem] uppercase tracking-[0.24em] text-slate-300">Latest top-up</div>
                <div className="mt-2 text-3xl font-semibold text-white">{recentTopUp}</div>
                <div className="mt-1 text-xs text-slate-400">Realtime order feed</div>
              </div>
            </div>
          </div>

          {/* Trust badges */}
          <div className="mt-14 grid grid-cols-3 gap-3 max-w-2xl mx-auto">
            {[
              { icon: ShieldCheck, label: "Secure Payment" },
              { icon: Zap, label: "Instant Delivery" },
              { icon: Headphones, label: "24/7 Support" },
            ].map((b, i) => (
              <div
                key={b.label}
                className="group rounded-2xl px-4 py-3 flex items-center gap-2.5 justify-center animate-slide-left-fade hover:scale-105 hover:shadow-[0_18px_50px_-30px_rgba(0,0,0,0.4)] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] bg-slate-950/95 border border-white/10"
                style={{ animationDelay: `${320 + i * 60}ms` }}
              >
                <b.icon className="w-4 h-4 text-primary transition-transform duration-300 group-hover:scale-110" />
                <span className="text-xs sm:text-sm font-medium text-white">{b.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustStrip() {
  const stats = [
    { v: "250K+", l: "Happy gamers", accent: "from-primary to-electric" },
    { v: "1.2M", l: "Top-ups delivered", accent: "from-cyan to-sky" },
    { v: "<30s", l: "Avg. delivery", accent: "from-success to-cyan" },
    { v: "4.9★", l: "Rated by players", accent: "from-electric to-primary" },
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 -mt-12 relative z-10">
      <div className="grid gap-5 md:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={s.l}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/90 p-6 text-center shadow-[0_20px_80px_-50px_rgba(0,0,0,0.45)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-[0_22px_90px_-40px_rgba(0,0,0,0.5)]"
            style={{ animationDelay: `${i * 70}ms` }}
          >
            <div className={`absolute inset-x-10 top-0 h-1 rounded-full bg-gradient-to-r ${s.accent} opacity-90`} />
            <div className="relative">
              <div className="text-3xl md:text-4xl font-semibold text-white">{s.v}</div>
              <div className="mt-2 text-sm text-slate-400 uppercase tracking-[0.22em]">
                {s.l}
              </div>
            </div>
            <div className="mt-5 flex items-center justify-center gap-2 text-xs text-white/70">
              <span className="h-2.5 w-2.5 rounded-full bg-white/30 animate-pulse-soft" />
              <span>Verified by thousands</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function GameFinder() {
  const categories = ["All", "Battle Royale", "MOBA", "Shooter"];
  const categoryMap: Record<string, string[]> = {
    All: games.map((game) => game.id),
    "Battle Royale": ["free-fire", "pubg-mobile"],
    MOBA: ["mobile-legends"],
    Shooter: ["cod-mobile", "blood-strike"],
  };
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredGames = games.filter((game) => {
    const matchesCategory = categoryMap[selectedCategory].includes(game.id);
    const searchText = `${game.name} ${game.publisher} ${game.tagline}`.toLowerCase();
    const matchesSearch = searchText.includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="mx-auto max-w-7xl px-4 mt-24">
      <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
        <div className="rounded-3xl border border-white/10 bg-slate-950/90 p-8 shadow-[0_24px_80px_-50px_rgba(0,0,0,0.5)]">
          <div className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">Find your game</div>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white tracking-tight">Power up instantly.</h2>
          <p className="mt-4 text-lg text-slate-300 max-w-xl">
            Browse our catalog of supported titles. New games added monthly.
          </p>

          <div className="mt-8 space-y-5">
            <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-4">
              <label className="relative block">
                <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  placeholder="Search games…"
                  className="w-full rounded-2xl border border-white/10 bg-slate-950/90 py-3 pl-12 pr-4 text-sm text-white outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
                />
              </label>
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground shadow-[0_10px_30px_-18px_rgba(59,130,246,0.7)]"
                      : "bg-white/10 text-white/80 hover:bg-white/15"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {filteredGames.slice(0, 4).map((game) => (
                <div
                  key={game.id}
                  className="rounded-3xl border border-white/10 bg-slate-900/90 p-5 shadow-[0_18px_60px_-40px_rgba(0,0,0,0.45)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_90px_-30px_rgba(0,0,0,0.55)]"
                >
                  <div className={`inline-flex items-center gap-3 rounded-3xl bg-gradient-to-br ${game.accent} px-4 py-3 text-white shadow-lg`}>
                    <span className="text-2xl">{game.emoji}</span>
                    <div>
                      <div className="text-sm uppercase tracking-[0.3em]">{game.publisher}</div>
                      <div className="mt-1 text-lg font-semibold">{game.name}</div>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-slate-300">{game.tagline}</p>
                  <div className="mt-4 flex items-center justify-between gap-3 text-sm text-slate-300">
                    <span>{game.currency} available</span>
                    <span className="rounded-full bg-white/10 px-3 py-1 text-white/80">Top Up</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-5">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/95 via-slate-900/70 to-slate-950/95 p-8 text-white shadow-[0_24px_80px_-50px_rgba(0,0,0,0.65)]">
            <div className="text-sm uppercase tracking-[0.3em] text-primary">Highlighted games</div>
            <div className="mt-6 grid gap-4">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <div className="text-xs uppercase tracking-[0.3em] text-slate-400">Free Fire</div>
                <div className="mt-2 text-lg font-semibold">Survive. Loot. Conquer.</div>
                <div className="mt-4 flex items-center justify-between gap-2 text-sm text-slate-300">
                  <span>Diamonds available</span>
                  <span className="rounded-full bg-slate-900 px-3 py-1 text-slate-200">Top Up</span>
                </div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <div className="text-xs uppercase tracking-[0.3em] text-slate-400">PUBG Mobile</div>
                <div className="mt-2 text-lg font-semibold">Battle royale, perfected.</div>
                <div className="mt-4 flex items-center justify-between gap-2 text-sm text-slate-300">
                  <span>UC available</span>
                  <span className="rounded-full bg-slate-900 px-3 py-1 text-slate-200">Top Up</span>
                </div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <div className="text-xs uppercase tracking-[0.3em] text-slate-400">Call of Duty Mobile</div>
                <div className="mt-2 text-lg font-semibold">Modern combat in your pocket.</div>
                <div className="mt-4 flex items-center justify-between gap-2 text-sm text-slate-300">
                  <span>CP available</span>
                  <span className="rounded-full bg-slate-900 px-3 py-1 text-slate-200">Top Up</span>
                </div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <div className="text-xs uppercase tracking-[0.3em] text-slate-400">Blood Strike</div>
                <div className="mt-2 text-lg font-semibold">Fast. Brutal. Tactical.</div>
                <div className="mt-4 flex items-center justify-between gap-2 text-sm text-slate-300">
                  <span>Gold available</span>
                  <span className="rounded-full bg-slate-900 px-3 py-1 text-slate-200">Top Up</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedGames() {
  return (
    <section className="mx-auto max-w-7xl px-4 mt-28">
      <div className="flex items-end justify-between mb-10 animate-fade-up">
        <div>
          <div className="text-xs uppercase tracking-widest text-primary font-semibold">
            Featured
          </div>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold">Top up your favorite game</h2>
        </div>
        <Link
          to="/games"
          className="hidden md:inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:gap-2.5 hover:underline underline-offset-4 transition-all"
        >
          View all games <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {games.map((g, i) => (
          <GameTile key={g.id} game={g} index={i} />
        ))}
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { n: "01", t: "Pick your game", d: "Choose from our catalog of supported titles." },
    { n: "02", t: "Enter your Player ID", d: "We auto-validate so it's always correct." },
    { n: "03", t: "Pay & receive instantly", d: "Currency lands in your account in seconds." },
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 mt-32">
      <div className="text-center max-w-2xl mx-auto">
        <div className="text-xs uppercase tracking-widest text-primary font-semibold">
          How it works
        </div>
        <h2 className="mt-2 text-3xl md:text-4xl font-bold">3 steps to instant power-ups</h2>
      </div>
      <div className="mt-14 grid md:grid-cols-3 gap-5">
        {steps.map((s, i) => (
          <div
            key={s.n}
            className="group relative glass-strong rounded-3xl p-7 animate-slide-right-fade hover:-translate-y-1.5 hover:shadow-[var(--shadow-card)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-default"
            style={{ animationDelay: `${i * 120}ms` }}
          >
            <div className="text-5xl font-bold gradient-text group-hover:scale-110 transition-transform duration-500">
              {s.n}
            </div>
            <div className="mt-4 text-lg font-semibold">{s.t}</div>
            <p className="mt-1.5 text-sm text-muted-foreground">{s.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    {
      n: "Hassan A.",
      g: "Free Fire player",
      t: "Diamonds landed before I even closed the tab. Insane.",
    },
    {
      n: "Aisha K.",
      g: "Mobile Legends",
      t: "Cleanest top-up site I've used. Beautiful and fast.",
    },
    { n: "Marcus L.", g: "PUBG Mobile", t: "Saved my Player ID — rebuying takes 5 seconds now." },
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 mt-32">
      <div className="text-center max-w-2xl mx-auto">
        <div className="text-xs uppercase tracking-widest text-primary font-semibold">
          Loved by players
        </div>
        <h2 className="mt-2 text-3xl md:text-4xl font-bold">A premium experience, every time</h2>
      </div>
      <div className="mt-14 grid md:grid-cols-3 gap-5">
        {items.map((i, idx) => (
          <div
            key={i.n}
            className="glass-strong rounded-3xl p-6 animate-slide-left-fade hover:-translate-y-1 hover:shadow-[var(--shadow-card)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{ animationDelay: `${idx * 120}ms` }}
          >
            <div className="flex gap-1 text-primary">
              {Array.from({ length: 5 }).map((_, k) => (
                <Star
                  key={k}
                  className="w-4 h-4 fill-current transition-transform hover:scale-125"
                  style={{ transitionDuration: `${180 + k * 30}ms` }}
                />
              ))}
            </div>
            <p className="mt-4 text-sm text-foreground/90 leading-relaxed">"{i.t}"</p>
            <div className="mt-5 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-cyan flex items-center justify-center text-primary-foreground text-xs font-semibold group-hover:scale-105 transition-transform duration-300">
                {i.n
                  .split(" ")
                  .map((p) => p[0])
                  .join("")}
              </div>
              <div>
                <div className="text-sm font-medium">{i.n}</div>
                <div className="text-xs text-muted-foreground">{i.g}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="mx-auto max-w-7xl px-4 mt-32">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-electric to-cyan p-10 md:p-16 animate-gradient animate-hero-glow hover:shadow-[0_0_48px_var(--shadow-glow)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/20 blur-3xl animate-blob" />
        <div
          className="absolute -bottom-10 -left-10 w-48 h-48 rounded-2xl bg-white/10 blur-2xl animate-blob"
          style={{ animationDelay: "2s" }}
        />
        <div className="relative max-w-2xl">
          <h2
            className="text-3xl md:text-5xl font-bold text-white tracking-tight animate-slide-up-fade"
            style={{ animationDelay: "80ms" }}
          >
            Ready to power up?
          </h2>
          <p
            className="mt-4 text-white/85 text-lg animate-slide-up-fade"
            style={{ animationDelay: "160ms" }}
          >
            Pick a game and we'll handle the rest. Top-ups in seconds, every time.
          </p>
          <Link
            to="/games"
            className="mt-8 group inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white text-primary font-semibold hover:scale-[1.04] hover:shadow-[0_0_36px_oklch(1_0_0_/_0.5)] active:scale-[0.97] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] animate-slide-up-fade animate-pulse-soft"
            style={{ animationDelay: "240ms" }}
          >
            Start Top-Up
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
