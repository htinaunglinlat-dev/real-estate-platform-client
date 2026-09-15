"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PropertyImage } from "@/components/property/property-image";
import type { PropertyImage as PropertyImageData } from "@/types/property";

export function PropertyGallery({
  images,
  title,
}: {
  images?: PropertyImageData[];
  title: string;
}) {
  const photos = images?.filter((image) => image?.imageUrl) ?? [];
  const [selected, setSelected] = useState(0);
  const current = Math.min(selected, Math.max(0, photos.length - 1));
  const move = (direction: number) =>
    setSelected((current + direction + photos.length) % photos.length);
  return (
    <section
      aria-label="Property photos"
      className="space-y-3"
      onKeyDown={(event) => {
        if (photos.length < 2) return;
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
          event.preventDefault();
          move(event.key === "ArrowLeft" ? -1 : 1);
        }
      }}
    >
      <div className="relative aspect-4/3 overflow-hidden rounded-2xl bg-muted sm:aspect-video">
        <PropertyImage
          src={photos[current]?.imageUrl}
          alt={`${title}, photo ${current + 1}`}
        />
        {photos.length > 1 && (
          <div className="absolute inset-x-4 bottom-4 flex items-center justify-between">
            <Button
              size="icon-lg"
              variant="secondary"
              aria-label="Previous photo"
              onClick={() => move(-1)}
            >
              <ChevronLeft />
            </Button>
            <p
              aria-live="polite"
              className="rounded-full bg-background/90 px-3 py-1 text-sm"
            >
              {current + 1} / {photos.length}
            </p>
            <Button
              size="icon-lg"
              variant="secondary"
              aria-label="Next photo"
              onClick={() => move(1)}
            >
              <ChevronRight />
            </Button>
          </div>
        )}
      </div>
      {photos.length > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-2">
          {photos.map((photo, index) => (
            <button
              key={`${photo?.id}-${index}`}
              type="button"
              aria-label={`Show photo ${index + 1}`}
              aria-pressed={index === current}
              onClick={() => setSelected(index)}
              className={`relative h-20 w-28 shrink-0 overflow-hidden rounded-lg border-2 focus-visible:outline-2 focus-visible:outline-primary ${current === index ? "border-primary" : "border-transparent"}`}
            >
              <PropertyImage
                src={photo?.imageUrl}
                alt={`${title}, thumbnail ${index + 1}`}
                sizes="112px"
              />
            </button>
          ))}
        </div>
      )}
    </section>
  );
}
