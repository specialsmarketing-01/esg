export default function SettingsPage() {
  return (
    <main className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">
          Demo account and workspace settings.
        </p>
      </div>

      <div className="rounded-2xl border bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Profile Settings</h2>
        <div className="mt-4 space-y-3 text-sm">
          <p><span className="font-medium">Company:</span> ESGsimplify Demo</p>
          <p><span className="font-medium">Region:</span> Austria</p>
          <p><span className="font-medium">Plan:</span> Demo Workspace</p>
          <p><span className="font-medium">Notifications:</span> Enabled</p>
        </div>
      </div>
    </main>
  );
}
