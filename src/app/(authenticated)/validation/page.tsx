import Link from "next/link";

export default function ValidationPage() {
  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-xl w-full space-y-6 border rounded-2xl p-6 shadow-sm bg-white">
        <h1 className="text-2xl font-semibold">Validate your documents</h1>

        <p className="text-muted-foreground text-sm">
          Please review your uploaded files before we process them with AI.
        </p>

        <div className="border rounded-lg p-4">
          <p className="font-medium">Energie_2025_Q1-Q2.xlsx</p>
          <p className="text-sm text-muted-foreground">Detected: Energy Data</p>
        </div>

        <div className="flex gap-3">
          <Link
            href="/processing"
            className="bg-primary text-white px-4 py-2 rounded-lg"
          >
            Confirm & Continue
          </Link>

          <Link
            href="/upload"
            className="border px-4 py-2 rounded-lg"
          >
            Go Back
          </Link>
        </div>
      </div>
    </main>
  );
}
