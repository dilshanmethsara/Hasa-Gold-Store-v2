import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { FloatingSupport } from "@/components/FloatingSupport";
import { getGame, packagesByGame } from "@/lib/data";
import { CreditCard, Wallet, Smartphone, Check, ShieldCheck, Sparkles } from "lucide-react";

type Search = { game?: string; pack?: string; playerId?: string; serverId?: string };

export const Route = createFileRoute("/checkout")({
  validateSearch: (s: Record<string, unknown>): Search => ({
    game: typeof s.game === "string" ? s.game : undefined,
    pack: typeof s.pack === "string" ? s.pack : undefined,
    playerId: typeof s.playerId === "string" ? s.playerId : undefined,
    serverId: typeof s.serverId === "string" ? s.serverId : undefined,
  }),
  head: () => ({ meta: [{ title: "Checkout — HASA Gold Store" }] }),
  component: CheckoutPage,
});

const methods = [
  { id: "card", label: "Credit / Debit Card", icon: CreditCard },
  { id: "wallet", label: "HASA Wallet", icon: Wallet, subtitle: "Balance: $42.10" },
  { id: "mobile", label: "Mobile Money", icon: Smartphone },
];

function CheckoutPage() {
  const search = Route.useSearch();
  const game = search.game ? getGame(search.game) : undefined;
  const pack = game && search.pack ? packagesByGame[game.id]?.find((p) => p.id === search.pack) : undefined;
  const [method, setMethod] = useState("card");
  const [done, setDone] = useState(false);

  const total = pack?.price ?? 0;

  if (done) {
    return (
      <div className="min-h-screen flex flex-col">
        <SiteHeader />
        <main className="flex-1 flex items-center justify-center hero-bg py-20">
          <div className="max-w-md w-full mx-4 glass-strong rounded-3xl p-10 text-center animate-scale-in">
            <div className="relative mx-auto w-20 h-20">
              <div className="absolute inset-0 rounded-full bg-success/20 animate-pulse-glow" />
              <div className="relative w-20 h-20 rounded-full bg-success flex items-center justify-center">
                <Check className="w-10 h-10 text-success-foreground" strokeWidth={3} />
              </div>
            </div>
            <h1 className="mt-6 text-2xl font-bold">Order placed! 🎉</h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Your top-up is on the way and will arrive in your account in seconds.
            </p>
            <div className="mt-6 glass rounded-2xl p-4 text-left text-sm">
              <div className="flex justify-between"><span className="text-muted-foreground">Order ID</span><span className="font-medium">HG-{Math.floor(Math.random() * 90000 + 10000)}</span></div>
              <div className="flex justify-between mt-1.5"><span className="text-muted-foreground">Total</span><span className="font-semibold">${total.toFixed(2)}</span></div>
            </div>
            <div className="mt-6 flex gap-3">
              <Link to="/dashboard" className="flex-1 px-5 py-3 rounded-xl bg-foreground text-background text-sm font-medium">View order</Link>
              <Link to="/games" className="flex-1 px-5 py-3 rounded-xl glass-strong text-sm font-medium">Top up again</Link>
            </div>
          </div>
        </main>
        <SiteFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="hero-bg pt-12 pb-20">
          <div className="mx-auto max-w-5xl px-4">
            <div className="text-center max-w-xl mx-auto">
              <div className="text-xs uppercase tracking-widest text-primary font-semibold">Checkout</div>
              <h1 className="mt-2 text-4xl font-bold tracking-tight">Confirm and pay</h1>
              <p className="mt-3 text-muted-foreground text-sm">3 steps. 30 seconds. Secured by 256-bit encryption.</p>
            </div>

            <div className="mt-12 grid lg:grid-cols-[1fr_360px] gap-6">
              <div className="space-y-6">
                <div className="glass-strong rounded-3xl p-6 md:p-8">
                  <h2 className="text-lg font-semibold flex items-center gap-2"><CreditCard className="w-5 h-5 text-primary" /> Payment method</h2>
                  <div className="mt-5 space-y-2.5">
                    {methods.map((m) => (
                      <button
                        key={m.id}
                        onClick={() => setMethod(m.id)}
                        className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl border transition-all ${
                          method === m.id
                            ? "border-primary bg-primary/5 shadow-[var(--shadow-glow)]"
                            : "border-border hover:border-primary/40"
                        }`}
                      >
                        <m.icon className="w-5 h-5 text-primary" />
                        <div className="flex-1 text-left">
                          <div className="text-sm font-medium">{m.label}</div>
                          {m.subtitle && <div className="text-xs text-muted-foreground">{m.subtitle}</div>}
                        </div>
                        <div className={`w-5 h-5 rounded-full border-2 ${method === m.id ? "border-primary bg-primary" : "border-border"} flex items-center justify-center`}>
                          {method === m.id && <Check className="w-3 h-3 text-primary-foreground" strokeWidth={3} />}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {method === "card" && (
                  <div className="glass-strong rounded-3xl p-6 md:p-8 animate-fade-up">
                    <h2 className="text-lg font-semibold">Card details</h2>
                    <div className="mt-5 grid gap-3">
                      <Field label="Card number" placeholder="1234 5678 9012 3456" />
                      <div className="grid grid-cols-2 gap-3">
                        <Field label="Expiry" placeholder="MM / YY" />
                        <Field label="CVC" placeholder="•••" />
                      </div>
                      <Field label="Name on card" placeholder="John Doe" />
                    </div>
                  </div>
                )}
              </div>

              <aside className="lg:sticky lg:top-24 self-start">
                <div className="glass-strong rounded-3xl p-6">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">Order</div>
                  {game ? (
                    <div className="mt-4 flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${game.accent} flex items-center justify-center text-xl`}>{game.emoji}</div>
                      <div>
                        <div className="text-sm font-semibold">{game.name}</div>
                        <div className="text-xs text-muted-foreground">{pack ? `${pack.amount} ${game.currency}` : "No package selected"}</div>
                      </div>
                    </div>
                  ) : (
                    <div className="mt-4 text-sm text-muted-foreground">Pick a game to continue.</div>
                  )}

                  <div className="mt-5 space-y-2 text-sm">
                    <Row label="Player ID" value={search.playerId || "—"} />
                    {search.serverId && <Row label="Server ID" value={search.serverId} />}
                    <Row label="Subtotal" value={`$${total.toFixed(2)}`} />
                    <Row label="Fees" value="$0.00" />
                  </div>
                  <div className="mt-5 pt-5 border-t border-border flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Total</span>
                    <span className="text-2xl font-bold gradient-text">${total.toFixed(2)}</span>
                  </div>
                  <button
                    onClick={() => setDone(true)}
                    disabled={!pack}
                    className="mt-5 w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-gradient-to-br from-primary to-electric text-primary-foreground font-medium shadow-[var(--shadow-glow)] hover:scale-[1.01] transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Sparkles className="w-4 h-4" /> Confirm & pay
                  </button>
                  <div className="mt-3 flex items-center justify-center gap-1.5 text-[11px] text-muted-foreground">
                    <ShieldCheck className="w-3 h-3" /> Secured by HASA Pay
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <FloatingSupport />
    </div>
  );
}

function Field({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <label className="block">
      <span className="text-xs text-muted-foreground font-medium">{label}</span>
      <input
        placeholder={placeholder}
        className="mt-1.5 w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-ring"
      />
    </label>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-medium text-foreground truncate max-w-[60%]">{value}</span>
    </div>
  );
}
