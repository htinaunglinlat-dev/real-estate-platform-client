import { ArrowUpRight, Bath, BedDouble, MapPin, Maximize } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { formatLabel } from "@/lib/format/format-label";
import { formatPrice } from "@/lib/format/format-price";
import type { Property } from "@/types/property";

export function PropertyCard({ property }: { property: Property }) {
  const cover =
    property.images.find((image) => image.isCover) ?? property.images[0];

  return (
    <Card className="group gap-0 py-0 overflow-hidden rounded-[1.4rem] border bg-surface transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-foreground/5">
      <Link
        href={`/properties/${property.slug}`}
        className="relative block aspect-[4/3] overflow-hidden"
      >
        <Image
          src={cover.imageUrl}
          alt={property.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute left-4 top-4 flex gap-2">
          <Badge variant="secondary" className="rounded-full px-3 py-1.5">
            {formatLabel(property.listingType)}
          </Badge>
          {property.isFeatured && (
            <Badge className="rounded-full px-3 py-1.5">အထူးရွေးချယ်မှု</Badge>
          )}
        </div>
      </Link>
      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-normal text-primary">
              {formatLabel(property.propertyType)}
            </p>
            <Link href={`/properties/${property.slug}`}>
              <h3 className="mt-2 font-serif text-xl leading-relaxed tracking-normal group-hover:text-brand">
                {property.title}
              </h3>
            </Link>
          </div>
          <ArrowUpRight
            className="mt-1 shrink-0 text-muted-foreground transition group-hover:text-brand"
            size={19}
          />
        </div>
        <p className="mt-3 flex items-center gap-1.5 text-sm text-muted-foreground">
          <MapPin size={15} />
          {property.location.township.nameMm}, {property.location.city.nameMm}
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-3 border-t pt-4 text-xs text-muted-foreground">
          {property.details.bedrooms !== undefined && (
            <span className="flex items-center gap-1.5">
              <BedDouble size={16} />
              {property.details.bedrooms.toLocaleString("my-MM", {
                numberingSystem: "mymr",
              })}{" "}
              အိပ်ခန်း
            </span>
          )}
          {property.details.bathrooms !== undefined && (
            <span className="flex items-center gap-1.5">
              <Bath size={16} />
              {property.details.bathrooms.toLocaleString("my-MM", {
                numberingSystem: "mymr",
              })}{" "}
              ရေချိုးခန်း
            </span>
          )}
          <span className="flex items-center gap-1.5">
            <Maximize size={15} />
            {property.areaValue.toLocaleString("my-MM", {
              numberingSystem: "mymr",
            })}{" "}
            {formatLabel(property.areaUnit)}
          </span>
        </div>
        <p className="mt-4 text-lg font-semibold text-primary">
          {formatPrice(property.price, property.currency, property.priceType)}
        </p>
      </div>
    </Card>
  );
}
