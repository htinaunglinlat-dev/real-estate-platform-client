"use client";

import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { PropertyCard } from "@/components/card/property-card";
import { PropertyCardSkeleton } from "@/components/loading/property-card-skeleton";
import { useProperties } from "@/hooks/use-property";

export function FeaturedPropertiesSection() {
  const t = useTranslations("Home.FeaturedProperties");
  const properties = useProperties({ limit: 6 });

  return (
    <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-20">
      <div className="flex flex-wrap items-end justify-between gap-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-normal text-primary">
            {t("eyebrow")}
          </p>

          <h2 className="mt-3 font-serif text-3xl tracking-normal sm:text-3xl">
            {t("title")}
          </h2>
        </div>

        <Link
          href="/properties"
          className="flex shrink-0 items-center gap-2 text-sm font-semibold text-brand"
        >
          {t("viewAll")} <ArrowRight size={17} />
        </Link>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {properties.isPending
          ? Array.from({ length: 3 }, (_, index) => (
              <PropertyCardSkeleton key={index} />
            ))
          : properties.data?.data
              .slice(0, 3)
              .map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
      </div>
    </section>
  );
}
