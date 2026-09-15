"use client";

import { useState } from "react";
import {
  Check,
  Copy,
  ExternalLink,
  LocateFixed,
  MapPin,
  Navigation,
  Share2,
} from "lucide-react";

import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LocationUnavailable } from "@/components/display/location-unavailabe";
import { CoordinateItem } from "@/components/card/coordinate-item";
import { formatCoordination } from "@/lib/format/format-coordinate";

interface LocationMapProps {
  latitude?: number | string;
  longitude?: number | string;
  title?: string;
  zoom?: number;
  className?: string;
}

export function LocationMap({
  latitude: latitudeValue,
  longitude: longitudeValue,
  title = "Property Location",
  zoom = 16,
  className,
}: LocationMapProps) {
  const [copied, setCopied] = useState<
    "coordinates" | "latitude" | "longitude" | "link" | null
  >(null);

  const latitude = formatCoordination(latitudeValue, -90, 90);
  const longitude = formatCoordination(longitudeValue, -180, 180);

  if (latitude === null || longitude === null) {
    return (
      <LocationUnavailable
        title={title}
        description="A valid Google Maps location has not been provided for this property."
        className={className}
      />
    );
  }

  const coordinates = `${latitude},${longitude}`;

  const embedUrl =
    `https://www.google.com/maps?q=${latitude},${longitude}` +
    `&z=${zoom}&output=embed`;

  const googleMapsUrl =
    `https://www.google.com/maps/search/?api=1` +
    `&query=${latitude},${longitude}`;

  const directionsUrl =
    `https://www.google.com/maps/dir/?api=1` +
    `&destination=${latitude},${longitude}`;

  const streetViewUrl =
    `https://www.google.com/maps/@?api=1` +
    `&map_action=pano` +
    `&viewpoint=${latitude},${longitude}`;

  async function copyToClipboard(
    value: string,
    type: "coordinates" | "latitude" | "longitude" | "link",
  ) {
    try {
      await navigator.clipboard.writeText(value);

      setCopied(type);

      window.setTimeout(() => {
        setCopied(null);
      }, 1800);
    } catch {
      setCopied(null);
    }
  }

  async function shareLocation() {
    const shareData = {
      title,
      text: `${title}: ${coordinates}`,
      url: googleMapsUrl,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch {
        // User cancelled or browser couldn't share.
      }
    }

    await copyToClipboard(googleMapsUrl, "link");
  }

  return (
    <section
      className={cn(
        "overflow-hidden rounded-2xl border border-border/80 bg-card text-card-foreground shadow-sm",
        className,
      )}
    >
      <span className="sr-only" role="status" aria-live="polite">
        {copied
          ? `${copied === "link" ? "Map link" : copied} copied to clipboard.`
          : ""}
      </span>
      {/* Header */}
      <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
        <div className="flex min-w-0 items-center gap-3.5">
          <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 ring-1 ring-inset ring-primary/10">
            <MapPin className="size-5 text-primary" />
          </div>

          <div className="min-w-0">
            <h2 className="text-lg font-semibold tracking-tight sm:text-xl">
              {title}
            </h2>

            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              Explore the area and plan your visit.
            </p>
          </div>
        </div>

        <Button
          type="button"
          variant="ghost"
          className={cn(
            "h-11 gap-2 rounded-xl px-3 text-muted-foreground sm:shrink-0",
            copied === "coordinates" && "bg-primary/10 text-primary",
          )}
          onClick={() => copyToClipboard(coordinates, "coordinates")}
        >
          {copied === "coordinates" ? (
            <>
              <Check />
              Copied
            </>
          ) : (
            <>
              <Copy />
              Copy coordinates
            </>
          )}
        </Button>
      </div>

      {/* Map */}
      <div className="px-3 sm:px-6">
        <div className="overflow-hidden rounded-xl border border-border/70 bg-muted">
          <iframe
            title={title}
            src={embedUrl}
            className="block h-72 w-full border-0 sm:h-96 lg:h-112"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      {/* Main actions */}
      <div className="grid grid-cols-1 gap-2.5 p-5 min-[360px]:grid-cols-2 sm:p-6 lg:grid-cols-4">
        <a
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonVariants({
            className: "h-11 gap-2 rounded-xl px-4 shadow-sm",
          })}
        >
          <ExternalLink />
          Open in Maps
        </a>

        <a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonVariants({
            variant: "outline",
            className:
              "h-11 gap-2 rounded-xl border-border/80 bg-transparent px-4",
          })}
        >
          <Navigation />
          Directions
        </a>

        <a
          href={streetViewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonVariants({
            variant: "outline",
            className:
              "h-11 gap-2 rounded-xl border-border/80 bg-transparent px-4",
          })}
        >
          <LocateFixed />
          Street View
        </a>

        <Button
          type="button"
          variant="outline"
          className={cn(
            "h-11 gap-2 rounded-xl border-border/80 bg-transparent px-4",
            copied === "link" && "border-primary/20 bg-primary/10 text-primary",
          )}
          onClick={shareLocation}
        >
          {copied === "link" ? (
            <>
              <Check />
              Link copied
            </>
          ) : (
            <>
              <Share2 />
              Share
            </>
          )}
        </Button>
      </div>

      {/* Coordinate information */}
      <div className="grid gap-3 border-t border-border/60 bg-muted/30 p-5 sm:grid-cols-2 sm:px-6">
        <CoordinateItem
          label="Latitude"
          value={latitude.toString()}
          copied={copied === "latitude"}
          onCopy={() => copyToClipboard(latitude.toString(), "latitude")}
        />

        <CoordinateItem
          label="Longitude"
          value={longitude.toString()}
          copied={copied === "longitude"}
          onCopy={() => copyToClipboard(longitude.toString(), "longitude")}
        />
      </div>
    </section>
  );
}
