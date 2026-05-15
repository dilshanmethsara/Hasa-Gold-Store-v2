import { createFileRoute, Outlet } from "@tanstack/react-router";
import { AdminSidebar } from "@/components/AdminSidebar";
import { Search, Bell } from "lucide-react";

export const Route = createFileRoute("/admin")({
  head: () => ({ meta: [{ title: "Admin — HASA Gold Store" }] }),
  component: AdminLayout,
});

function AdminLayout() {
  return (
    <div className="min-h-screen flex bg-[oklch(0.97_0.01_240)]">
      <AdminSidebar />
      <div className="flex-1 min-w-0 flex flex-col">
        <header className="sticky top-0 z-30 bg-white/90 backdrop-blur border-b border-border">
          <div className="px-6 py-3 flex items-center gap-3">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input placeholder="Search orders, users, products…" className="w-full pl-10 pr-4 py-2 rounded-xl bg-secondary text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>
            <button className="relative p-2 rounded-xl hover:bg-secondary">
              <Bell className="w-[18px] h-[18px] text-muted-foreground" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-destructive" />
            </button>
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-cyan text-primary-foreground flex items-center justify-center text-xs font-semibold">HA</div>
          </div>
        </header>
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
