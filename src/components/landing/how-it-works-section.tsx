import { BarChart3, Sparkles, Upload } from "lucide-react";

import { SectionTitle, Subtitle } from "@/components/primitives/typography";
import { design } from "@/lib/design-tokens";
import { cn } from "@/lib/utils";

const steps = [
  {
    title: "Upload Documents",
    description:
      "Bring invoices, policies, energy data, and past reports — we keep the flow simple for busy teams.",
    icon: Upload,
  },
  {
    title: "AI Extracts ESG Data",
    description:
      "Our AI reads your files and surfaces themes, metrics, and narrative hooks you can validate.",
    icon: Sparkles,
  },
  {
    title: "Get Insights & Reports",
    description:
      "Review structured insights and export-ready report layouts tailored to Austrian SME expectations.",
    icon: BarChart3,
  },
];

export function HowItWorksSection() {
  return (
    <section
      id="how"
      className={cn(
        "scroll-mt-20 border-b border-border/40 bg-background",
        design.section.y
      )}
    >
      <div className={cn(design.page.marketing, "text-center")}>
        <SectionTitle>How it works</SectionTitle>
        <Subtitle className="mx-auto mt-4 max-w-2xl">
          From files to clarity in three steps — no heavy setup required.
        </Subtitle>
        <ul className="mx-auto mt-10 grid max-w-5xl gap-6 text-left sm:mt-14 md:grid-cols-3 md:gap-8">
          {steps.map((item) => (
            <li key={item.title} className={design.marketing.featureCard}>
              <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <item.icon className="size-5" strokeWidth={1.75} aria-hidden />
              </span>
              <h3 className="mt-5 text-base font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
