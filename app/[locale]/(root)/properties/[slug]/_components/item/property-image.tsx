"use client";

import { useState } from "react";
import Image from "next/image";
import { ImageOff } from "lucide-react";

export function PropertyImage({
  src,
  alt,
  sizes = "100vw",
}: {
  src?: string;
  alt: string;
  sizes?: string;
}) {
  const [failedSource, setFailedSource] = useState<string>();
  const valid =
    src &&
    (/^https?:\/\//i.test(src) ||
      (src.startsWith("/") && !src.startsWith("//")));
  if (!valid || failedSource === src) {
    return (
      <div className="flex h-full min-h-24 items-center justify-center gap-2 bg-muted text-muted-foreground">
        <ImageOff aria-hidden="true" />
        <span>No image available</span>
      </div>
    );
  }
  return (
    <Image
      src={src}
      alt={alt}
      fill
      unoptimized
      sizes={sizes}
      onError={() => setFailedSource(src)}
      className="object-cover"
    />
  );
}
