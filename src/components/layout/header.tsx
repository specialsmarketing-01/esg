import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { design } from "@/lib/design-tokens";

type HeaderProps = {
  children: ReactNode;
  className?: string;
  /** Slightly different z-index/blur for nested app layouts */
  variant?: "default" | "app";
};

/**
 * Sticky top bar shell — use with `HeaderMain` for inner max-width row.
 */
export function Header({ children, className, variant = "default" }: HeaderProps) {
  return (
    <header
      className={cn(
        variant === "app" ? design.header.surfaceElevated : design.header.surface,
        className
      )}
    >
      {children}
    </header>
  );
}

type HeaderMainProps = {
  children: ReactNode;
  className?: string;
  /** Marketing nav uses taller hit area */
  size?: "default" | "compact";
};

export function HeaderMain({ children, className, size = "default" }: HeaderMainProps) {
  return (
    <div
      className={cn(
        design.header.inner,
        size === "default" ? design.header.innerTall : design.header.innerShort,
        className
      )}
    >
      {children}
    </div>
  );
}
