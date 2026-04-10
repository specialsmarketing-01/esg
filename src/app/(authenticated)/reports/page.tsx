```tsx
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
      <div className="mx-auto w-full max-w-7xl space-y-8 px-6 py-8 md:px-8 lg:px-10">

        {/* your existing content (unchanged) */}
        {/* ... EVERYTHING ELSE SAME ... */}

      </div>
    </main>
  );
}
```
