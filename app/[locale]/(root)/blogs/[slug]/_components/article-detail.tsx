import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { BlogPost } from "@/types/blog";
import { ArticleCover } from "./section/article-cover";
import { ArticleMeta } from "./section/article-meta";
import { ArticleBodySection } from "./section/article-body-section";

export function ArticleDetail({ post }: { post: BlogPost }) {
  const t = useTranslations("Blogs");
  return (
    <article className="mx-auto max-w-5xl px-5 py-10 lg:px-8 lg:py-14">
      <Link
        href="/blogs"
        className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-primary"
      >
        <ArrowLeft className="size-4" />
        {t("backToArticles")}
      </Link>
      <header className="mx-auto mb-8 mt-6 max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-wider text-primary">
          {t.has(`categories.${post.category}`)
            ? t(`categories.${post.category}`)
            : post.category}
        </p>
        <h1
          lang="my"
          className="mt-4 text-2xl leading-loose sm:text-4xl sm:leading-relaxed"
        >
          {post.title}
        </h1>
        <p lang="my" className="mt-5 text-base leading-8 text-muted-foreground">
          {post.excerpt}
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <span className="text-sm font-medium">
            {post.author === "Haven Editorial" ? t("editorial") : post.author}
          </span>
          <ArticleMeta post={post} />
        </div>
      </header>
      <ArticleCover
        category={post.category}
        className="mb-10 max-h-80 rounded-2xl border"
      />
      <div className="mx-auto max-w-3xl">
        <nav
          aria-label={t("contents")}
          className="mb-10 rounded-2xl border bg-card p-5 sm:p-6"
        >
          <h2 className="text-sm font-semibold">{t("contents")}</h2>
          <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm text-primary">
            {post.content.map((section, index) => (
              <li key={section.heading}>
                <a
                  lang="my"
                  href={`#section-${index + 1}`}
                  className="leading-7 hover:underline"
                >
                  {section.heading}
                </a>
              </li>
            ))}
          </ol>
        </nav>
        <div className="space-y-10">
          {post.content.map((section, index) => (
            <ArticleBodySection
              key={section.heading}
              id={`section-${index + 1}`}
              section={section}
            />
          ))}
        </div>
        <p className="mt-10 rounded-xl bg-muted/60 p-5 text-sm leading-7 text-muted-foreground">
          {t("disclaimer")}
        </p>
        {!!post.sources?.length && (
          <section className="mt-8 border-t pt-6">
            <h2 className="text-sm font-semibold">{t("furtherReading")}</h2>
            <ul className="mt-3 space-y-3">
              {post.sources.map((source) => (
                <li key={source.url}>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-start gap-2 text-sm text-primary hover:underline"
                  >
                    {source.title}
                    <ArrowUpRight className="mt-0.5 size-4 shrink-0" />
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </article>
  );
}
