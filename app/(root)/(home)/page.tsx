"use client";

import { ArrowRight, Building2, Handshake, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { ArticlesSection } from "@/components/article/articles-section";
import { mockArticles } from "@/lib/data/mock-articles";
import { PropertyCard } from "@/components/card/property-card";
import { PropertyCardSkeleton } from "@/components/loading/property-card-skeleton";
import { PropertySearch } from "@/components/form/property-search";
import { useProperties } from "@/hooks/use-property";
import { PropertySearchSkeleton } from "@/components/loading/properties-explorer-skeleton";

export default function HomePage() {
  const properties = useProperties({ limit: 6 });

  return (
    <>
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
            Find a place that feels right for you
          </Badge>

          <h1 className="max-w-3xl font-serif text-3xl leading-relaxed tracking-normal sm:text-3xl lg:text-5xl">
            Find your dream home here.
          </h1>

          <p className="mt-7 max-w-xl text-base leading-7 text-hero-foreground/80 sm:text-lg">
            Explore homes, land, and properties across Myanmar with detailed
            information and find the place that best suits your needs.
          </p>

          <div className="mt-12 max-w-5xl">
            <Suspense fallback={<PropertySearchSkeleton />}>
              <PropertySearch />
            </Suspense>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-hero-foreground/80">
            <span>
              <strong className="text-hero-foreground">120+</strong> Verified
              Properties
            </span>

            <span>
              <strong className="text-hero-foreground">14</strong> Townships
            </span>

            <span>
              <strong className="text-hero-foreground">Personal</strong>{" "}
              Assistance
            </span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-20">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-normal text-primary">
              Selected for You
            </p>

            <h2 className="mt-3 font-serif text-3xl tracking-normal sm:text-3xl">
              Featured Properties
            </h2>
          </div>

          <Link
            href="/properties"
            className="flex shrink-0 items-center gap-2 text-sm font-semibold text-brand"
          >
            View All <ArrowRight size={17} />
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

      <section className="bg-surface">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[.8fr_1.2fr] lg:px-8 lg:py-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-normal text-primary">
              Haven Services
            </p>

            <h2 className="mt-3 max-w-md font-serif text-3xl tracking-normal sm:text-3xl">
              Choose with confidence.
            </h2>

            <p className="mt-5 max-w-md leading-7 text-muted-foreground">
              We provide clear and reliable information and are always ready to
              offer guidance and support whenever you need it.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {[
              {
                icon: ShieldCheck,
                title: "Verified Information",
                text: "Property and ownership details are clearly and systematically presented.",
              },
              {
                icon: Building2,
                title: "Location-Based Choices",
                text: "Find homes and locations that match your needs and preferences.",
              },
              {
                icon: Handshake,
                title: "Personal Support",
                text: "We support you from your first inquiry through property viewings.",
              },
            ].map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="rounded-[1.25rem] border bg-background p-6"
              >
                <Icon size={24} className="text-primary" />

                <h3 className="mt-8 font-serif text-lg">{title}</h3>

                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ArticlesSection posts={mockArticles.slice(0, 3)} />
    </>
  );
}
