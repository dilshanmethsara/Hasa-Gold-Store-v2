import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Logo } from "./Logo";
import { Search, Bell, User, ChevronDown, LogOut } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/games", label: "Games" },
  { to: "/dashboard", label: "Dashboard" },
  { to: "/admin", label: "Admin" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const [userOpen, setUserOpen] = useState(false);
  const [justLoaded, setJustLoaded] = useState(true);
  const dropdownRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    const t = setTimeout(() => setJustLoaded(false), 600);
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(t);
    };
  }, []);
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node))
        setUserOpen(false);
    };
    if (userOpen) {
      document.addEventListener("mousedown", handleClick);
      return () => document.removeEventListener("mousedown", handleClick);
    }
  }, [userOpen]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      } ${justLoaded ? "animate-slide-down" : ""}`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div
          className="relative flex items-center justify-between rounded-[2rem] bg-slate-950/95 border border-slate-800/70 px-5 py-3 shadow-[0_24px_80px_-48px_rgba(0,0,0,0.7)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
        >
          <div className="flex items-center gap-6">
            <div className={`flex items-center gap-3 ${justLoaded ? "animate-site-in" : ""}`} style={justLoaded ? { animationDelay: "80ms" } : undefined}>
              <Logo />
              <div className="hidden md:flex flex-col gap-1 rounded-2xl bg-slate-900/95 px-3 py-2 border border-slate-700/80 shadow-[0_18px_60px_-40px_rgba(0,0,0,0.45)]">
                <span className="text-[10px] uppercase tracking-[0.35em] text-slate-300">HASA GOLD STORE</span>
                <span className="text-sm font-semibold text-white leading-tight">Trusted top-up marketplace</span>
              </div>
            </div>
            <nav
              className={`hidden md:flex items-center gap-2 rounded-full bg-slate-900/95 p-2 border border-slate-800/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] ${justLoaded ? "animate-site-in" : ""}`}
              style={justLoaded ? { animationDelay: "140ms" } : undefined}
            >
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  activeOptions={{ exact: n.to === "/" }}
                  className="relative inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold text-slate-100 transition-all duration-300"
                >
                  {({ isActive }) => (
                    <>
                      <span className="relative z-20 transition-all duration-300 text-slate-100">{n.label}</span>
                      <span
                        className={`absolute inset-0 rounded-full transition-all duration-300 ${
                          isActive
                            ? "bg-white/12 shadow-[0_10px_30px_-18px_rgba(255,255,255,0.22)]"
                            : "bg-transparent hover:bg-white/10"
                        }`}
                      />
                      <span className="relative z-20">
                        {isActive && <span className="absolute inset-x-3 bottom-2 h-1 rounded-full bg-gradient-to-r from-electric via-primary to-electric opacity-95" />}
                      </span>
                    </>
                  )}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden sm:block">
              <button
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
                className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  searchFocused
                    ? "w-56 bg-secondary ring-2 ring-ring/50 shadow-[0_0_24px_var(--shadow-glow)] scale-[1.03]"
                    : "w-44 bg-secondary/60"
                } ${justLoaded ? "animate-site-in" : ""}`}
                style={justLoaded ? { animationDelay: "160ms" } : undefined}
              >
                <Search
                  className={`w-4 h-4 shrink-0 transition-all duration-300 ${
                    searchFocused
                      ? "text-primary rotate-[15deg] scale-110"
                      : "text-muted-foreground"
                  }`}
                />
                <span className="truncate">{searchFocused ? "" : "Search games…"}</span>
                {!searchFocused && (
                  <kbd className="ml-auto text-[10px] px-1.5 py-0.5 rounded bg-background/80 border border-border shrink-0 transition-all duration-300 hover:border-primary/40">
                    ⌘K
                  </kbd>
                )}
              </button>
            </div>

            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setUserOpen(!userOpen)}
                className={`flex items-center gap-1.5 px-2.5 py-2 rounded-xl transition-all duration-300 hover:bg-secondary group hover:scale-[1.04] ${
                  userOpen ? "bg-secondary" : ""
                }`}
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-electric flex items-center justify-center text-primary-foreground text-xs font-bold shadow-[var(--shadow-glow)] transition-all duration-300 group-hover:shadow-[0_0_20px_var(--shadow-glow)] group-hover:scale-105">
                  U
                </div>
                <ChevronDown
                  className={`w-3.5 h-3.5 text-muted-foreground transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    userOpen ? "rotate-180 text-primary" : "group-hover:text-foreground"
                  }`}
                />
              </button>

              {userOpen && (
                <div className="absolute right-0 top-full mt-3 w-52 rounded-2xl glass-strong shadow-[var(--shadow-soft)] py-1.5 animate-dropdown-down origin-top-right">
                  <div className="px-4 py-2.5 border-b border-border">
                    <p className="text-sm font-semibold">John Doe</p>
                    <p className="text-xs text-muted-foreground truncate">john@example.com</p>
                  </div>
                  <button className="w-full flex items-center gap-2.5 px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/60 transition-colors rounded-lg mx-1.5 mt-1">
                    <User className="w-4 h-4" />
                    Profile
                  </button>
                  <button className="w-full flex items-center gap-2.5 px-4 py-2 text-sm text-destructive hover:text-destructive hover:bg-destructive/5 transition-colors rounded-lg mx-1.5">
                    <LogOut className="w-4 h-4" />
                    Sign out
                  </button>
                </div>
              )}
            </div>

            <button
              className={`relative p-2 rounded-xl hover:bg-secondary transition-all duration-300 group hover:scale-110 ${justLoaded ? "animate-site-in" : ""}`}
              style={justLoaded ? { animationDelay: "240ms" } : undefined}
            >
              <Bell className="w-[18px] h-[18px] text-muted-foreground group-hover:text-foreground transition-all duration-300 group-hover:rotate-[15deg]" />
              <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 rounded-full bg-destructive ring-2 ring-background animate-pulse-glow" />
            </button>

            <Link
              to="/login"
              className={`hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl glass-strong text-sm font-medium hover:bg-secondary transition-colors ${justLoaded ? "animate-site-in" : ""}`}
              style={justLoaded ? { animationDelay: "320ms" } : undefined}
            >
              Sign in
            </Link>
            <Link
              to="/signup"
              className={`hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-br from-primary to-electric text-primary-foreground text-sm font-medium shadow-[var(--shadow-glow)] hover:scale-[1.03] hover:shadow-[0_8px_32px_var(--shadow-glow)] active:scale-[0.97] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${justLoaded ? "animate-site-in" : ""}`}
              style={justLoaded ? { animationDelay: "400ms" } : undefined}
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
