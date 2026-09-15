import type { Metadata } from "next";
import { ArticlesExplorer } from "@/components/article/articles-explorer";
import { mockArticles } from "@/lib/data/mock-articles";

export const metadata: Metadata = {
  title: "Articles | Haven",
  description: "Myanmar-language guides to land types, property documents, site visits, and buying preparation.",
};

export default function ArticlesPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-16">
      <header className="mb-10 max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-wider text-primary">Haven Journal</p>
        <h1 className="mt-3 text-4xl sm:text-5xl">Know more. Choose well.</h1>
        <p className="mt-5 leading-7 text-muted-foreground">Explore practical guides to buying land and understanding property in Myanmar. Written in Myanmar, made for thoughtful decisions.</p>
      </header>
      <ArticlesExplorer posts={mockArticles} />
    </div>
  );
}
