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
  cityId?: number;
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
  id?: number;
  createdByAdminId?: number;
  regionId?: number;
  cityId?: number;
  townshipId?: number;
  wardId?: number;
  code?: string;
  subtitle?: string | null;
  localArea?: string | null;
  propertySize?: string | null;
  propertyFeatures?: string | null;
  priceLabel?: string | null;
  viewCount?: number;
  title?: string;
  slug?: string;
  description?: string;
  listingType?: ListingType;
  propertyType?: PropertyType;
  status?: PropertyStatus;
  price?: number;
  currency?: Currency;
  priceType?: PriceType;
  areaValue?: number;
  areaUnit?: AreaUnit;
  street?: string;
  landmark?: string;
  addressDetail?: string;
  latitude?: number;
  longitude?: number;
  contactPhone?: string;
  contactViber?: string;
  contactTelegram?: string;
  isFeatured?: boolean;
  publishedAt?: string;
  createdAt?: string;
  updatedAt?: string;
  details?: PropertyDetails;
  images?: PropertyImage[];
  amenities?: Amenity[];
  location?: {
    region: Region;
    city?: City;
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
  meta?: PropertyListResponse["meta"];
}

interface PropertyResponseFields {
  id: number;
  created_by_admin_id: number;
  region_id: number;
  township_id: number;
  local_area: string | null;
  code: string;
  title: string;
  subtitle: string | null;
  slug: string;
  description: string;
  listing_type: Uppercase<ListingType>;
  property_type: Uppercase<PropertyType>;
  status: Uppercase<PropertyStatus>;
  price_lakhs: string;
  price_label: string | null;
  property_size: string | null;
  property_features: string | null;
  street: string;
  landmark: string | null;
  address_detail: string;
  latitude: string | null;
  longitude: string | null;
  contact_phone: string;
  contact_viber: string | null;
  contact_telegram: string | null;
  is_featured: boolean;
  view_count: number;
  published_at: string;
  created_at: string;
  updated_at: string;
  region: import("@/types/region").RegionResponse;
  township: import("@/types/region").RegionResponse;
  images: {
    id: number;
    property_id: number;
    image_url: string;
    sort_order: number;
    is_cover: boolean;
  }[];
  amenities: Amenity[];
}

export interface PropertyListResponse {
  status_code: number;
  message: string;
  data?: (PropertyResponse | null)[] | null;
  meta?: {
    total: number;
    page: number;
    limit: number;
    total_page: number;
  };
}

// Backend fields and nested records may be absent or explicitly null.
type NullableFields<T> = T extends (infer U)[]
  ? (NullableFields<U> | null)[]
  : T extends object
    ? { [K in keyof T]?: NullableFields<T[K]> | null }
    : T;

export type PropertyResponse = NullableFields<PropertyResponseFields>;
export interface PropertyDetailResponse {
  data?: PropertyResponse | null;
}
