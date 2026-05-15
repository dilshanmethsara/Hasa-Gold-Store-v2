import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { Search, Bell, User } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/games", label: "Games" },
  { to: "/dashboard", label: "Dashboard" },
  { to: "/admin", label: "Admin" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`}>
      <div className="mx-auto max-w-7xl px-4">
        <div className={`flex items-center justify-between rounded-2xl px-4 py-2.5 transition-all ${scrolled ? "glass-strong" : ""}`}>
          <div className="flex items-center gap-8">
            <Logo />
            <nav className="hidden md:flex items-center gap-1">
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  activeOptions={{ exact: n.to === "/" }}
                  className="px-3 py-1.5 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors data-[status=active]:text-primary data-[status=active]:bg-primary/10"
                >
                  {n.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-2">
            <button className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-secondary/60 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <Search className="w-4 h-4" />
              <span>Search games…</span>
              <kbd className="ml-3 text-[10px] px-1.5 py-0.5 rounded bg-background border border-border">⌘K</kbd>
            </button>
            <button className="relative p-2 rounded-xl hover:bg-secondary transition-colors">
              <Bell className="w-[18px] h-[18px] text-muted-foreground" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-primary animate-pulse" />
            </button>
            <Link
              to="/login"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl glass-strong text-sm font-medium hover:bg-secondary transition-colors"
            >
              Sign in
            </Link>
            <Link
              to="/signup"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-br from-primary to-electric text-primary-foreground text-sm font-medium shadow-[var(--shadow-glow)] hover:scale-[1.01] transition-transform"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
