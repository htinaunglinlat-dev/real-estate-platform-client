"use client";

import { useId } from "react";
import { DebounceInput } from "@/components/input/debounce-input";

interface PropertySearchInputProps {
  value: string;
  onValueChange: (value: string) => void;
}

export function PropertySearchInput(props: PropertySearchInputProps) {
  const id = useId();
  return (
    <div className="grid min-w-0">
      <label htmlFor={id} className="sr-only">Search properties</label>
      <DebounceInput {...props} id={id} name="search" placeholder="Property name or keyword" className="h-12 rounded bg-background" />
    </div>
  );
}
