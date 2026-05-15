import { Logo } from "./Logo";

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border/60">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <Logo />
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              Instant, secure game top-ups for the world's most loved titles. Trusted by thousands of players.
            </p>
          </div>
          {[
            { title: "Games", items: ["Free Fire", "PUBG Mobile", "COD Mobile", "Blood Strike", "Mobile Legends"] },
            { title: "Company", items: ["About", "Careers", "Press", "Contact"] },
            { title: "Support", items: ["Help Center", "Order Status", "Refunds", "Terms", "Privacy"] },
          ].map((c) => (
            <div key={c.title}>
              <div className="text-sm font-semibold text-foreground">{c.title}</div>
              <ul className="mt-4 space-y-2">
                {c.items.map((i) => (
                  <li key={i}><a className="text-sm text-muted-foreground hover:text-primary transition-colors" href="#">{i}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-border/60 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">© 2026 HASA Gold Store. All rights reserved.</p>
          <p className="text-xs text-muted-foreground">Built with care · 256-bit encrypted checkout</p>
        </div>
      </div>
    </footer>
  );
}
