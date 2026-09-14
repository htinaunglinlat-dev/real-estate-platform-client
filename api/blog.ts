import { apiClient } from "@/api/axios-instance";
import type { BlogPost } from "@/types/blog";

export async function getBlogs(): Promise<BlogPost[]> {
  const response = await apiClient.get<BlogPost[]>("/blogs");
  return response.data;
}

export async function getBlog(slug: string): Promise<BlogPost | null> {
  const response = await apiClient.get<BlogPost>(`/blogs/${slug}`);
  return response.data;
}
