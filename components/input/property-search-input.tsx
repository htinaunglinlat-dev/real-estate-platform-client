"use client";

import { useId } from "react";
import { Search } from "lucide-react";
import { DebounceInput } from "@/components/input/debounce-input";

interface PropertySearchInputProps {
  value: string;
  onValueChange: (value: string) => void;
}

export function PropertySearchInput(props: PropertySearchInputProps) {
  const id = useId();
  return (
    <div className="relative grid min-w-0">
      <label htmlFor={id} className="sr-only">
        Search properties
      </label>
      <Search
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground"
      />
      <DebounceInput
        {...props}
        id={id}
        name="search"
        placeholder="Property name or keyword"
        className="h-12 rounded bg-background pl-10"
      />
    </div>
  );
}
