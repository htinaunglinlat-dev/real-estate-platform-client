import Link from "next/link";
import { MapPin, Maximize } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { PropertyImage } from "@/app/[locale]/(root)/properties/[slug]/_components/item/property-image";
import { formatPrice } from "@/lib/format/format-price";
import type { Property } from "@/types/property";

export function PropertyCard({ property }: { property: Property }) {
  const cover =
    property?.images?.find((image) => image?.isCover) ?? property?.images?.[0];
  const title = property?.title || "Untitled property";
  const href = property?.slug
    ? `/properties/${encodeURIComponent(property.slug)}`
    : undefined;
  const location = [
    property?.location?.township?.nameEn,
    property?.location?.region?.nameEn,
  ]
    .filter(Boolean)
    .join(", ");
  const picture = (
    <div className="relative aspect-4/3 overflow-hidden">
      <PropertyImage
        src={cover?.imageUrl}
        alt={title}
        sizes="(max-width: 768px) 100vw, 33vw"
      />
      <div className="absolute left-4 top-4 flex gap-2">
        {property?.listingType && (
          <Badge className="capitalize">{property.listingType}</Badge>
        )}
        {property?.isFeatured && <Badge variant="secondary">Featured</Badge>}
      </div>
    </div>
  );
  return (
    <Card className="gap-0 overflow-hidden rounded-2xl bg-surface py-0">
      {href ? (
        <Link href={href} aria-label={`View ${title}`}>
          {picture}
        </Link>
      ) : (
        picture
      )}
      <div className="p-5">
        {property?.propertyType && (
          <p className="text-xs font-semibold uppercase text-primary">
            {property.propertyType}
          </p>
        )}
        <h2 className="mt-2 font-serif text-xl">
          {href ? (
            <Link href={href} className="hover:text-primary">
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        {location && (
          <p className="mt-3 flex gap-2 text-sm text-muted-foreground">
            <MapPin size={16} className="shrink-0" />
            {location}
          </p>
        )}
        {(property?.propertySize || property?.propertyFeatures) && (
          <div className="mt-5 grid gap-2 border-t pt-4 text-sm text-muted-foreground">
            {property?.propertySize && (
              <span className="flex items-center gap-2">
                <Maximize size={16} />
                {property.propertySize}
              </span>
            )}
            {property?.propertyFeatures && <p>{property.propertyFeatures}</p>}
          </div>
        )}
        <p className="mt-4 text-lg font-semibold text-primary">
          {property?.price != null && Number.isFinite(property.price)
            ? formatPrice(
                property.price,
                property?.currency ?? "MMK",
                property?.priceType ?? "fixed",
              )
            : "Price on request"}
        </p>
      </div>
    </Card>
  );
}
