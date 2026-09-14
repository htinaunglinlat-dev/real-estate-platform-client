export type ListingType = "sale" | "rent";
export type PropertyType =
  | "land"
  | "house"
  | "condo"
  | "apartment"
  | "shop"
  | "office"
  | "warehouse";
export type PropertyStatus = "draft" | "published" | "sold" | "rented" | "hidden";
export type Currency = "MMK" | "USD";
export type PriceType = "fixed" | "negotiable" | "per_month" | "per_sqft" | "per_acre";
export type AreaUnit = "sqft" | "acre" | "perch";
export type LandType = "residential" | "commercial" | "industrial" | "farmland" | "garden" | "other";
export type OwnershipType = "grant" | "permit" | "ancestral" | "farmland" | "condo_ownership" | "other";
export type LandStatus = "vacant" | "fenced" | "ready_to_build" | "with_old_house";
export type Furnishing = "furnished" | "semi_furnished" | "unfurnished";

export interface Region {
  id: number;
  nameMm: string;
  nameEn: string;
  slug: string;
}

export interface City {
  id: number;
  regionId: number;
  nameMm: string;
  nameEn: string;
  slug: string;
}

export interface Township {
  id: number;
  cityId: number;
  nameMm: string;
  nameEn: string;
  slug: string;
}

export interface Ward {
  id: number;
  townshipId: number;
  nameMm: string;
  nameEn: string;
  slug: string;
}

export interface Amenity {
  id: number;
  name: string;
  slug: string;
}

export interface PropertyImage {
  id: number;
  propertyId: number;
  imageUrl: string;
  sortOrder: number;
  isCover: boolean;
}

export interface PropertyDetails {
  landType?: LandType;
  frontage?: number;
  depth?: number;
  roadWidth?: number;
  ownershipType?: OwnershipType;
  landStatus?: LandStatus;
  bedrooms?: number;
  bathrooms?: number;
  floors?: number;
  floorNo?: number;
  totalFloors?: number;
  furnishing?: Furnishing;
  businessSuitableFor?: string;
  roadAccess?: string;
  loadingArea?: boolean;
}

export interface Property {
  id: number;
  createdByAdminId: number;
  regionId: number;
  cityId: number;
  townshipId: number;
  wardId?: number;
  title: string;
  slug: string;
  description: string;
  listingType: ListingType;
  propertyType: PropertyType;
  status: PropertyStatus;
  price: number;
  currency: Currency;
  priceType: PriceType;
  areaValue: number;
  areaUnit: AreaUnit;
  street: string;
  landmark?: string;
  addressDetail: string;
  latitude?: number;
  longitude?: number;
  contactPhone: string;
  contactViber?: string;
  contactTelegram?: string;
  isFeatured: boolean;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
  details: PropertyDetails;
  images: PropertyImage[];
  amenities: Amenity[];
  location: {
    region: Region;
    city: City;
    township: Township;
    ward?: Ward;
  };
}

export interface PropertyFilterParams {
  page?: number;
  limit?: number;
  search?: string;
  sort_direction?: "asc" | "desc";
  region_id?: number;
  township_id?: number;
  listing_type?: "SALE" | "RENT";
  property_type?: "LAND" | "HOUSE" | "CONDO" | "APARTMENT" | "SHOP" | "OFFICE" | "WAREHOUSE";
  min_price_lakhs?: number;
  max_price_lakhs?: number;
  sort_by?: "created_at" | "price_lakhs" | "view_count";
}

export interface PropertyListResult {
  data: Property[];
  total: number;
}
