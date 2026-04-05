import Link from "next/link";

import { SectionTitle } from "@/components/primitives/typography";
import { buttonVariants } from "@/components/ui/button-variants";
import { design } from "@/lib/design-tokens";
import { hrefLoginNext } from "@/lib/routes";
import { cn } from "@/lib/utils";

export function LandingCtaSection() {
  return (
    <section
      id="cta"
      className={cn(
        "scroll-mt-20 border-t border-border/40 bg-gradient-to-b from-secondary/30 via-background to-muted/20",
        design.section.y
      )}
    >
      <div className={design.page.marketingNarrow}>
        <SectionTitle>Start your ESG journey today</SectionTitle>
        <div className="mt-8 flex flex-col items-center gap-4 sm:mt-10">
          <Link
            href={hrefLoginNext("/upload")}
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-11 min-w-[12rem] px-8 shadow-soft transition-all duration-200 hover:shadow-soft-lg"
            )}
          >
            Upload Your Documents
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-primary underline-offset-4 transition-colors duration-200 hover:text-primary/80 hover:underline"
          >
            Book a Demo
          </Link>
        </div>
      </div>
    </section>
  );
}
