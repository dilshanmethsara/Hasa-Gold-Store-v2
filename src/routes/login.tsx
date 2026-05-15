import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { FloatingSupport } from "@/components/FloatingSupport";
import { Mail, Lock, ArrowRight, Sparkles, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Login — HASA Gold Store" },
      { name: "description", content: "Sign in to your HASA Gold Store account." },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1 flex items-center justify-center hero-bg py-20">
        <div className="w-full max-w-md mx-4">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-strong text-xs font-medium text-primary animate-fade-up">
              <Sparkles className="w-3.5 h-3.5" />
              Welcome back
            </div>
            <h1 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight">Sign in to your account</h1>
            <p className="mt-2 text-muted-foreground">Access your orders, wallet, and more.</p>
          </div>

          <div className="glass-strong rounded-3xl p-6 md:p-8 animate-fade-up" style={{ animationDelay: "80ms" }}>
            <div className="space-y-4">
              <div>
                <label className="text-xs text-muted-foreground font-medium">Email address</label>
                <div className="mt-1.5 relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full pl-11 pr-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-ring transition"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-muted-foreground font-medium">Password</label>
                <div className="mt-1.5 relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-11 pr-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-ring transition"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded border-border" />
                  <span className="text-muted-foreground">Remember me</span>
                </label>
                <a href="#" className="text-primary hover:underline">Forgot password?</a>
              </div>

              <button className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-gradient-to-br from-primary to-electric text-primary-foreground font-medium shadow-[var(--shadow-glow)] hover:scale-[1.01] transition-transform">
                Sign in <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="mt-6 pt-6 border-t border-border text-center">
              <p className="text-sm text-muted-foreground">
                Don't have an account?{" "}
                <Link to="/signup" className="text-primary font-medium hover:underline">
                  Sign up
                </Link>
              </p>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-center gap-1.5 text-[11px] text-muted-foreground">
            <ShieldCheck className="w-3 h-3" /> 256-bit encrypted · secure login
          </div>
        </div>
      </main>
      <SiteFooter />
      <FloatingSupport />
    </div>
  );
}
