import { apiClient } from "@/api/axios-instance";
import type {
  Property,
  PropertyFilterParams,
  PropertyListResult,
} from "@/types/property";

export async function getProperties(
  filters: PropertyFilterParams = {},
): Promise<PropertyListResult> {
  const response = await apiClient.get<PropertyListResult>("/properties", {
    params: filters,
  });
  return response.data;
}

export async function getProperty(slug: string): Promise<Property | null> {
  const response = await apiClient.get<Property>(`/properties/${slug}`);
  return response.data;
}
