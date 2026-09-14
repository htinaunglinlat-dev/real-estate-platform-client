import { apiClient } from "@/api/axios-instance";
import type {
  LocationListResult,
  RegionOption,
  TownshipFilterParams,
  TownshipOption,
} from "@/types/region";

export async function getRegions(): Promise<RegionOption[]> {
  const response =
    await apiClient.get<LocationListResult<RegionOption>>("/regions");
  return Array.isArray(response.data) ? response.data : response.data.data;
}

export async function getTownships(
  filters: TownshipFilterParams = {},
): Promise<TownshipOption[]> {
  const response = await apiClient.get<LocationListResult<TownshipOption>>(
    "/townships",
    {
      params: filters,
    },
  );
  return Array.isArray(response.data) ? response.data : response.data.data;
}
