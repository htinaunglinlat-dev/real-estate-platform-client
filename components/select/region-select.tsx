"use client";

import { useRegions } from "@/hooks/use-region";
import { LocationSelect } from "@/components/select/location-select";
import type { LocationSelectProps } from "@/types/region";

export function RegionSelect(props: LocationSelectProps) {
  const query = useRegions();
  return (
    <LocationSelect
      {...props}
      label="Region / State"
      name="region_id"
      options={query.data ?? []}
      isLoading={query.isPending}
      isError={query.isError}
      onRetry={() => void query.refetch()}
      placeholder="All regions / states"
      emptyMessage="No regions available"
    />
  );
}
