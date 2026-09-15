import { apiClient } from "@/api/axios-instance";
import type {
  LocationListResult,
  RegionOption,
  RegionResponse,
  TownshipFilterParams,
  TownshipOption,
  TownshipResponse,
} from "@/types/region";

export async function getRegions(): Promise<RegionOption[]> {
  const response =
    await apiClient.get<LocationListResult<RegionResponse>>("/regions");
  const regions = Array.isArray(response.data) ? response.data : response.data.data;

  return regions.map((region) => ({
    id: region.id,
    nameEn: region.name_en,
    nameMm: region.name_mm,
  }));
}

export async function getTownships(
  filters: TownshipFilterParams = {},
): Promise<TownshipOption[]> {
  const response = await apiClient.get<LocationListResult<TownshipResponse>>(
    "/townships",
    {
      params: filters,
    },
  );
  const townships = Array.isArray(response.data) ? response.data : response.data.data;

  return townships.map((township) => ({
    id: township.id,
    regionId: township.region_id,
    nameEn: township.name_en,
    nameMm: township.name_mm,
  }));
}
