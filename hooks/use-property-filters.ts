"use client";

import { useQueryStates } from "nuqs";
import { propertySearchParams } from "@/lib/query/property-search-params";
import type { PropertyFilterParams } from "@/types/property";

export function usePropertyFilters() {
  const [params, setParams] = useQueryStates(propertySearchParams, {
    history: "replace",
    shallow: true,
    scroll: false,
  });
  const filters = Object.fromEntries(
    Object.entries(params).map(([key, value]) => [key, value ?? undefined]),
  ) as PropertyFilterParams;

  function setFilters(updates: Partial<PropertyFilterParams>) {
    return setParams({
      page: null,
      ...Object.fromEntries(
        Object.entries(updates).map(([key, value]) => [key, value ?? null]),
      ),
    });
  }

  return [filters, setFilters] as const;
}
