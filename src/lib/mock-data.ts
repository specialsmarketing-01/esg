export type ReportStatus = "draft" | "in_review" | "published";

export type ReportRow = {
  id: string;
  title: string;
  period: string;
  status: ReportStatus;
  updatedAt: string;
};

export const mockReports: ReportRow[] = [
  {
    id: "r1",
    title: "ESG Report 2025 — Draft",
    period: "FY 2025",
    status: "draft",
    updatedAt: "2026-04-02",
  },
  {
    id: "r2",
    title: "CSRD-aligned summary",
    period: "Q1 2026",
    status: "in_review",
    updatedAt: "2026-03-28",
  },
  {
    id: "r3",
    title: "Bank questionnaire pack",
    period: "2025",
    status: "published",
    updatedAt: "2026-02-14",
  },
];

export const mockKpis = [
  { label: "Scope 1 & 2 (est.)", value: "124 tCO₂e", delta: "+2.1% vs LY" },
  { label: "Energy intensity", value: "48 kWh / FTE", delta: "−4% vs LY" },
  { label: "Training hours / FTE", value: "18 h", delta: "+1 h vs LY" },
  { label: "Women in management", value: "36%", delta: "Target 40%" },
] as const;

/** Dashboard ESG pillar scores (0–100) */
export const mockEsgScores = {
  overall: 78,
  environmental: 82,
  social: 74,
  governance: 79,
} as const;

export type ChartPoint = { label: string; value: number };

export const mockEnergyConsumption: ChartPoint[] = [
  { label: "Jan", value: 4200 },
  { label: "Feb", value: 3950 },
  { label: "Mar", value: 4100 },
  { label: "Apr", value: 3780 },
  { label: "May", value: 3620 },
  { label: "Jun", value: 3480 },
];

export const mockCarbonEmissions: ChartPoint[] = [
  { label: "Jan", value: 14.2 },
  { label: "Feb", value: 13.1 },
  { label: "Mar", value: 13.8 },
  { label: "Apr", value: 12.4 },
  { label: "May", value: 11.9 },
  { label: "Jun", value: 11.2 },
];

export const mockDashboardKeyMetrics = [
  { label: "Renewable energy", value: "42%", hint: "of total consumption" },
  { label: "Water use intensity", value: "3.2 m³", hint: "per FTE / month" },
  { label: "Lost-time injuries", value: "0", hint: "YTD" },
  { label: "Board independence", value: "60%", hint: "non-executive" },
] as const;

export const mockComplianceStatus = {
  label: "On Track",
  summary:
    "Disclosure checklist 12/14 complete. Two evidence files pending for Scope 3 estimates.",
  nextReview: "2026-05-15",
} as const;

export type ActivityItem = {
  id: string;
  fileName: string;
  action: string;
  time: string;
  kind: "pdf" | "xlsx" | "csv";
};

export const mockRecentActivity: ActivityItem[] = [
  {
    id: "a1",
    fileName: "Energie_Q1_2026.xlsx",
    action: "Uploaded",
    time: "2 hours ago",
    kind: "xlsx",
  },
  {
    id: "a2",
    fileName: "Nachhaltigkeit_Policy.pdf",
    action: "Processed",
    time: "Yesterday",
    kind: "pdf",
  },
  {
    id: "a3",
    fileName: "Emissionen_Scope1.csv",
    action: "Analyzed",
    time: "2 days ago",
    kind: "csv",
  },
  {
    id: "a4",
    fileName: "Lieferanten_Audit_2025.pdf",
    action: "Uploaded",
    time: "3 days ago",
    kind: "pdf",
  },
];
