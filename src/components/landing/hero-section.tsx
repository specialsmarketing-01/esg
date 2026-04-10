import Link from "next/link";

import { DashboardMockupPlaceholder } from "@/components/landing/dashboard-mockup-placeholder";
import { DisplayHeading, Lead } from "@/components/primitives/typography";
import { buttonVariants } from "@/components/ui/button-variants";
import { design } from "@/lib/design-tokens";
import { hrefLoginNext } from "@/lib/routes";
import { cn } from "@/lib/utils";

const tags = ["Better Data", "Better Decisions", "Better Impact"] as const;

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-border/40 bg-gradient-to-b from-secondary/35 via-background to-background">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(ellipse 80% 50% at 10% 0%, rgb(31 122 99 / 0.14), transparent), radial-gradient(ellipse 60% 40% at 90% 10%, rgb(31 122 99 / 0.08), transparent)",
        }}
      />
      <div
        className={cn(design.page.marketing, design.section.heroY, "relative")}
      >
        <div className="grid items-center gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16">
          <div
            className={cn(
              "mx-auto max-w-xl text-center lg:mx-0 lg:max-w-none lg:text-left",
              "motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-5 motion-safe:duration-700 motion-safe:fill-mode-both motion-safe:delay-75"
            )}
          >
            <DisplayHeading>
              ESG reporting, simplified for Austrian SMEs.
            </DisplayHeading>
            <Lead className="mx-auto mt-6 max-w-lg lg:mx-0">
              Turn your existing company documents into ESG insights and
              professional reports using AI.
            </Lead>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:justify-start sm:gap-4">
              <Link
                href="/onboarding"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "min-w-[11rem] px-8 shadow-premium motion-safe:transition-transform motion-safe:duration-300 motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-premium-hover"
                )}
              >
                Start ESG Analysis
              </Link>
              <Link
                href="/#how"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "min-w-[11rem] border-border/80 bg-background/80 px-8 backdrop-blur-md transition-all duration-300 hover:border-primary/35 hover:bg-secondary/55 motion-safe:hover:-translate-y-0.5"
                )}
              >
                See How It Works
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2 lg:justify-start">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full border border-border/70 bg-card/80 px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm backdrop-blur-sm transition-colors duration-200 hover:border-primary/20 hover:text-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div
            className={cn(
              "flex justify-center lg:justify-end",
              "motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-6 motion-safe:duration-700 motion-safe:fill-mode-both motion-safe:delay-200"
            )}
          >
            <DashboardMockupPlaceholder />
          </div>
        </div>
      </div>
    </section>
  );
}
