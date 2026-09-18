import { Compass, FileCheck2, Layers3, Sprout } from "lucide-react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

export function ArticleCover({
  category,
  className,
}: {
  category: string;
  className?: string;
}) {
  const t = useTranslations("Blogs");
  const Icon =
    category === "Land Types"
      ? Layers3
      : category === "Buying Guide"
        ? FileCheck2
        : category === "Site Visits"
          ? Compass
          : Sprout;

  return (
    <div
      aria-hidden="true"
      className={cn(
        "relative flex aspect-[16/9] items-center justify-center overflow-hidden bg-secondary text-primary",
        className,
      )}
    >
      <div className="absolute -right-8 -top-16 size-64 rounded-full border border-primary/10" />
      <div className="absolute -bottom-24 -left-8 size-72 rounded-full border border-primary/15 bg-primary/5" />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-primary/10 to-transparent" />
      <div className="relative flex size-24 rotate-[-6deg] items-center justify-center rounded-3xl border border-primary/15 bg-card/80 shadow-sm transition-transform duration-300 group-hover:rotate-0">
        <Icon className="size-11" strokeWidth={1.25} />
      </div>
      <span className="absolute bottom-4 left-5 text-[10px] font-semibold uppercase tracking-[0.2em]">
        {t("journal")}
      </span>
    </div>
  );
}
