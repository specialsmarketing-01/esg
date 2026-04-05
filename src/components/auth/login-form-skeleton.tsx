import { ContentCard } from "@/components/primitives/content-card";
import { Skeleton } from "@/components/ui/skeleton";

export function LoginFormSkeleton() {
  return (
    <ContentCard
      elevation="lg"
      className="w-full max-w-md border-border/70 motion-safe:animate-in motion-safe:fade-in motion-safe:zoom-in-95 motion-safe:duration-500"
    >
      <div className="flex flex-col gap-6 p-6 sm:p-8">
        <div className="space-y-2 text-center">
          <Skeleton className="mx-auto h-8 w-32" />
          <Skeleton className="mx-auto h-4 w-64 max-w-full" />
        </div>
        <div className="flex flex-col gap-4">
          <div className="space-y-2">
            <Skeleton className="h-4 w-12" />
            <Skeleton className="h-10 w-full rounded-xl" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-10 w-full rounded-xl" />
          </div>
          <Skeleton className="mt-2 h-10 w-full rounded-xl" />
        </div>
        <Skeleton className="mx-auto h-4 w-48" />
      </div>
    </ContentCard>
  );
}
