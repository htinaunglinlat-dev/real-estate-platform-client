"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { ArticleGrid } from "@/components/article/article-grid";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { BlogPost } from "@/types/blog";

export function ArticlesExplorer({ posts }: { posts: BlogPost[] }) {
  const [category, setCategory] = useState("All articles");
  const [search, setSearch] = useState("");
  const categories = ["All articles", ...new Set(posts.map((post) => post.category))];
  const query = search.trim().toLowerCase();
  const filtered = posts.filter((post) =>
    (category === "All articles" || post.category === category) &&
    `${post.title} ${post.excerpt} ${post.category}`.toLowerCase().includes(query),
  );

  return (
    <div>
      <div className="mb-8 flex flex-col gap-5 border-b pb-6">
        <label className="flex w-full items-center gap-3 rounded-xl border bg-card px-4 focus-within:ring-2 focus-within:ring-ring sm:max-w-md">
          <Search className="size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
          <span className="sr-only">Search articles</span>
          <Input type="search" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search articles" className="h-12 min-w-0 flex-1 border-0 bg-transparent px-0 text-sm focus-visible:ring-0 dark:bg-transparent" />
        </label>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Article categories">
          {categories.map((item) => (
            <Button key={item} variant={category === item ? "default" : "outline"} className="min-h-11 rounded-full px-4" aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</Button>
          ))}
        </div>
      </div>
      <p role="status" className="mb-5 text-sm text-muted-foreground">{filtered.length} {filtered.length === 1 ? "article" : "articles"}</p>
      {filtered.length > 0 ? <ArticleGrid posts={filtered} /> : (
        <div className="rounded-2xl border border-dashed py-16 text-center">
          <h2 className="text-xl">No articles found</h2>
          <p className="mt-2 text-sm text-muted-foreground">Try another keyword or explore all topics.</p>
          <Button variant="outline" className="mt-5 h-11" onClick={() => { setSearch(""); setCategory("All articles"); }}>Clear filters</Button>
        </div>
      )}
    </div>
  );
}
