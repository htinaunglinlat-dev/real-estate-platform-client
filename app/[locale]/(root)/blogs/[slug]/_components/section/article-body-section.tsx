import type { BlogSection } from "@/types/blog";

export function ArticleBodySection({ section, id }: { section: BlogSection; id: string }) {
  return (
    <section id={id} lang="my" className="scroll-mt-28">
      <h2 className="text-xl leading-loose sm:text-2xl">{section.heading}</h2>
      <div className="mt-4 space-y-5 text-base leading-9 text-muted-foreground">
        {section.paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
      </div>
    </section>
  );
}
