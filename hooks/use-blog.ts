"use client";

import { useQuery } from "@tanstack/react-query";
import { getBlog, getBlogs } from "@/api/blog";

export function useBlogs() {
  return useQuery({ queryKey: ["blogs"], queryFn: getBlogs });
}

export function useBlog(slug: string) {
  return useQuery({
    queryKey: ["blogs", slug],
    queryFn: () => getBlog(slug),
    enabled: Boolean(slug),
  });
}
