"use client";

import { useId } from "react";
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select";
import type { PropertyFilterParams } from "@/types/property";

interface ListingTypeSelectProps {
  value?: PropertyFilterParams["listing_type"];
  onValueChange: (value: PropertyFilterParams["listing_type"]) => void;
}

export function ListingTypeSelect({ value, onValueChange }: ListingTypeSelectProps) {
  const id = useId();
  return (
    <div className="grid min-w-0">
      <label htmlFor={id} className="sr-only">Sale / Rent</label>
      <NativeSelect id={id} name="listing_type" value={value ?? ""}
        onChange={(event) => onValueChange((event.target.value || undefined) as PropertyFilterParams["listing_type"])}
        className="w-full [&_select]:h-12 [&_select]:rounded [&_select]:bg-background">
        <NativeSelectOption value="">Sale & Rent</NativeSelectOption>
        <NativeSelectOption value="SALE">For Sale</NativeSelectOption>
        <NativeSelectOption value="RENT">For Rent</NativeSelectOption>
      </NativeSelect>
    </div>
  );
}
