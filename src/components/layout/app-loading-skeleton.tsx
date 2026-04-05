import { Skeleton } from "@/components/ui/skeleton";
import { design } from "@/lib/design-tokens";
import { cn } from "@/lib/utils";

/**
 * Full-shell placeholder while auth/session is resolved (static demo).
 */
export function AppLoadingSkeleton() {
  return (
    <div
      className={cn(
        design.page.dashboardShell,
        "motion-safe:animate-in motion-safe:fade-in motion-safe:duration-300"
      )}
    >
      <aside
        className="hidden w-56 shrink-0 flex-col gap-6 border-r border-border/60 bg-card/80 py-6 pl-4 pr-3 backdrop-blur-sm lg:flex xl:w-60"
        aria-hidden
      >
        <Skeleton className="mx-2 h-8 w-[7.5rem] rounded-lg" />
        <div className="mt-4 flex flex-col gap-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} className="h-10 w-full rounded-xl" />
          ))}
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <div className="border-b border-border/60 bg-card/90 px-4 py-3 backdrop-blur-md sm:px-6">
          <div className="mx-auto flex max-w-7xl items-center gap-3">
            <Skeleton className="hidden h-9 flex-1 rounded-xl md:block md:max-w-md lg:max-w-lg" />
            <Skeleton className="size-8 shrink-0 rounded-lg md:hidden" />
            <div className="ml-auto flex items-center gap-2">
              <Skeleton className="size-8 rounded-lg" />
              <Skeleton className="size-9 rounded-full" />
              <Skeleton className="hidden h-7 w-20 rounded-lg sm:block" />
            </div>
          </div>
        </div>

        <main className={cn(design.page.dashboardMain, "space-y-6")}>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="space-y-2">
              <Skeleton className="h-8 w-40 sm:w-52" />
              <Skeleton className="h-4 w-full max-w-md" />
            </div>
            <div className="flex gap-2">
              <Skeleton className="h-9 w-36 rounded-xl" />
              <Skeleton className="h-9 w-32 rounded-xl" />
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-12 lg:gap-6">
            <div className="space-y-4 rounded-2xl border border-border/60 bg-card p-6 shadow-soft lg:col-span-5 xl:col-span-4">
              <Skeleton className="h-5 w-36" />
              <Skeleton className="h-4 w-full max-w-xs" />
              <Skeleton className="mx-auto mt-4 size-44 rounded-full sm:size-48" />
            </div>
            <div className="grid gap-4 sm:grid-cols-3 lg:col-span-7 xl:col-span-8">
              {Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className="space-y-3 rounded-2xl border border-border/60 bg-card p-5 shadow-soft"
                >
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-9 w-16" />
                  <Skeleton className="h-3 w-full" />
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-12">
            <Skeleton className="h-64 rounded-2xl border border-border/60 lg:col-span-8" />
            <Skeleton className="h-64 rounded-2xl border border-border/60 lg:col-span-4" />
          </div>

          <Skeleton className="h-48 w-full rounded-2xl border border-border/60" />
        </main>
      </div>
    </div>
  );
}
