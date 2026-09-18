"use client";

import { useTranslations } from "next-intl";

import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select";

interface PriceSelectProps {
  bound: "min" | "max";
  value?: number;
  min?: number;
  onValueChange: (value: number | undefined) => void;
}

const prices = [
  100, 300, 500, 1_000, 2_000, 3_000, 5_000, 10_000,
  20_000, 30_000, 50_000, 75_000, 100_000,
];

export function PriceSelect({ bound, value, min = 0, onValueChange }: PriceSelectProps) {
  const t = useTranslations("PropertySearch");
  const label = t(bound === "min" ? "minPrice" : "maxPrice");
  // Keep existing shared URLs readable even if their price is not a preset.
  const options = value !== undefined && !prices.includes(value)
    ? [...prices, value].sort((a, b) => a - b)
    : prices;

  return (
    <NativeSelect
      name={`${bound}_price_lakhs`}
      aria-label={label}
      value={value ?? ""}
      onChange={(event) => onValueChange(event.target.value ? Number(event.target.value) : undefined)}
      className="w-full [&_select]:h-12 [&_select]:rounded [&_select]:bg-background"
    >
      <NativeSelectOption value="">{label}</NativeSelectOption>
      {options.map((price) => (
        <NativeSelectOption key={price} value={price} disabled={price < min}>
          {t("priceInLakhs", { price: price.toLocaleString("en-US") })}
        </NativeSelectOption>
      ))}
    </NativeSelect>
  );
}
