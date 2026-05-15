import { createFileRoute } from "@tanstack/react-router";
import { revenueSeries, games } from "@/lib/data";

export const Route = createFileRoute("/admin/analytics")({
  component: AdminAnalytics,
});

function AdminAnalytics() {
  const max = Math.max(...revenueSeries.map((r) => r.v));
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Analytics</h1>
        <p className="text-sm text-muted-foreground">Deeper insight into store performance.</p>
      </div>

      <div className="bg-card rounded-2xl border border-border p-6">
        <h2 className="text-lg font-semibold">Revenue trend</h2>
        <svg viewBox="0 0 700 200" className="w-full h-56 mt-4">
          <defs>
            <linearGradient id="lg" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="oklch(0.6 0.24 255)" stopOpacity="0.4" />
              <stop offset="100%" stopColor="oklch(0.6 0.24 255)" stopOpacity="0" />
            </linearGradient>
          </defs>
          {(() => {
            const w = 700, h = 200, pad = 20;
            const pts = revenueSeries.map((d, i) => {
              const x = pad + (i * (w - pad * 2)) / (revenueSeries.length - 1);
              const y = h - pad - ((d.v / max) * (h - pad * 2));
              return [x, y] as const;
            });
            const path = pts.map((p, i) => `${i === 0 ? "M" : "L"} ${p[0]},${p[1]}`).join(" ");
            const area = `${path} L ${pts[pts.length - 1][0]},${h - pad} L ${pts[0][0]},${h - pad} Z`;
            return (
              <>
                <path d={area} fill="url(#lg)" />
                <path d={path} fill="none" stroke="oklch(0.6 0.24 255)" strokeWidth="2.5" />
                {pts.map(([x, y], i) => (
                  <circle key={i} cx={x} cy={y} r="4" fill="white" stroke="oklch(0.6 0.24 255)" strokeWidth="2" />
                ))}
              </>
            );
          })()}
        </svg>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-card rounded-2xl border border-border p-6">
          <h2 className="text-lg font-semibold">Sales by game</h2>
          <div className="mt-4 space-y-3">
            {games.map((g, i) => {
              const pct = [38, 24, 18, 12, 8][i];
              return (
                <div key={g.id}>
                  <div className="flex items-center gap-3 mb-1.5 text-sm">
                    <div className={`w-7 h-7 rounded-lg bg-gradient-to-br ${g.accent} flex items-center justify-center`}>{g.emoji}</div>
                    <span className="flex-1 font-medium">{g.name}</span>
                    <span className="text-muted-foreground text-xs">{pct}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-secondary overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-primary to-cyan" style={{ width: `${pct}%` }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="bg-card rounded-2xl border border-border p-6">
          <h2 className="text-lg font-semibold">Activity log</h2>
          <ul className="mt-4 space-y-3 text-sm">
            {[
              ["10:24", "Order HG-10421 marked as completed"],
              ["10:18", "New user registered: aisha.k@example.com"],
              ["09:47", "Promo HASA10 used 12 times"],
              ["09:12", "Refund issued for HG-10399"],
              ["08:55", "Product 'PUBG 8100 UC' price updated"],
            ].map(([t, d]) => (
              <li key={t} className="flex gap-3">
                <span className="text-xs text-muted-foreground w-12 shrink-0 mt-0.5">{t}</span>
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
