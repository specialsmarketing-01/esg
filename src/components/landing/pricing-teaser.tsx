import Link from "next/link";
import { Check } from "lucide-react";

import { buttonVariants } from "@/components/ui/button-variants";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { hrefLoginNext } from "@/lib/routes";
import { cn } from "@/lib/utils";

const included = [
  "Unlimited mock uploads (demo)",
  "Multi-step onboarding & questionnaire",
  "Dashboard with sample KPI tiles",
  "Export preview layout",
];

export function PricingTeaser() {
  return (
    <section id="pricing" className="scroll-mt-20 border-t border-border/40 bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Simple pricing later
          </h2>
          <p className="mt-4 text-muted-foreground">
            This frontend demo uses a single preview tier. When you ship billing,
            keep the same calm layout.
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-md">
          <Card className="border-primary/20 bg-gradient-to-b from-secondary/30 to-card shadow-soft-lg ring-1 ring-primary/10">
            <CardHeader>
              <CardTitle className="text-lg">Team</CardTitle>
              <p className="text-sm text-muted-foreground">
                For SMEs getting their first ESG report out the door.
              </p>
              <p className="pt-4">
                <span className="text-3xl font-semibold tracking-tight text-foreground">
                  €199
                </span>
                <span className="text-sm text-muted-foreground"> / month (mock)</span>
              </p>
            </CardHeader>
            <CardContent>
              <ul className="flex flex-col gap-3">
                {included.map((line) => (
                  <li key={line} className="flex items-start gap-2 text-sm text-foreground/90">
                    <Check
                      className="mt-0.5 size-4 shrink-0 text-primary"
                      strokeWidth={2}
                      aria-hidden
                    />
                    {line}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="flex flex-col border-t border-border/60 bg-muted/20 sm:flex-row sm:justify-stretch">
              <Link
                href={hrefLoginNext("/onboarding")}
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "w-full transition-all duration-200 hover:opacity-95"
                )}
              >
                Start with onboarding
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
