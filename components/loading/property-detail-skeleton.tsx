import { Skeleton } from "@/components/ui/skeleton";

export function PropertyDetailSkeleton() {
  return <div role="status" aria-label="Fetching property details" className="space-y-6"><Skeleton className="h-10 w-3/4" /><Skeleton className="h-5 w-1/2" /><div className="grid gap-8 lg:grid-cols-[2fr_1fr]"><Skeleton className="aspect-video rounded-2xl" /><div className="space-y-4"><Skeleton className="h-12 w-2/3" /><Skeleton className="h-32 w-full" /><Skeleton className="h-10 w-full" /></div></div><Skeleton className="h-32 w-full" /></div>;
}
