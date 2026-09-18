import { Clock3 } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { formatDate } from "@/lib/format/format-date";
import type { BlogPost } from "@/types/blog";

export function ArticleMeta({ post }: { post: BlogPost }) {
  const t = useTranslations("Blogs");
  const locale = useLocale();
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
      <time dateTime={post.publishedAt}>
        {formatDate(post.publishedAt, locale)}
      </time>
      <span className="inline-flex items-center gap-1.5">
        <Clock3 className="size-3.5" aria-hidden="true" />
        {t("readTime", { minutes: post.readTime })}
      </span>
    </div>
  );
}
