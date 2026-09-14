"use client";

import { useQuery } from "@tanstack/react-query";
import { getRegions, getTownships } from "@/api/region";

export function useRegions() {
  return useQuery({
    queryKey: ["regions"],
    queryFn: getRegions,
  });
}

export function useTownships(regionId?: number) {
  return useQuery({
    queryKey: ["townships", { region_id: regionId }],
    queryFn: () => getTownships({ region_id: regionId }),
    enabled: regionId !== undefined,
  });
}
