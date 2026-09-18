import { ArticlesSection } from "@/app/[locale]/(root)/blogs/[slug]/_components/articles-section";
import { mockArticles } from "@/lib/data/mock-articles";

export function HomeArticlesSection() {
  return <ArticlesSection posts={mockArticles.slice(0, 3)} />;
}
