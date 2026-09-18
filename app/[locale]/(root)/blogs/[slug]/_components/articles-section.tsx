import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { ArticleGrid } from "@/app/[locale]/(root)/blogs/_components/section/article-grid";
import type { BlogPost } from "@/types/blog";

export function ArticlesSection({
  posts,
  title,
}: {
  posts: BlogPost[];
  title?: string;
}) {
  const t = useTranslations("ArticlesSection");

  return (
    <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">
            {t("eyebrow")}
          </p>
          <h2 className="mt-3 text-2xl sm:text-3xl">{title ?? t("title")}</h2>
          <p className="mt-3 max-w-xl text-sm leading-7 text-muted-foreground">
            {t("description")}
          </p>
        </div>
        <Link
          href="/blogs"
          className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-primary"
        >
          {t("viewAll")} <ArrowRight className="size-4" />
        </Link>
      </div>
      <ArticleGrid posts={posts} />
    </section>
  );
}
