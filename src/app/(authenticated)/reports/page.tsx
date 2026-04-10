import Link from "next/link";

export default function ReportsPage() {

  const demoReports = [
    {
      id: 1,
      company: "GreenVolt Energy GmbH",
      industry: "Green Energy",
      size: "Medium Enterprise",
      title: "Annual ESG Performance Report",
      period: "2025",
      score: 91,
      status: "Ready",
      summary:
        "Strong renewable transition progress with measurable emissions reduction and governance maturity.",
    },
    {
      id: 2,
      company: "Alpine Supply Chain Solutions",
      industry: "Supply Chain & Logistics",
      size: "Large Enterprise",
      title: "Supply Chain Sustainability Review",
      period: "Q1 2026",
      score: 83,
      status: "Ready",
      summary:
        "Supplier screening, transport efficiency, and compliance controls improved across regional operations.",
    },
    {
      id: 3,
      company: "FreshBite Foods Austria",
      industry: "Food Industry",
      size: "Small Business",
      title: "Food Operations ESG Snapshot",
      period: "Q1 2026",
      score: 76,
      status: "Draft",
      summary:
        "Waste reduction and sourcing practices are improving, with additional work needed on reporting consistency.",
    },
    {
      id: 4,
      company: "NovaElectra Systems",
      industry: "Electrical & Electronics",
      size: "Medium Enterprise",
      title: "Electrical Manufacturing Compliance Report",
      period: "Q1 2026",
      score: 88,
      status: "In Review",
      summary:
        "Operational safety, supplier governance, and product lifecycle controls are performing above benchmark.",
    },
    {
      id: 5,
      company: "UrbanNest Retail Group",
      industry: "Retail & Consumer Goods",
      size: "Large Enterprise",
      title: "Retail ESG Governance Overview",
      period: "2025",
      score: 80,
      status: "Ready",
      summary:
        "Solid governance framework and employee initiatives, with opportunities in energy optimization.",
    },
  ];

  const getStatusStyles = (status: string) => {
    switch (status) {
      case "Ready":
        return "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200";
      case "Draft":
        return "bg-amber-50 text-amber-700 ring-1 ring-amber-200";
      case "In Review":
        return "bg-sky-50 text-sky-700 ring-1 ring-sky-200";
      default:
        return "bg-muted text-muted-foreground ring-1 ring-border";
    }
  };

  const getScoreStyles = (score: number) => {
    if (score >= 85) return "text-emerald-600";
    if (score >= 75) return "text-amber-600";
    return "text-rose-600";
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-secondary/20">

      {/*  HEADER (FIXED POSITION) */}
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

      {/* PAGE CONTENT */}
export default function ReportsPage() {
  const demoReports = [
    {
      id: 1,
      company: "GreenVolt Energy GmbH",
      industry: "Green Energy",
      size: "Medium Enterprise",
      title: "Annual ESG Performance Report",
      period: "2025",
      score: 91,
      status: "Ready",
      summary:
        "Strong renewable transition progress with measurable emissions reduction and governance maturity.",
    },
    {
      id: 2,
      company: "Alpine Supply Chain Solutions",
      industry: "Supply Chain & Logistics",
      size: "Large Enterprise",
      title: "Supply Chain Sustainability Review",
      period: "Q1 2026",
      score: 83,
      status: "Ready",
      summary:
        "Supplier screening, transport efficiency, and compliance controls improved across regional operations.",
    },
    {
      id: 3,
      company: "FreshBite Foods Austria",
      industry: "Food Industry",
      size: "Small Business",
      title: "Food Operations ESG Snapshot",
      period: "Q1 2026",
      score: 76,
      status: "Draft",
      summary:
        "Waste reduction and sourcing practices are improving, with additional work needed on reporting consistency.",
    },
    {
      id: 4,
      company: "NovaElectra Systems",
      industry: "Electrical & Electronics",
      size: "Medium Enterprise",
      title: "Electrical Manufacturing Compliance Report",
      period: "Q1 2026",
      score: 88,
      status: "In Review",
      summary:
        "Operational safety, supplier governance, and product lifecycle controls are performing above benchmark.",
    },
    {
      id: 5,
      company: "UrbanNest Retail Group",
      industry: "Retail & Consumer Goods",
      size: "Large Enterprise",
      title: "Retail ESG Governance Overview",
      period: "2025",
      score: 80,
      status: "Ready",
      summary:
        "Solid governance framework and employee initiatives, with opportunities in energy optimization.",
    },
  ];

  const getStatusStyles = (status: string) => {
    switch (status) {
      case "Ready":
        return "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200";
      case "Draft":
        return "bg-amber-50 text-amber-700 ring-1 ring-amber-200";
      case "In Review":
        return "bg-sky-50 text-sky-700 ring-1 ring-sky-200";
      default:
        return "bg-muted text-muted-foreground ring-1 ring-border";
    }
  };

  const getScoreStyles = (score: number) => {
    if (score >= 85) return "text-emerald-600";
    if (score >= 75) return "text-amber-600";
    return "text-rose-600";
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-secondary/20">
      <div className="mx-auto w-full max-w-7xl space-y-8 px-6 py-8 md:px-8 lg:px-10">
        {/* Page Header */}
        <section className="rounded-3xl border border-border/60 bg-background/80 p-6 shadow-sm backdrop-blur md:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-3">
              <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                ESG Demo Reports
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Reports Center
              </h1>
              <p className="max-w-2xl text-sm leading-6 text-muted-foreground md:text-base">
                Browse polished demo ESG reports for different company sizes and
                industries. This section showcases how your platform can present
                sustainability insights in a clean and professional format.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border bg-card px-4 py-3 text-center shadow-sm">
                <div className="text-2xl font-bold text-foreground">5</div>
                <div className="text-xs text-muted-foreground">Reports</div>
              </div>
              <div className="rounded-2xl border bg-card px-4 py-3 text-center shadow-sm">
                <div className="text-2xl font-bold text-foreground">4</div>
                <div className="text-xs text-muted-foreground">Industries</div>
              </div>
              <div className="rounded-2xl border bg-card px-4 py-3 text-center shadow-sm col-span-2 sm:col-span-1">
                <div className="text-2xl font-bold text-foreground">2026</div>
                <div className="text-xs text-muted-foreground">Demo Cycle</div>
              </div>
            </div>
          </div>
        </section>

        {/* Reports Grid */}
        <section className="grid gap-6 xl:grid-cols-2">
          {demoReports.map((report, index) => (
            <article
              key={report.id}
              className="group rounded-3xl border border-border/60 bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{
                animationDelay: `${index * 120}ms`,
              }}
            >
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="space-y-2">
                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                        {report.industry}
                      </span>
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                        {report.size}
                      </span>
                    </div>

                    <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                      {report.title}
                    </h2>

                    <p className="text-sm font-medium text-muted-foreground">
                      {report.company}
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${getStatusStyles(
                        report.status
                      )}`}
                    >
                      {report.status}
                    </span>
                  </div>
                </div>

                <p className="text-sm leading-6 text-muted-foreground">
                  {report.summary}
                </p>

                <div className="grid gap-4 rounded-2xl bg-secondary/30 p-4 sm:grid-cols-3">
                  <div>
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">
                      Reporting Period
                    </p>
                    <p className="mt-1 font-semibold text-foreground">
                      {report.period}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">
                      ESG Score
                    </p>
                    <p
                      className={`mt-1 text-2xl font-bold ${getScoreStyles(
                        report.score
                      )}`}
                    >
                      {report.score}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">
                      Category
                    </p>
                    <p className="mt-1 font-semibold text-foreground">
                      ESG Report
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 pt-1">
                  <button className="rounded-xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-all duration-300 hover:opacity-90">
                    View Report
                  </button>
                  <button className="rounded-xl border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-all duration-300 hover:bg-secondary/60">
                    Download PDF
                  </button>
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* Footer Section */}
        <section className="rounded-3xl border border-dashed border-border/80 bg-background/70 px-6 py-5 text-center shadow-sm">
          <p className="text-sm text-muted-foreground">
            Demo reporting workspace for ESGsimplify — sample content for
            showcasing report layouts, ESG scoring, and industry-specific
            reporting views.
          </p>
        </section>
      </div>
    </main>
  );
}

