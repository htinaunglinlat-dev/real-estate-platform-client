import { Skeleton } from "@/components/ui/skeleton";
export function PropertyCardSkeleton() {
  return (
    <div
      aria-label="အိမ်ခြံမြေစာရင်း ရယူနေပါသည်"
      className="overflow-hidden rounded-[1.4rem] border bg-surface"
    >
      <Skeleton className="aspect-[4/3] bg-muted" />
      <div className="space-y-4 p-5">
        <Skeleton className="h-3 w-20 rounded bg-muted" />
        <Skeleton className="h-6 w-4/5 rounded bg-muted" />
        <Skeleton className="h-4 w-2/3 rounded bg-muted" />
        <div className="h-10 border-t pt-4">
          <Skeleton className="h-4 w-1/2 rounded bg-muted" />
        </div>
      </div>
    </div>
  );
}
