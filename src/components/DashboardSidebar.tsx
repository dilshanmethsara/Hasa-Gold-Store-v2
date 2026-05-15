import { Link, useRouterState } from "@tanstack/react-router";
import { Logo } from "./Logo";
import {
  LayoutDashboard, ShoppingBag, Wallet, Settings, Bell, MessageSquare, LogOut, Gamepad2,
} from "lucide-react";

const items = [
  { to: "/dashboard", label: "Overview", icon: LayoutDashboard, exact: true },
  { to: "/dashboard/orders", label: "Orders", icon: ShoppingBag },
  { to: "/dashboard/wallet", label: "Wallet", icon: Wallet },
  { to: "/dashboard/games", label: "Saved IDs", icon: Gamepad2 },
  { to: "/dashboard/notifications", label: "Notifications", icon: Bell },
  { to: "/dashboard/support", label: "Support", icon: MessageSquare },
  { to: "/dashboard/settings", label: "Settings", icon: Settings },
];

export function DashboardSidebar() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  return (
    <aside className="lg:sticky lg:top-6 self-start w-full lg:w-64 shrink-0">
      <div className="glass-strong rounded-3xl p-5">
        <div className="px-2"><Logo /></div>

        <nav className="mt-6 space-y-1">
          {items.map((it) => {
            const active = it.exact ? path === it.to : path.startsWith(it.to);
            return (
              <Link
                key={it.to}
                to={it.to}
                className={`group flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  active
                    ? "bg-gradient-to-r from-primary/15 to-cyan/10 text-primary shadow-[inset_0_0_0_1px_oklch(0.6_0.2_250/0.2)]"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                <it.icon className={`w-4 h-4 ${active ? "text-primary" : ""}`} />
                {it.label}
                {active && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />}
              </Link>
            );
          })}
        </nav>

        <div className="mt-6 pt-5 border-t border-border">
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-muted-foreground hover:text-destructive hover:bg-destructive/5 transition">
            <LogOut className="w-4 h-4" /> Sign out
          </button>
        </div>
      </div>
    </aside>
  );
}
