import type { Currency, PriceType } from "@/types/property";

const suffixes: Partial<Record<PriceType, string>> = {
  per_month: " / လ", per_sqft: " / စတုရန်းပေ", per_acre: " / ဧက", negotiable: " (ညှိနှိုင်း)",
};
const number = new Intl.NumberFormat("my-MM", { numberingSystem: "mymr", maximumFractionDigits: 1 });

export function formatPrice(amount: number, currency: Currency, priceType: PriceType) {
  const suffix = suffixes[priceType] ?? "";
  if (currency === "USD") return `${number.format(amount)} အမေရိကန်ဒေါ်လာ${suffix}`;
  if (amount >= 100_000) return `${number.format(amount / 100_000)} သိန်း${suffix}`;
  return `${number.format(amount)} ကျပ်${suffix}`;
}
