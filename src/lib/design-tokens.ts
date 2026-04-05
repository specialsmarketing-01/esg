/**
 * Shared layout and typography classes for consistent spacing and rhythm
 * across marketing, app chrome, and dashboard surfaces.
 */
export const design = {
  header: {
    surface:
      "sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md supports-backdrop-filter:bg-background/80",
    surfaceElevated: "sticky top-0 z-30 border-b border-border/60 bg-background/90 backdrop-blur-md",
    inner:
      "mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8",
    innerTall: "h-16 sm:h-[4.5rem]",
    innerShort: "h-14 sm:h-16",
    toolbar:
      "sticky top-0 z-20 border-b border-border/50 bg-gradient-to-r from-background/90 via-card/85 to-background/90 px-4 py-3 backdrop-blur-md sm:px-6",
  },
  sidebar: {
    root: "hidden w-56 shrink-0 flex-col border-r border-border/50 bg-gradient-to-b from-card via-card to-secondary/25 py-6 pl-4 pr-3 shadow-sm backdrop-blur-sm lg:flex xl:w-60",
    navLink:
      "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-[color,background-color,box-shadow,transform] duration-200 ease-out motion-reduce:transition-none",
    navLinkActive:
      "bg-primary/[0.11] text-primary shadow-sm ring-1 ring-primary/15",
    navLinkIdle:
      "text-muted-foreground hover:bg-muted/70 hover:text-foreground motion-safe:hover:translate-x-0.5",
  },
  page: {
    marketing: "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8",
    marketingNarrow: "mx-auto w-full max-w-3xl px-4 text-center sm:px-6 lg:px-8",
    marketingWide: "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8",
    dashboardMain:
      "flex-1 px-4 py-6 sm:px-6 sm:py-8 lg:px-10 lg:py-10",
    appShell: "flex min-h-screen flex-col bg-muted/20",
    appMain: "flex-1",
    dashboardShell: "flex min-h-screen bg-muted/25",
    introBand: "border-t border-border/40 bg-muted/15",
    introInner: "mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8",
    centeredNarrow: "mx-auto w-full max-w-lg px-4 py-6 sm:px-6 sm:py-10 lg:py-12",
    centeredMd: "mx-auto w-full max-w-3xl px-4 py-6 sm:py-8 lg:py-10",
    centeredLg:
      "mx-auto flex w-full max-w-md flex-col items-center px-4 py-10 sm:py-16",
  },
  section: {
    y: "py-16 sm:py-20 lg:py-24",
    yCompact: "py-16 sm:py-20",
    heroY: "py-16 sm:py-20 lg:py-24",
  },
  card: {
    elevated: "border-border/50 shadow-soft transition-shadow duration-300 ease-out hover:shadow-soft-lg",
    elevatedLg:
      "border-border/50 shadow-soft-lg transition-shadow duration-300 ease-out hover:shadow-premium-hover",
  },
  marketing: {
    featureCard:
      "flex flex-col rounded-2xl border border-border/50 bg-card p-6 shadow-soft transition-[border-color,box-shadow,transform] duration-300 ease-out hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-soft-lg motion-reduce:transform-none",
  },
  type: {
    display:
      "text-balance font-heading text-3xl font-semibold tracking-[-0.02em] text-foreground sm:text-4xl lg:text-[2.625rem] lg:leading-[1.12]",
    pageTitle:
      "font-heading text-2xl font-semibold tracking-[-0.015em] text-foreground sm:text-3xl",
    sectionTitle:
      "font-heading text-2xl font-semibold tracking-[-0.015em] text-foreground sm:text-3xl",
    cardTitle: "font-heading text-base font-semibold text-foreground",
    subtitle: "mt-2 text-sm text-muted-foreground sm:text-base",
    lead: "text-pretty text-base leading-[1.65] text-muted-foreground sm:text-lg sm:leading-[1.6]",
    introTitle: "text-xl font-semibold tracking-tight text-foreground sm:text-2xl",
    footerMuted: "text-sm leading-relaxed text-muted-foreground",
  },
} as const;
