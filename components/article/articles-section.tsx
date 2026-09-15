import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ArticleGrid } from "@/components/article/article-grid";
import type { BlogPost } from "@/types/blog";

export function ArticlesSection({ posts, title = "A little knowledge. A better decision." }: { posts: BlogPost[]; title?: string }) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">Haven Journal</p>
          <h2 className="mt-3 text-2xl sm:text-3xl">{title}</h2>
          <p className="mt-3 max-w-xl text-sm leading-7 text-muted-foreground">Practical reads on land, documents, and buying property in Myanmar.</p>
        </div>
        <Link href="/blogs" className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-primary">View all articles <ArrowRight className="size-4" /></Link>
      </div>
      <ArticleGrid posts={posts} />
    </section>
  );
}
