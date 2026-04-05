"use client";

import type { ReactNode } from "react";
import { useState } from "react";
import { Menu } from "lucide-react";

import { Logo } from "@/components/brand/logo";
import { DashboardHeader } from "@/components/layout/dashboard-header";
import { Sidebar, SidebarNav } from "@/components/layout/sidebar";
import { buttonVariants } from "@/components/ui/button-variants";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { design } from "@/lib/design-tokens";
import { cn } from "@/lib/utils";

export function DashboardShell({ children }: { children: ReactNode }) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className={design.page.dashboardShell}>
      <Sidebar>
        <Logo className="px-2" />
        <SidebarNav className="mt-8" />
      </Sidebar>

      <div className="flex min-w-0 flex-1 flex-col">
        <div className="border-b border-border/50 bg-card/95 backdrop-blur-md lg:hidden">
          <div
            className={cn(
              design.header.inner,
              design.header.innerShort,
              "!max-w-none px-4 sm:px-6"
            )}
          >
            <Logo />
            <Sheet open={mobileNavOpen} onOpenChange={setMobileNavOpen}>
              <SheetTrigger
                className={cn(
                  buttonVariants({ variant: "outline", size: "icon-sm" }),
                  "shrink-0"
                )}
                aria-label="Open menu"
              >
                <Menu className="size-4" />
              </SheetTrigger>
              <SheetContent side="left" className="w-[min(100%,18rem)]">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <SidebarNav
                  className="mt-6"
                  aria-label="Mobile navigation"
                  onNavigate={() => setMobileNavOpen(false)}
                />
              </SheetContent>
            </Sheet>
          </div>
        </div>

        <DashboardHeader />

        <main className={design.page.dashboardMain}>{children}</main>
      </div>
    </div>
  );
}
