export interface MyanmarRegion {
  id: number;
  pcode: string;
  nameEn: string;
  nameMm: string;
}

export interface MyanmarTownship extends MyanmarRegion {
  regionId: number;
}
