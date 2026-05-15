import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { FloatingSupport } from "@/components/FloatingSupport";
import { Mail, Lock, User, ArrowRight, Sparkles, ShieldCheck, Check, Eye, EyeOff } from "lucide-react";

export const Route = createFileRoute("/signup")({
  head: () => ({
    meta: [
      { title: "Sign Up — HASA Gold Store" },
      { name: "description", content: "Create your HASA Gold Store account." },
    ],
  }),
  component: SignupPage,
});

function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1 flex items-center justify-center hero-bg py-20">
        <div className="w-full max-w-md mx-4">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-strong text-xs font-medium text-primary animate-fade-up">
              <Sparkles className="w-3.5 h-3.5" />
              Join HASA Gold Store
            </div>
            <h1 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight">Create your account</h1>
            <p className="mt-2 text-muted-foreground">Start topping up your favorite games in seconds.</p>
          </div>

          <div className="glass-strong rounded-3xl p-6 md:p-8 animate-fade-up" style={{ animationDelay: "80ms" }}>
            <div className="space-y-4">
              <div>
                <label className="text-xs text-muted-foreground font-medium">Full name</label>
                <div className="mt-1.5 relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    className="w-full pl-11 pr-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-ring transition"
                  />
                </div>
              </div>

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
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-11 pr-12 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-ring transition"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div>
                <label className="text-xs text-muted-foreground font-medium">Confirm password</label>
                <div className="mt-1.5 relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-11 pr-12 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-ring transition"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <input type="checkbox" className="rounded border-border mt-1" />
                <label className="text-xs text-muted-foreground cursor-pointer">
                  I agree to the <a href="#" className="text-primary hover:underline">Terms of Service</a> and <a href="#" className="text-primary hover:underline">Privacy Policy</a>
                </label>
              </div>

              <button className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-gradient-to-br from-primary to-electric text-primary-foreground font-medium shadow-[var(--shadow-glow)] hover:scale-[1.01] transition-transform">
                Create account <ArrowRight className="w-4 h-4" />
              </button>

              <div className="mt-4">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-border" />
                  </div>
                  <div className="relative flex justify-center text-xs">
                    <span className="px-2 bg-background text-muted-foreground">Or continue with</span>
                  </div>
                </div>
                <button className="mt-4 w-full inline-flex items-center justify-center gap-3 px-5 py-3 rounded-2xl border border-border bg-background hover:bg-secondary transition-colors">
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <span className="text-sm font-medium">Google</span>
                </button>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-border text-center">
              <p className="text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link to="/login" className="text-primary font-medium hover:underline">
                  Sign in
                </Link>
              </p>
            </div>
          </div>

          <div className="mt-6 glass-strong rounded-2xl p-4">
            <div className="text-xs font-semibold text-foreground mb-3">Why join HASA?</div>
            <div className="space-y-2">
              {[
                { icon: Check, text: "Instant delivery in under 30 seconds" },
                { icon: Check, text: "256-bit encrypted secure payments" },
                { icon: Check, text: "24/7 customer support" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                  <item.icon className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 flex items-center justify-center gap-1.5 text-[11px] text-muted-foreground">
            <ShieldCheck className="w-3 h-3" /> 256-bit encrypted · secure signup
          </div>
        </div>
      </main>
      <SiteFooter />
      <FloatingSupport />
    </div>
  );
}
