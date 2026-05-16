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
  const dropdownRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) setUserOpen(false);
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
      }`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div
          className={`relative flex items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-300 ${
            scrolled
              ? "glass-strong shadow-[var(--shadow-soft)]"
              : "bg-transparent"
          }`}
          style={!scrolled ? { borderBottom: "1px solid var(--color-border)" } : undefined}
        >
          {}

          <div className="flex items-center gap-8">
            <Logo />
            <nav className="hidden md:flex items-center gap-1">
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  activeOptions={{ exact: n.to === "/" }}
                  className="relative px-4 py-2 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-200 group data-[status=active]:text-primary"
                >
                  {({ isActive }) => (
                    <>
                      <span
                        className={`relative z-10 transition-colors duration-200 ${
                          isActive ? "text-primary" : "group-hover:text-foreground"
                        }`}
                      >
                        {n.label}
                      </span>
                      {isActive && (
                        <span className="absolute inset-0 rounded-xl bg-primary/10 animate-fade-up" />
                      )}
                      <span
                        className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] rounded-full transition-all duration-300 ${
                          isActive
                            ? "w-2/3 bg-gradient-to-r from-transparent via-primary to-transparent opacity-80"
                            : "w-0 bg-primary opacity-0 group-hover:w-1/3 group-hover:opacity-40"
                        }`}
                      />
                    </>
                  )}
                </Link>
              ))}
            </nav>
          </div>

          {}

          <div className="flex items-center gap-2">
            {}

            <div className="hidden sm:block">
              <button
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
                className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm transition-all duration-300 ${
                  searchFocused
                    ? "w-56 bg-secondary ring-2 ring-ring/40 shadow-[var(--shadow-glow)]"
                    : "w-44 bg-secondary/60 text-muted-foreground hover:bg-secondary hover:text-foreground"
                }`}
              >
                <Search className="w-4 h-4 text-muted-foreground shrink-0" />
                <span className="truncate">Search games…</span>
                {!searchFocused && (
                  <kbd className="ml-auto text-[10px] px-1.5 py-0.5 rounded bg-background/80 border border-border shrink-0">
                    ⌘K
                  </kbd>
                )}
              </button>
            </div>

            {}

            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setUserOpen(!userOpen)}
                className={`flex items-center gap-1.5 px-2.5 py-2 rounded-xl transition-all duration-200 hover:bg-secondary ${
                  userOpen ? "bg-secondary" : ""
                }`}
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-electric flex items-center justify-center text-primary-foreground text-xs font-bold shadow-[var(--shadow-glow)]">
                  U
                </div>
                <ChevronDown
                  className={`w-3.5 h-3.5 text-muted-foreground transition-transform duration-200 ${
                    userOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {userOpen && (
                <div className="absolute right-0 top-full mt-2 w-52 rounded-2xl glass-strong shadow-[var(--shadow-soft)] py-1.5 animate-fade-up origin-top-right">
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

            {}

            {}

            <button className="relative p-2 rounded-xl hover:bg-secondary transition-colors group">
              <Bell className="w-[18px] h-[18px] text-muted-foreground group-hover:text-foreground transition-colors" />
              <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 rounded-full bg-destructive ring-2 ring-background" />
            </button>

            {}

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
