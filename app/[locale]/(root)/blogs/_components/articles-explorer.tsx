"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Search } from "lucide-react";
import { ArticleGrid } from "@/app/[locale]/(root)/blogs/_components/section/article-grid";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { BlogPost } from "@/types/blog";

export function ArticlesExplorer({ posts }: { posts: BlogPost[] }) {
  const t = useTranslations("Blogs");
  const [category, setCategory] = useState<string | null>(null);
  const categoryLabel = (value: string) =>
    t.has(`categories.${value}`) ? t(`categories.${value}`) : value;
  const [search, setSearch] = useState("");
  const categories = [null, ...new Set(posts.map((post) => post.category))];
  const query = search.trim().toLowerCase();
  const filtered = posts.filter(
    (post) =>
      (category === null || post.category === category) &&
      `${post.title} ${post.excerpt} ${post.category} ${categoryLabel(post.category)}`
        .toLowerCase()
        .includes(query),
  );

  return (
    <div>
      <div className="mb-8 flex flex-col gap-5 border-b pb-6">
        <label className="flex w-full items-center gap-3 rounded-xl border bg-card px-4 focus-within:ring-2 focus-within:ring-ring sm:max-w-md">
          <Search
            className="size-4 shrink-0 text-muted-foreground"
            aria-hidden="true"
          />
          <span className="sr-only">{t("search")}</span>
          <Input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder={t("search")}
            className="h-12 min-w-0 flex-1 border-0 bg-transparent px-0 text-sm focus-visible:ring-0 dark:bg-transparent"
          />
        </label>
        <div
          className="flex flex-wrap gap-2"
          role="group"
          aria-label={t("categoriesLabel")}
        >
          {categories.map((item) => (
            <Button
              key={item ?? "all"}
              variant={category === item ? "default" : "outline"}
              className="min-h-11 rounded-full px-4"
              aria-pressed={category === item}
              onClick={() => setCategory(item)}
            >
              {item === null ? t("allArticles") : categoryLabel(item)}
            </Button>
          ))}
        </div>
      </div>
      <p role="status" className="mb-5 text-sm text-muted-foreground">
        {t("resultCount", { count: filtered.length })}
      </p>
      {filtered.length > 0 ? (
        <ArticleGrid posts={filtered} />
      ) : (
        <div className="rounded-2xl border border-dashed py-16 text-center">
          <h2 className="text-xl">{t("emptyTitle")}</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            {t("emptyDescription")}
          </p>
          <Button
            variant="outline"
            className="mt-5 h-11"
            onClick={() => {
              setSearch("");
              setCategory(null);
            }}
          >
            {t("clearFilters")}
          </Button>
        </div>
      )}
    </div>
  );
}
