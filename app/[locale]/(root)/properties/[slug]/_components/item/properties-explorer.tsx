"use client";

import { useEffect } from "react";
import { useProperties } from "@/hooks/use-property";
import { usePropertyFilters } from "@/hooks/use-property-filters";
import { PropertySearch } from "@/components/form/property-search";
import { PropertyCard } from "@/components/card/property-card";
import { PropertyCardSkeleton } from "@/components/loading/property-card-skeleton";
import { PropertyPagination } from "@/components/common/property-pagination";
import { Button } from "@/components/ui/button";

export function PropertiesExplorer() {
  const [filters, setFilters] = usePropertyFilters();
  const page = Math.max(1, filters.page ?? 1);
  const limit = Math.min(100, Math.max(1, filters.limit ?? 10));
  const query = useProperties({ ...filters, page, limit });
  const totalPages = Math.max(1, query.data?.meta?.total_page ?? 1);
  const outOfRange = !!query.data && page > totalPages;
  useEffect(() => {
    if (outOfRange) void setFilters({ page: totalPages });
  }, [outOfRange, totalPages, setFilters]);
  const pagination = {
    page,
    totalPages: Math.max(page, totalPages),
    disabled: query.isFetching,
    onPageChange: (next: number) => {
      void setFilters({ page: next });
    },
  };
  return (
    <>
      <PropertySearch />
      {query.isError ? (
        <div role="alert" className="my-8 rounded-xl border p-6">
          <p>Could not fetch properties.</p>
          <Button className="mt-3" onClick={() => void query.refetch()}>
            Retry
          </Button>
        </div>
      ) : (
        <>
          <PropertyPagination
            {...pagination}
            label="Properties pagination, top"
          />
          <section aria-label="Property results" aria-busy={query.isFetching}>
            {query.isPending || outOfRange ? (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {Array.from({ length: 6 }, (_, index) => (
                  <PropertyCardSkeleton key={index} />
                ))}
              </div>
            ) : query.data?.data?.length ? (
              <>
                <p className="mb-5 text-sm text-muted-foreground">
                  {query.data?.total ?? 0} properties found
                </p>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {query.data.data.map((property, index) => (
                    <PropertyCard
                      key={property?.id ?? property?.slug ?? index}
                      property={property}
                    />
                  ))}
                </div>
              </>
            ) : (
              <div className="rounded-xl border p-10 text-center">
                <h2 className="text-xl font-semibold">No properties found</h2>
                <p className="mt-2 text-muted-foreground">
                  Try a different location, price, or property type.
                </p>
              </div>
            )}
          </section>
          <PropertyPagination
            {...pagination}
            label="Properties pagination, bottom"
          />
        </>
      )}
    </>
  );
}
