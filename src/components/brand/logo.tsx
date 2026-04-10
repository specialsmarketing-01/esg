import Link from "next/link";
import { Leaf } from "lucide-react";

import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  iconClassName?: string;
  showWordmark?: boolean;
  href?: string;
};

export function Logo({
  className,
  iconClassName,
  showWordmark = true,
  href = "/",
}: LogoProps) {
  return (
    <Link
      href={href}
      className="rounded-md outline-none transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
    >
      <span
        className={cn(
          "inline-flex items-center gap-2 font-semibold tracking-tight text-foreground",
          className
        )}
      >
        <span
          className={cn(
            "flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm transition-transform duration-200 hover:scale-[1.02]",
            iconClassName
          )}
        >
          <Leaf className="size-4" strokeWidth={2.25} aria-hidden />
        </span>
        {showWordmark && (
          <span className="text-base sm:text-lg">
            ESG<span className="text-primary">ESGsimplify</span>
          </span>
        )}
      </span>
    </Link>
  );
}
