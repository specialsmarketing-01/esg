export default function DocumentsPage() {
  const demoDocuments = [
    {
      id: 1,
      name: "ESG Policy 2025.pdf",
      type: "Policy",
      status: "Processed",
      uploadedAt: "2026-04-10",
    },
    {
      id: 2,
      name: "Energy Consumption Q1.xlsx",
      type: "Spreadsheet",
      status: "Pending Review",
      uploadedAt: "2026-04-08",
    },
    {
      id: 3,
      name: "Waste Management Report.pdf",
      type: "Report",
      status: "Processed",
      uploadedAt: "2026-04-05",
    },
    {
      id: 4,
      name: "Employee Safety Checklist.docx",
      type: "Checklist",
      status: "Uploaded",
      uploadedAt: "2026-04-03",
    },
  ];

  return (
    <main className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Documents</h1>
        <p className="text-muted-foreground">
          Demo documents uploaded for ESG analysis.
        </p>
      </div>

      <div className="rounded-2xl border bg-white p-6 shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b text-left">
                <th className="py-3 pr-4">Document Name</th>
                <th className="py-3 pr-4">Type</th>
                <th className="py-3 pr-4">Status</th>
                <th className="py-3 pr-4">Uploaded</th>
              </tr>
            </thead>
            <tbody>
              {demoDocuments.map((doc) => (
                <tr key={doc.id} className="border-b last:border-0">
                  <td className="py-4 pr-4 font-medium">{doc.name}</td>
                  <td className="py-4 pr-4">{doc.type}</td>
                  <td className="py-4 pr-4">{doc.status}</td>
                  <td className="py-4 pr-4">{doc.uploadedAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
