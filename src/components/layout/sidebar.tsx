"use client";

import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { FileText, FolderOpen, LayoutDashboard, Settings } from "lucide-react";

import { cn } from "@/lib/utils";
import { design } from "@/lib/design-tokens";

export type SidebarNavItem = {
  href: string;
  label: string;
  icon: LucideIcon;
};

export const dashboardSidebarItems: readonly SidebarNavItem[] = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/upload", label: "Documents", icon: FolderOpen },
  { href: "#", label: "Reports", icon: FileText },
  { href: "#", label: "Settings", icon: Settings },
];

type SidebarProps = {
  children: ReactNode;
  className?: string;
};

/** Desktop-only column; pair with mobile sheet using the same `children` nav. */
export function Sidebar({ children, className }: SidebarProps) {
  return (
    <aside className={cn(design.sidebar.root, className)}>{children}</aside>
  );
}

type SidebarNavProps = {
  items?: readonly SidebarNavItem[];
  onNavigate?: () => void;
  className?: string;
  "aria-label"?: string;
};

export function SidebarNav({
  items = dashboardSidebarItems,
  onNavigate,
  className,
  "aria-label": ariaLabel = "Main navigation",
}: SidebarNavProps) {
  const pathname = usePathname();

  return (
    <nav className={cn("flex flex-col gap-1", className)} aria-label={ariaLabel}>
      {items.map(({ href, label, icon: Icon }) => {
        const active =
          href !== "#" &&
          (pathname === href || pathname.startsWith(`${href}/`));
        return (
          <Link
            key={label}
            href={href}
            onClick={onNavigate}
            className={cn(
              design.sidebar.navLink,
              active ? design.sidebar.navLinkActive : design.sidebar.navLinkIdle
            )}
          >
            <Icon className="size-4 shrink-0 opacity-90" strokeWidth={1.75} />
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
