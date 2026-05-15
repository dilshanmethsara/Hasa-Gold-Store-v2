import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { FloatingSupport } from "@/components/FloatingSupport";
import { GameTile } from "@/components/GameTile";
import { games } from "@/lib/data";
import { ShieldCheck, Zap, Headphones, Star, ArrowRight, Sparkles } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HASA Gold Store — Instant Game Top-Ups" },
      { name: "description", content: "Top up Free Fire, PUBG, COD, Mobile Legends and more in seconds. Secure, instant, trusted." },
    ],
  }),
  component: HomePage,
});

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
  return (
    <section className="relative overflow-hidden hero-bg">
      <div className="absolute inset-0 grid-pattern opacity-60 pointer-events-none" />
      {/* Floating shapes */}
      <div className="absolute top-32 left-10 w-24 h-24 rounded-3xl bg-gradient-to-br from-primary/30 to-cyan/30 blur-2xl animate-float" />
      <div className="absolute top-48 right-20 w-32 h-32 rounded-full bg-gradient-to-br from-cyan/40 to-sky/40 blur-2xl animate-float-slow" />
      <div className="absolute bottom-20 left-1/3 w-20 h-20 rounded-2xl bg-gradient-to-br from-sky/40 to-primary/30 blur-xl animate-float" />

      {/* Floating game emojis */}
      <div className="absolute top-40 left-[15%] text-4xl animate-float opacity-80 hidden md:block" style={{ animationDelay: "0.5s" }}>🔥</div>
      <div className="absolute top-60 right-[18%] text-4xl animate-float-slow opacity-80 hidden md:block">🎯</div>
      <div className="absolute bottom-40 right-[10%] text-3xl animate-float opacity-80 hidden md:block" style={{ animationDelay: "1s" }}>⚔️</div>

      <div className="relative mx-auto max-w-7xl px-4 pt-16 pb-24 md:pt-24 md:pb-36">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-strong text-xs font-medium text-primary animate-fade-up">
            <Sparkles className="w-3.5 h-3.5" />
            Trusted by 250,000+ gamers worldwide
          </div>

          <h1 className="mt-6 text-5xl md:text-7xl font-bold tracking-tight animate-fade-up" style={{ animationDelay: "80ms" }}>
            Instant Game Top-Ups.<br />
            <span className="gradient-text animate-gradient">Secure. Fast. Trusted.</span>
          </h1>

          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "160ms" }}>
            Diamonds, UC, CP and more — delivered to your account in seconds. The premium way to power up your game.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 animate-fade-up" style={{ animationDelay: "240ms" }}>
            <Link
              to="/games"
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-br from-primary to-electric text-primary-foreground font-medium shadow-[var(--shadow-glow)] hover:scale-[1.02] transition-transform"
            >
              Start Top-Up
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              to="/games"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl glass-strong text-foreground font-medium hover:bg-white transition-colors"
            >
              View Games
            </Link>
          </div>

          {/* Trust badges */}
          <div className="mt-14 grid grid-cols-3 gap-3 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "320ms" }}>
            {[
              { icon: ShieldCheck, label: "Secure Payment" },
              { icon: Zap, label: "Instant Delivery" },
              { icon: Headphones, label: "24/7 Support" },
            ].map((b) => (
              <div key={b.label} className="glass rounded-2xl px-4 py-3 flex items-center gap-2.5 justify-center">
                <b.icon className="w-4 h-4 text-primary" />
                <span className="text-xs sm:text-sm font-medium text-foreground">{b.label}</span>
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
    { v: "250K+", l: "Happy gamers" },
    { v: "1.2M", l: "Top-ups delivered" },
    { v: "<30s", l: "Avg. delivery" },
    { v: "4.9★", l: "Rated by players" },
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 -mt-12 relative z-10">
      <div className="glass-strong rounded-3xl p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s) => (
          <div key={s.l} className="text-center">
            <div className="text-2xl md:text-3xl font-bold gradient-text">{s.v}</div>
            <div className="text-xs md:text-sm text-muted-foreground mt-1">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function FeaturedGames() {
  return (
    <section className="mx-auto max-w-7xl px-4 mt-28">
      <div className="flex items-end justify-between mb-10">
        <div>
          <div className="text-xs uppercase tracking-widest text-primary font-semibold">Featured</div>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold">Top up your favorite game</h2>
        </div>
        <Link to="/games" className="hidden md:inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:gap-2.5 transition-all">
          View all games <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {games.map((g, i) => <GameTile key={g.id} game={g} index={i} />)}
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
        <div className="text-xs uppercase tracking-widest text-primary font-semibold">How it works</div>
        <h2 className="mt-2 text-3xl md:text-4xl font-bold">3 steps to instant power-ups</h2>
      </div>
      <div className="mt-14 grid md:grid-cols-3 gap-5">
        {steps.map((s, i) => (
          <div key={s.n} className="relative glass-strong rounded-3xl p-7 animate-fade-up" style={{ animationDelay: `${i * 80}ms` }}>
            <div className="text-5xl font-bold gradient-text">{s.n}</div>
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
    { n: "Hassan A.", g: "Free Fire player", t: "Diamonds landed before I even closed the tab. Insane." },
    { n: "Aisha K.", g: "Mobile Legends", t: "Cleanest top-up site I've used. Beautiful and fast." },
    { n: "Marcus L.", g: "PUBG Mobile", t: "Saved my Player ID — rebuying takes 5 seconds now." },
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 mt-32">
      <div className="text-center max-w-2xl mx-auto">
        <div className="text-xs uppercase tracking-widest text-primary font-semibold">Loved by players</div>
        <h2 className="mt-2 text-3xl md:text-4xl font-bold">A premium experience, every time</h2>
      </div>
      <div className="mt-14 grid md:grid-cols-3 gap-5">
        {items.map((i, idx) => (
          <div key={i.n} className="glass-strong rounded-3xl p-6 animate-fade-up" style={{ animationDelay: `${idx * 80}ms` }}>
            <div className="flex gap-1 text-primary">{Array.from({ length: 5 }).map((_, k) => <Star key={k} className="w-4 h-4 fill-current" />)}</div>
            <p className="mt-4 text-sm text-foreground/90 leading-relaxed">"{i.t}"</p>
            <div className="mt-5 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-cyan flex items-center justify-center text-primary-foreground text-xs font-semibold">
                {i.n.split(" ").map((p) => p[0]).join("")}
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
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-electric to-cyan p-10 md:p-16 animate-gradient">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/20 blur-3xl" />
        <div className="relative max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Ready to power up?</h2>
          <p className="mt-4 text-white/85 text-lg">Pick a game and we'll handle the rest. Top-ups in seconds, every time.</p>
          <Link to="/games" className="mt-8 inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white text-primary font-semibold hover:scale-[1.02] transition-transform">
            Start Top-Up <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
