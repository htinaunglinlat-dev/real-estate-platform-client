"use client";

import { useQuery } from "@tanstack/react-query";
import { getProperties, getProperty } from "@/api/property";
import type { PropertyFilterParams } from "@/types/property";

export const propertyKeys = {
  all: ["properties"] as const,
  list: (filters: PropertyFilterParams) => [...propertyKeys.all, "list", filters] as const,
  detail: (slug: string) => [...propertyKeys.all, "detail", slug] as const,
};

export function useProperties(filters: PropertyFilterParams = {}) {
  return useQuery({
    queryKey: propertyKeys.list(filters),
    queryFn: () => getProperties(filters),
  });
}

export function useProperty(slug: string) {
  return useQuery({
    queryKey: propertyKeys.detail(slug),
    queryFn: () => getProperty(slug),
    enabled: Boolean(slug),
  });
}
