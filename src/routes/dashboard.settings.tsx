import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/dashboard/settings")({
  component: SettingsPage,
});

function SettingsPage() {
  const [tab, setTab] = useState<"profile" | "security" | "notifications">("profile");
  return (
    <div className="space-y-6">
      <div>
        <div className="text-xs uppercase tracking-widest text-primary font-semibold">Account</div>
        <h1 className="text-3xl font-bold mt-1">Settings</h1>
      </div>

      <div className="flex gap-1.5 border-b border-border">
        {(["profile", "security", "notifications"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-4 py-2.5 text-sm font-medium capitalize border-b-2 transition-colors ${
              tab === t ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="glass-strong rounded-3xl p-6 md:p-8">
        {tab === "profile" && (
          <div className="space-y-5 max-w-xl">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-cyan text-primary-foreground flex items-center justify-center text-2xl font-bold">HA</div>
              <div>
                <button className="text-sm font-medium px-4 py-2 rounded-xl bg-secondary hover:bg-accent">Change photo</button>
                <p className="text-xs text-muted-foreground mt-1.5">JPG or PNG. Max 2MB.</p>
              </div>
            </div>
            <Field label="Full name" defaultValue="Hassan Ali" />
            <Field label="Email" defaultValue="hassan@example.com" type="email" />
            <Field label="Phone" defaultValue="+92 300 1234567" />
            <button className="px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-medium">Save changes</button>
          </div>
        )}
        {tab === "security" && (
          <div className="space-y-5 max-w-xl">
            <Field label="Current password" type="password" />
            <Field label="New password" type="password" />
            <Field label="Confirm new password" type="password" />
            <div className="flex items-center justify-between p-4 rounded-2xl bg-secondary">
              <div>
                <div className="text-sm font-semibold">Two-factor authentication</div>
                <div className="text-xs text-muted-foreground">Add an extra layer of security.</div>
              </div>
              <Toggle />
            </div>
            <button className="px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-medium">Update password</button>
          </div>
        )}
        {tab === "notifications" && (
          <div className="space-y-3 max-w-xl">
            {[
              "Order updates",
              "Promotional offers",
              "Security alerts",
              "Newsletter",
            ].map((label, i) => (
              <div key={label} className="flex items-center justify-between p-4 rounded-2xl bg-secondary">
                <div className="text-sm font-medium">{label}</div>
                <Toggle defaultChecked={i < 3} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function Field({ label, defaultValue, type = "text" }: { label: string; defaultValue?: string; type?: string }) {
  return (
    <label className="block">
      <span className="text-xs text-muted-foreground font-medium">{label}</span>
      <input
        type={type}
        defaultValue={defaultValue}
        className="mt-1.5 w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-ring"
      />
    </label>
  );
}

function Toggle({ defaultChecked = false }: { defaultChecked?: boolean }) {
  const [on, setOn] = useState(defaultChecked);
  return (
    <button
      onClick={() => setOn((v) => !v)}
      className={`relative w-11 h-6 rounded-full transition-colors ${on ? "bg-primary" : "bg-border"}`}
    >
      <span className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform ${on ? "translate-x-5" : ""}`} />
    </button>
  );
}
