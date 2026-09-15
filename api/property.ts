import { isAxiosError } from "axios";
import { apiClient } from "@/api/axios-instance";
import type {
  Property,
  PropertyFilterParams,
  PropertyListResult,
  PropertyListResponse,
  PropertyResponse,
  PropertyDetailResponse,
  ListingType,
  PropertyType,
  PropertyStatus,
} from "@/types/property";

function numberOrUndefined(value: unknown): number | undefined {
  if (value == null || value === "" || typeof value === "boolean")
    return undefined;
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : undefined;
}

export async function getProperties(
  filters: PropertyFilterParams = {},
): Promise<PropertyListResult> {
  const response = await apiClient.get<PropertyListResponse | null>(
    "/properties",
    { params: filters },
  );
  const data = Array.isArray(response.data?.data)
    ? response.data.data
        .filter((item): item is PropertyResponse => item != null)
        .map(mapProperty)
    : [];
  const meta = response.data?.meta;
  return {
    data,
    total: numberOrUndefined(meta?.total) ?? data.length,
    meta: {
      total: numberOrUndefined(meta?.total) ?? data.length,
      page: Math.max(1, numberOrUndefined(meta?.page) ?? filters.page ?? 1),
      limit: Math.max(1, numberOrUndefined(meta?.limit) ?? filters.limit ?? 10),
      total_page: Math.max(
        1,
        numberOrUndefined(meta?.total_page) ??
          Math.ceil(
            (numberOrUndefined(meta?.total) ?? data.length) /
              (filters.limit || 10),
          ),
      ),
    },
  };
}

export async function getProperty(slug: string): Promise<Property | null> {
  try {
    const response = await apiClient.get<PropertyDetailResponse | null>(
      `/properties/${encodeURIComponent(slug)}`,
    );
    return response.data?.data ? mapProperty(response.data.data) : null;
  } catch (error) {
    if (isAxiosError(error) && error.response?.status === 404) return null;
    throw error;
  }
}

function mapProperty(property: PropertyResponse): Property {
  const priceLakhs = numberOrUndefined(property?.price_lakhs);
  const mapLocation = (location: PropertyResponse["region"]) => ({
    id: location?.id ?? 0,
    nameEn: location?.name_en ?? "",
    nameMm: location?.name_mm ?? "",
    slug: location?.slug ?? "",
  });
  return {
    id: property?.id ?? undefined,
    createdByAdminId: property?.created_by_admin_id ?? undefined,
    regionId: property?.region_id ?? undefined,
    townshipId: property?.township_id ?? undefined,
    localArea: property?.local_area,
    code: property?.code ?? undefined,
    title: property?.title || "Untitled property",
    subtitle: property?.subtitle,
    slug: property?.slug || undefined,
    description: property?.description ?? undefined,
    listingType: property?.listing_type?.toLowerCase() as
      | ListingType
      | undefined,
    propertyType: property?.property_type?.toLowerCase() as
      | PropertyType
      | undefined,
    status: property?.status?.toLowerCase() as PropertyStatus | undefined,
    price: priceLakhs === undefined ? undefined : priceLakhs * 100_000,
    currency: "MMK",
    priceType:
      property?.price_label?.toLowerCase() === "negotiable"
        ? "negotiable"
        : "fixed",
    priceLabel: property?.price_label,
    propertySize: property?.property_size,
    propertyFeatures: property?.property_features,
    street: property?.street ?? undefined,
    landmark: property?.landmark ?? undefined,
    addressDetail: property?.address_detail ?? undefined,
    latitude: numberOrUndefined(property?.latitude),
    longitude: numberOrUndefined(property?.longitude),
    contactPhone: property?.contact_phone ?? undefined,
    contactViber: property?.contact_viber ?? undefined,
    contactTelegram: property?.contact_telegram ?? undefined,
    isFeatured: property?.is_featured ?? false,
    viewCount: property?.view_count ?? undefined,
    publishedAt: property?.published_at ?? undefined,
    createdAt: property?.created_at ?? undefined,
    updatedAt: property?.updated_at ?? undefined,
    details: {},
    location: {
      region: mapLocation(property?.region),
      township: mapLocation(property?.township),
    },
    images: (Array.isArray(property?.images) ? property.images : [])
      .flatMap((image, index) =>
        image?.image_url
          ? [
              {
                id: image?.id ?? index,
                propertyId: image?.property_id ?? property?.id ?? 0,
                imageUrl: image.image_url,
                sortOrder: image?.sort_order ?? index,
                isCover: image?.is_cover ?? false,
              },
            ]
          : [],
      )
      .sort(
        (a, b) =>
          Number(b.isCover) - Number(a.isCover) || a.sortOrder - b.sortOrder,
      ),
    amenities: (Array.isArray(property?.amenities)
      ? property.amenities
      : []
    ).flatMap((amenity, index) =>
      amenity?.name
        ? [
            {
              id: amenity?.id ?? index,
              name: amenity.name,
              slug: amenity?.slug ?? "",
            },
          ]
        : [],
    ),
  };
}
