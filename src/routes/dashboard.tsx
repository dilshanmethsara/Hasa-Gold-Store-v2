import { createFileRoute, Outlet } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { FloatingSupport } from "@/components/FloatingSupport";

export const Route = createFileRoute("/dashboard")({
  head: () => ({ meta: [{ title: "Dashboard — HASA Gold Store" }] }),
  component: DashboardLayout,
});

function DashboardLayout() {
  return (
    <div className="min-h-screen flex flex-col hero-bg">
      <SiteHeader />
      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-6">
            <DashboardSidebar />
            <div className="flex-1 min-w-0">
              <Outlet />
            </div>
          </div>
        </div>
      </main>
      <FloatingSupport />
    </div>
  );
}
