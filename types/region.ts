export interface RegionResponse {
  id: number;
  name_en: string;
  name_mm: string;
  slug: string;
}

export interface TownshipResponse extends RegionResponse {
  region_id: number;
}

export interface RegionOption {
  id: number;
  nameEn: string;
  nameMm: string;
}

export interface TownshipOption extends RegionOption {
  regionId: number;
}

export interface TownshipFilterParams {
  region_id?: number;
}

export type LocationListResult<T> = T[] | { data: T[] };

export interface LocationSelectProps {
  value?: number;
  onValueChange: (value: number | undefined) => void;
  disabled?: boolean;
}
