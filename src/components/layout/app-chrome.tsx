import type { ReactNode } from "react";
import Link from "next/link";

import { Logo } from "@/components/brand/logo";
import { Header, HeaderMain } from "@/components/layout/header";
import { buttonVariants } from "@/components/ui/button-variants";
import { design } from "@/lib/design-tokens";
import { cn } from "@/lib/utils";

type AppChromeProps = {
  children: ReactNode;
  title?: string;
  description?: string;
};

export function AppChrome({ children, title, description }: AppChromeProps) {
  return (
    <div className={design.page.appShell}>
      <Header variant="app">
        <HeaderMain size="compact">
          <Logo />
          <nav className="flex items-center gap-1 sm:gap-2" aria-label="App">
            <Link
              href="/dashboard"
              className={cn(
                buttonVariants({ variant: "ghost", size: "sm" }),
                "text-muted-foreground"
              )}
            >
              Dashboard
            </Link>
            <Link
              href="/upload"
              className={cn(
                buttonVariants({ variant: "ghost", size: "sm" }),
                "text-muted-foreground"
              )}
            >
              Upload
            </Link>
          </nav>
        </HeaderMain>
        {(title || description) && (
          <div className={design.page.introBand}>
            <div className={design.page.introInner}>
              {title && (
                <h1 className={design.type.introTitle}>{title}</h1>
              )}
              {description && (
                <p className={cn(design.type.subtitle, "mt-2 max-w-2xl")}>
                  {description}
                </p>
              )}
            </div>
          </div>
        )}
      </Header>
      <main className={design.page.appMain}>{children}</main>
    </div>
  );
}
