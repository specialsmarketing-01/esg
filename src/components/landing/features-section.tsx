import {
  FileText,
  LineChart,
  ShieldCheck,
  Zap,
} from "lucide-react";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { design } from "@/lib/design-tokens";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: Zap,
    title: "AI-assisted drafting",
    description:
      "Turn notes, PDFs, and spreadsheets into structured narrative and metrics placeholders you can refine.",
  },
  {
    icon: ShieldCheck,
    title: "Audit-friendly structure",
    description:
      "Organize disclosures by topic so you are ready for reviews, banks, and large-customer questionnaires.",
  },
  {
    icon: LineChart,
    title: "KPI snapshots",
    description:
      "See mock energy, emissions, and social indicators on a clean dashboard while you iterate on data.",
  },
  {
    icon: FileText,
    title: "Export-ready layout",
    description:
      "Generate a polished report layout (demo) that mirrors how final PDF or Doc exports will look.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="scroll-mt-20 border-b border-border/40 bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Everything you need to get started
          </h2>
          <p className="mt-4 text-muted-foreground sm:text-base">
            A focused toolkit for small and mid-sized teams — not another bloated
            enterprise suite.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:gap-8">
          {features.map((f, i) => (
            <Card
              key={f.title}
              className={cn(
                design.marketing.featureCard,
                "group motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-3 motion-safe:duration-500 motion-safe:fill-mode-both"
              )}
              style={{
                animationDelay: `${100 + i * 75}ms`,
              }}
            >
              <CardHeader className="pb-2">
                <div className="mb-3 flex size-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/12 to-primary/6 text-primary shadow-sm ring-1 ring-primary/10 transition-[transform,background-color] duration-300 group-hover:scale-[1.03] group-hover:from-primary/16 group-hover:to-primary/8">
                  <f.icon className="size-5" strokeWidth={1.75} aria-hidden />
                </div>
                <CardTitle className="text-base font-medium">{f.title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {f.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
