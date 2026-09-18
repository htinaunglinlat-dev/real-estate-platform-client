"use client";

import { useTranslations } from "next-intl";

import { useId } from "react";
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select";
import type { PropertyFilterParams } from "@/types/property";

interface ListingTypeSelectProps {
  value?: PropertyFilterParams["listing_type"];
  onValueChange: (value: PropertyFilterParams["listing_type"]) => void;
}

export function ListingTypeSelect({ value, onValueChange }: ListingTypeSelectProps) {
  const t = useTranslations("PropertySearch");
  const id = useId();
  return (
    <div className="grid min-w-0">
      <label htmlFor={id} className="sr-only">{t("listingType")}</label>
      <NativeSelect id={id} name="listing_type" value={value ?? ""}
        onChange={(event) => onValueChange((event.target.value || undefined) as PropertyFilterParams["listing_type"])}
        className="w-full [&_select]:h-12 [&_select]:rounded [&_select]:bg-background">
        <NativeSelectOption value="">{t("allListingTypes")}</NativeSelectOption>
        <NativeSelectOption value="SALE">{t("forSale")}</NativeSelectOption>
        <NativeSelectOption value="RENT">{t("forRent")}</NativeSelectOption>
      </NativeSelect>
    </div>
  );
}
