"use client";

import { useTranslations } from "next-intl";

import { useId } from "react";
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select";
import type { PropertyFilterParams } from "@/types/property";

interface PropertyTypeSelectProps {
  value?: PropertyFilterParams["property_type"];
  onValueChange: (value: PropertyFilterParams["property_type"]) => void;
}

const options = ["HOUSE", "CONDO", "APARTMENT", "LAND", "SHOP", "OFFICE", "WAREHOUSE"] as const;

export function PropertyTypeSelect({ value, onValueChange }: PropertyTypeSelectProps) {
  const t = useTranslations("PropertySearch");
  const id = useId();
  return (
    <div className="grid min-w-0">
      <label htmlFor={id} className="sr-only">{t("propertyType")}</label>
      <NativeSelect id={id} name="property_type" value={value ?? ""}
        onChange={(event) => onValueChange((event.target.value || undefined) as PropertyFilterParams["property_type"])}
        className="w-full [&_select]:h-12 [&_select]:rounded [&_select]:bg-background">
        <NativeSelectOption value="">{t("allPropertyTypes")}</NativeSelectOption>
        {options.map((option) => (
          <NativeSelectOption key={option} value={option}>{t(`propertyTypes.${option}`)}</NativeSelectOption>
        ))}
      </NativeSelect>
    </div>
  );
}
