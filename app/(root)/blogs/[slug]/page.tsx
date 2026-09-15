import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleDetail } from "@/components/article/article-detail";
import { ArticlesSection } from "@/components/article/articles-section";
import { mockArticles } from "@/lib/data/mock-articles";

export function generateStaticParams() {
  return mockArticles.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = mockArticles.find((article) => article.slug === slug);
  return { title: post ? `${post.title} | Haven` : "Article not found | Haven", description: post?.excerpt };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = mockArticles.find((article) => article.slug === slug);
  if (!post) notFound();
  const related = mockArticles.filter((article) => article.id !== post.id).sort((a, b) => Number(b.category === post.category) - Number(a.category === post.category)).slice(0, 3);

  return (
    <>
      <ArticleDetail post={post} />
      <div className="border-t bg-muted/30"><ArticlesSection posts={related} title="Keep exploring" /></div>
    </>
  );
}
