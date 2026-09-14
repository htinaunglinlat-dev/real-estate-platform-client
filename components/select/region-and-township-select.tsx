"use client";

import { RegionSelect } from "@/components/select/region-select";
import { TownshipSelect } from "@/components/select/township-select";
import type { PropertyFilterParams } from "@/types/property";

interface RegionAndTownshipSelectProps {
  filters: Pick<PropertyFilterParams, "region_id" | "township_id">;
  onChange: (filters: Pick<PropertyFilterParams, "region_id" | "township_id">) => void;
}

export function RegionAndTownshipSelect({ filters, onChange }: RegionAndTownshipSelectProps) {
  return (
    <>
      <RegionSelect
        value={filters.region_id}
        onValueChange={(region_id) => onChange({ region_id, township_id: undefined })}
      />
      <TownshipSelect
        regionId={filters.region_id}
        value={filters.township_id}
        onValueChange={(township_id) => onChange({ township_id })}
      />
    </>
  );
}
