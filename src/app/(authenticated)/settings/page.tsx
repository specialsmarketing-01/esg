import Link from "next/link";

export default function SettingsPage() {
  const settingsGroups = [
    {
      title: "Workspace Profile",
      description: "Basic information for your ESGsimplify demo workspace.",
      items: [
        { label: "Company Name", value: "ESGsimplify Demo Workspace" },
        { label: "Industry", value: "Sustainability Reporting Software" },
        { label: "Region", value: "Austria" },
        { label: "Company Size", value: "Medium Enterprise" },
      ],
    },
    {
      title: "Account Preferences",
      description: "Demo preferences for notifications, language, and access.",
      items: [
        { label: "Email Notifications", value: "Enabled" },
        { label: "Language", value: "English" },
        { label: "Report Auto-Save", value: "Enabled" },
        { label: "Two-Factor Authentication", value: "Disabled" },
      ],
    },
    {
      title: "Reporting Defaults",
      description: "Default settings applied to generated ESG reports.",
      items: [
        { label: "Reporting Standard", value: "ESRS / SME Demo Mode" },
        { label: "Default Report Format", value: "PDF + Dashboard View" },
        { label: "Scoring Model", value: "Composite ESG Score" },
        { label: "Review Workflow", value: "Internal Review First" },
      ],
    },
    {
      title: "Security & Access",
      description: "Overview of demo access control and workspace safety.",
      items: [
        { label: "Workspace Access", value: "Admin Only" },
        { label: "Document Encryption", value: "Enabled" },
        { label: "Session Timeout", value: "30 Minutes" },
        { label: "Last Security Review", value: "March 2026" },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-secondary/20">
      <header className="sticky top-0 z-20 border-b bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="logo" className="h-8 w-8 rounded-md" />
            <span className="text-lg font-semibold tracking-tight">
              ESG<span className="text-primary">simplify</span>
            </span>
          </div>

          <Link
            href="/dashboard"
            className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:opacity-90"
          >
            ESGsimplify Dashboard
          </Link>
        </div>
      </header>

      <div className="mx-auto w-full max-w-7xl space-y-8 px-6 py-8 md:px-8 lg:px-10">
        <section className="rounded-3xl border border-border/60 bg-background/80 p-6 shadow-sm backdrop-blur md:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-3">
              <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                Workspace Settings
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Settings Center
              </h1>
              <p className="max-w-2xl text-sm leading-6 text-muted-foreground md:text-base">
                Manage your ESGsimplify demo workspace settings, reporting
                defaults, security controls, and account preferences in one
                professional interface.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border bg-card px-4 py-3 text-center shadow-sm">
                <div className="text-2xl font-bold text-foreground">4</div>
                <div className="text-xs text-muted-foreground">Sections</div>
              </div>
              <div className="rounded-2xl border bg-card px-4 py-3 text-center shadow-sm">
                <div className="text-2xl font-bold text-foreground">16</div>
                <div className="text-xs text-muted-foreground">Settings</div>
              </div>
              <div className="rounded-2xl border bg-card px-4 py-3 text-center shadow-sm col-span-2 sm:col-span-1">
                <div className="text-2xl font-bold text-foreground">2026</div>
                <div className="text-xs text-muted-foreground">Demo Mode</div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-6 xl:grid-cols-2">
          {settingsGroups.map((group, index) => (
            <article
              key={group.title}
              className="group rounded-3xl border border-border/60 bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div className="space-y-5">
                <div className="space-y-2">
                  <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                    {group.title}
                  </h2>
                  <p className="text-sm leading-6 text-muted-foreground">
                    {group.description}
                  </p>
                </div>

                <div className="space-y-3 rounded-2xl bg-secondary/30 p-4">
                  {group.items.map((item) => (
                    <div
                      key={item.label}
                      className="flex flex-col gap-1 rounded-xl border border-border/50 bg-background/80 px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
                    >
                      <span className="text-sm font-medium text-foreground">
                        {item.label}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 pt-1">
                  <button className="rounded-xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-all duration-300 hover:opacity-90">
                    Edit Settings
                  </button>
                  <button className="rounded-xl border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-all duration-300 hover:bg-secondary/60">
                    View Details
                  </button>
                </div>
              </div>
            </article>
          ))}
        </section>

        <section className="rounded-3xl border border-dashed border-border/80 bg-background/70 px-6 py-5 text-center shadow-sm">
          <p className="text-sm text-muted-foreground">
            Demo settings workspace for ESGsimplify — sample content for account
            preferences, workspace setup, reporting defaults, and security
            controls.
          </p>
        </section>
      </div>
    </main>
  );
}
