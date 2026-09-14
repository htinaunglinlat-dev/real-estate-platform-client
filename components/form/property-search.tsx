"use client";

import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { usePropertyFilters } from "@/hooks/use-property-filters";
import { serializePropertySearch } from "@/lib/query/property-search-params";
import { PropertySearchInput } from "@/components/input/property-search-input";
import { PriceSelect } from "@/components/select/price-select";
import { ListingTypeSelect } from "@/components/select/listing-type-select";
import { PropertyTypeSelect } from "@/components/select/property-type-select";
import { RegionAndTownshipSelect } from "@/components/select/region-and-township-select";
import { Button } from "@/components/ui/button";

export function PropertySearch() {
  const router = useRouter();
  const [filters, setFilters] = usePropertyFilters();

  function search(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Read the input directly so submitting before the debounce includes the latest text.
    const formData = new FormData(event.currentTarget);
    router.push(
      serializePropertySearch("/properties", {
        ...filters,
        page: null,
        search: String(formData.get("search") ?? "").trim() || null,
      }),
    );
  }

  return (
    <form onSubmit={search} className="grid gap-2 rounded border bg-card p-3 text-card-foreground shadow-xl shadow-black/10">
      <div className="grid items-start gap-2 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
        <PropertySearchInput value={filters.search ?? ""} onValueChange={(search) => void setFilters({ search: search || undefined })} />
        <ListingTypeSelect value={filters.listing_type} onValueChange={(listing_type) => void setFilters({ listing_type })} />
        <RegionAndTownshipSelect filters={filters} onChange={setFilters} />
      </div>
      <div className="grid items-start gap-2 sm:grid-cols-2 lg:grid-cols-4">
        <PropertyTypeSelect value={filters.property_type} onValueChange={(property_type) => void setFilters({ property_type })} />
        <PriceSelect
          bound="min"
          value={filters.min_price_lakhs}
          onValueChange={(min_price_lakhs) => void setFilters({
            min_price_lakhs,
            max_price_lakhs: min_price_lakhs !== undefined && filters.max_price_lakhs !== undefined && min_price_lakhs > filters.max_price_lakhs
              ? undefined
              : filters.max_price_lakhs,
          })}
        />
        <PriceSelect bound="max" value={filters.max_price_lakhs} min={filters.min_price_lakhs ?? 0} onValueChange={(max_price_lakhs) => void setFilters({ max_price_lakhs })} />
        <Button type="submit" className="h-12 rounded px-6"><Search aria-hidden="true" />Search</Button>
      </div>
    </form>
  );
}
