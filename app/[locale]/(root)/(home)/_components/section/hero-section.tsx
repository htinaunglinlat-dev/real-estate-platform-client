import Image from "next/image";
import { Suspense } from "react";
import { useTranslations } from "next-intl";
import { Badge } from "@/components/ui/badge";
import { PropertySearch } from "@/components/form/property-search";
import { PropertySearchSkeleton } from "@/components/loading/properties-explorer-skeleton";

export function HeroSection() {
  const t = useTranslations("Home.Hero");

  return (
    <section className="relative overflow-hidden bg-hero text-hero-foreground">
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-2/5 overflow-hidden opacity-40 lg:block">
        <Image
          src="/images/property-villa.svg"
          alt=""
          fill
          sizes="40vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-hero via-hero/50 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-20 lg:px-8 lg:pb-28 lg:pt-28">
        <Badge
          variant="outline"
          className="mb-6 rounded-full border-hero-foreground/25 px-4 py-2 text-hero-foreground"
        >
          {t("badge")}
        </Badge>

        <h1 className="max-w-3xl font-serif text-3xl leading-relaxed tracking-normal sm:text-3xl lg:text-5xl">
          {t("title")}
        </h1>

        <p className="mt-7 max-w-xl text-base leading-7 text-hero-foreground/80 sm:text-lg">
          {t("description")}
        </p>

        <div className="mt-12 max-w-5xl">
          <Suspense fallback={<PropertySearchSkeleton />}>
            <PropertySearch />
          </Suspense>
        </div>

        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-hero-foreground/80">
          <span>
            {t.rich("verifiedProperties", {
              strong: (chunks) => (
                <strong className="text-hero-foreground">{chunks}</strong>
              ),
            })}
          </span>

          <span>
            {t.rich("townships", {
              strong: (chunks) => (
                <strong className="text-hero-foreground">{chunks}</strong>
              ),
            })}
          </span>

          <span>
            {t.rich("assistance", {
              strong: (chunks) => (
                <strong className="text-hero-foreground">{chunks}</strong>
              ),
            })}
          </span>
        </div>
      </div>
    </section>
  );
}
