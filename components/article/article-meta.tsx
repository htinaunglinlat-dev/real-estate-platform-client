import { Clock3 } from "lucide-react";
import type { BlogPost } from "@/types/blog";

export function ArticleMeta({ post }: { post: BlogPost }) {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
      <time dateTime={post.publishedAt}>
        {new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" }).format(new Date(post.publishedAt))}
      </time>
      <span className="inline-flex items-center gap-1.5"><Clock3 className="size-3.5" aria-hidden="true" />{post.readTime} min read</span>
    </div>
  );
}
