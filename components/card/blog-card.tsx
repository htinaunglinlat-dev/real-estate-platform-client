import { ArrowUpRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { ArticleCover } from "@/app/[locale]/(root)/blogs/[slug]/_components/section/article-cover";
import { ArticleMeta } from "@/app/[locale]/(root)/blogs/[slug]/_components/section/article-meta";
import type { BlogPost } from "@/types/blog";

export function BlogCard({ post }: { post: BlogPost }) {
  const t = useTranslations("Blogs");
  return (
    <article className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-border/80 bg-card transition-shadow hover:shadow-md">
      <Link
        href={`/blogs/${post.slug}`}
        aria-label={t("readArticleLabel", { title: post.title })}
        tabIndex={-1}
      >
        <ArticleCover category={t.has(`categories.${post.category}`)
            ? t(`categories.${post.category}`)
            : post.category} />
      </Link>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-primary">
          {post.category}
        </p>
        <h3 lang="my" className="mt-3 text-lg leading-loose">
          <Link href={`/blogs/${post.slug}`} className="hover:text-primary">
            {post.title}
          </Link>
        </h3>
        <p
          lang="my"
          className="mt-3 line-clamp-3 text-sm leading-7 text-muted-foreground"
        >
          {post.excerpt}
        </p>
        <div className="mt-auto pt-5">
          <ArticleMeta post={post} />
        </div>
        <Link
          href={`/blogs/${post.slug}`}
          aria-label={t("readArticleLabel", { title: post.title })}
          className="mt-5 flex min-h-11 items-center justify-between gap-2 border-t pt-3 text-sm font-semibold text-primary"
        >
          {t("readArticle")} <ArrowUpRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
