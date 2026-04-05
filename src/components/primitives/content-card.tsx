import type { ComponentProps } from "react";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { design } from "@/lib/design-tokens";

export type ContentCardProps = ComponentProps<typeof Card> & {
  elevation?: "none" | "soft" | "lg";
};

/**
 * Opinionated Card with consistent border and shadow for product surfaces.
 */
export function ContentCard({
  className,
  elevation = "soft",
  ...props
}: ContentCardProps) {
  return (
    <Card
      className={cn(
        elevation === "soft" && design.card.elevated,
        elevation === "lg" && design.card.elevatedLg,
        className
      )}
      {...props}
    />
  );
}
