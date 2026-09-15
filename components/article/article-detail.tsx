import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { ArticleCover } from "@/components/article/article-cover";
import { ArticleMeta } from "@/components/article/article-meta";
import { ArticleBodySection } from "@/components/article/article-body-section";
import type { BlogPost } from "@/types/blog";

export function ArticleDetail({ post }: { post: BlogPost }) {
  return (
    <article className="mx-auto max-w-5xl px-5 py-10 lg:px-8 lg:py-14">
      <Link href="/blogs" className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-primary"><ArrowLeft className="size-4" />Back to articles</Link>
      <header className="mx-auto mb-8 mt-6 max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-wider text-primary">{post.category}</p>
        <h1 lang="my" className="mt-4 text-2xl leading-loose sm:text-4xl sm:leading-relaxed">{post.title}</h1>
        <p lang="my" className="mt-5 text-base leading-8 text-muted-foreground">{post.excerpt}</p>
        <div className="mt-6 flex flex-wrap items-center gap-4"><span className="text-sm font-medium">{post.author}</span><ArticleMeta post={post} /></div>
      </header>
      <ArticleCover category={post.category} className="mb-10 max-h-80 rounded-2xl border" />
      <div className="mx-auto max-w-3xl">
        <nav aria-label="In this article" className="mb-10 rounded-2xl border bg-card p-5 sm:p-6">
          <h2 className="text-sm font-semibold">In this article</h2>
          <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm text-primary">
            {post.content.map((section, index) => <li key={section.heading}><a lang="my" href={`#section-${index + 1}`} className="leading-7 hover:underline">{section.heading}</a></li>)}
          </ol>
        </nav>
        <div className="space-y-10">{post.content.map((section, index) => <ArticleBodySection key={section.heading} id={`section-${index + 1}`} section={section} />)}</div>
        <p lang="my" className="mt-10 rounded-xl bg-muted/60 p-5 text-sm leading-7 text-muted-foreground">ဤဆောင်းပါးသည် အထွေထွေ လေ့လာရန်အတွက်သာ ဖြစ်ပါသည်။ မြေကွက်တစ်ခုချင်းစီ၏ အခြေအနေနှင့် လက်ရှိစည်းမျဉ်းများကို သက်ဆိုင်ရာရုံးနှင့် အရည်အချင်းရှိသော ဥပဒေပညာရှင်ထံ အတည်ပြုစစ်ဆေးပါ။</p>
        {!!post.sources?.length && (
          <section className="mt-8 border-t pt-6">
            <h2 className="text-sm font-semibold">Further reading</h2>
            <ul className="mt-3 space-y-3">{post.sources.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-start gap-2 text-sm text-primary hover:underline">{source.title}<ArrowUpRight className="mt-0.5 size-4 shrink-0" /></a></li>)}</ul>
          </section>
        )}
      </div>
    </article>
  );
}
