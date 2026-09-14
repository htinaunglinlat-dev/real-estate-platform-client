import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/lib/format/format-date";
import type { BlogPost } from "@/types/blog";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="group">
      <Link
        href={`/blogs/${post.slug}`}
        aria-label={post.title}
        className="relative block aspect-[16/10] overflow-hidden rounded-[1.25rem] border"
      >
        <Image
          src={post.coverImage}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
        />
      </Link>
      <div className="mt-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-normal text-primary">
        <span>{post.category}</span>
        <span>·</span>
        <span>
          {post.readTime.toLocaleString("my-MM", { numberingSystem: "mymr" })}{" "}
          မိနစ်
        </span>
      </div>
      <Link
        href={`/blogs/${post.slug}`}
        className="mt-2 flex items-start justify-between gap-4"
      >
        <h3 className="font-serif text-xl leading-relaxed tracking-normal group-hover:text-brand">
          {post.title}
        </h3>
        <ArrowUpRight className="mt-1 shrink-0" size={18} />
      </Link>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">
        {post.excerpt}
      </p>
      <p className="mt-4 text-xs text-muted-foreground">
        {formatDate(post.publishedAt)}
      </p>
    </article>
  );
}
