import { Link, useRouterState } from "@tanstack/react-router";
import { LayoutDashboard, ShoppingBag, Users, Package, Tag, MessageSquare, BarChart3, ArrowLeft } from "lucide-react";

const items = [
  { to: "/admin", label: "Overview", icon: LayoutDashboard, exact: true },
  { to: "/admin/orders", label: "Orders", icon: ShoppingBag },
  { to: "/admin/users", label: "Users", icon: Users },
  { to: "/admin/products", label: "Products", icon: Package },
  { to: "/admin/promos", label: "Promo codes", icon: Tag },
  { to: "/admin/analytics", label: "Analytics", icon: BarChart3 },
  { to: "/admin/tickets", label: "Support tickets", icon: MessageSquare },
];

export function AdminSidebar() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  return (
    <aside className="w-64 shrink-0 hidden lg:block">
      <div className="sticky top-0 h-screen bg-[oklch(0.16_0.04_255)] text-white flex flex-col">
        <div className="px-6 py-6 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-cyan flex items-center justify-center font-bold">H</div>
            <div className="leading-tight">
              <div className="font-display font-bold text-sm">HASA Admin</div>
              <div className="text-[10px] text-white/50 tracking-widest">CONTROL CENTER</div>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {items.map((it) => {
            const active = it.exact ? path === it.to : path.startsWith(it.to);
            return (
              <Link
                key={it.to}
                to={it.to}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  active ? "bg-white/10 text-white shadow-[inset_0_0_0_1px_oklch(0.7_0.2_245/0.4)]" : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
              >
                <it.icon className="w-4 h-4" />
                {it.label}
                {active && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-cyan" />}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-white/10">
          <Link to="/" className="flex items-center gap-2 text-xs text-white/60 hover:text-white">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to store
          </Link>
        </div>
      </div>
    </aside>
  );
}
