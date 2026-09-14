import { Skeleton } from "@/components/ui/skeleton";
import { PropertyCardSkeleton } from "./property-card-skeleton";

export function PropertySearchSkeleton() {
  return (
    <div className="grid gap-4 rounded-2xl border bg-card p-5 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_auto]">
      {Array.from({ length: 4 }, (_, index) => (
        <Skeleton key={index} className="h-16 min-w-28" />
      ))}
    </div>
  );
}

export function PropertiesExplorerSkeleton() {
  return (
    <>
      <div className="grid gap-3 rounded-[1.25rem] border bg-surface p-3 lg:grid-cols-[minmax(0,1fr)_240px_240px]">
        {Array.from({ length: 3 }, (_, index) => (
          <Skeleton key={index} className="h-12 rounded-xl" />
        ))}
      </div>
      <Skeleton className="mt-7 h-5 w-32" />
      <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }, (_, index) => (
          <PropertyCardSkeleton key={index} />
        ))}
      </div>
    </>
  );
}
