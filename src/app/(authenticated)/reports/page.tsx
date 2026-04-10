export default function ReportsPage() {
  const demoReports = [
    {
      id: 1,
      title: "Annual ESG Summary",
      period: "2025",
      category: "Full Report",
      score: 78,
      status: "Ready",
    },
    {
      id: 2,
      title: "Environmental Performance Review",
      period: "Q1 2026",
      category: "Environmental",
      score: 82,
      status: "Ready",
    },
    {
      id: 3,
      title: "Social Responsibility Snapshot",
      period: "Q1 2026",
      category: "Social",
      score: 74,
      status: "Draft",
    },
    {
      id: 4,
      title: "Governance Compliance Overview",
      period: "Q1 2026",
      category: "Governance",
      score: 79,
      status: "In Review",
    },
  ];

  return (
    <main className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Reports</h1>
        <p className="text-muted-foreground">
          Demo ESG reports and reporting fields.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {demoReports.map((report) => (
          <div
            key={report.id}
            className="rounded-2xl border bg-white p-6 shadow-sm"
          >
            <h2 className="text-xl font-semibold">{report.title}</h2>
            <div className="mt-4 space-y-2 text-sm text-muted-foreground">
              <p>
                <span className="font-medium text-foreground">Period:</span>{" "}
                {report.period}
              </p>
              <p>
                <span className="font-medium text-foreground">Category:</span>{" "}
                {report.category}
              </p>
              <p>
                <span className="font-medium text-foreground">ESG Score:</span>{" "}
                {report.score}
              </p>
              <p>
                <span className="font-medium text-foreground">Status:</span>{" "}
                {report.status}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
