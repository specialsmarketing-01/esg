import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * Shimmer loading placeholder — respects reduced motion (pulse only).
 */
function Skeleton({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn(
        "relative overflow-hidden rounded-lg bg-muted/70",
        "after:pointer-events-none after:absolute after:inset-0 after:translate-x-[-100%]",
        "motion-safe:after:animate-[skeleton-shimmer_2.2s_ease-in-out_infinite]",
        "after:bg-gradient-to-r after:from-transparent after:via-white/45 after:to-transparent",
        "dark:after:via-white/12",
        "motion-reduce:animate-pulse motion-reduce:after:hidden",
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };
