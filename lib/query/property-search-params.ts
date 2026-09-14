import { createParser, createSerializer, parseAsInteger, parseAsString, parseAsStringLiteral } from "nuqs/server";

const parseAsPrice = createParser({
  parse(value) {
    if (!value.trim()) return null;
    const price = Number(value);
    return Number.isFinite(price) && price >= 0 ? price : null;
  },
  serialize: String,
});

export const propertySearchParams = {
  page: parseAsInteger,
  limit: parseAsInteger,
  search: parseAsString,
  sort_direction: parseAsStringLiteral(["asc", "desc"]),
  region_id: parseAsInteger,
  township_id: parseAsInteger,
  listing_type: parseAsStringLiteral(["SALE", "RENT"]),
  property_type: parseAsStringLiteral([
    "LAND", "HOUSE", "CONDO", "APARTMENT", "SHOP", "OFFICE", "WAREHOUSE",
  ]),
  min_price_lakhs: parseAsPrice,
  max_price_lakhs: parseAsPrice,
  sort_by: parseAsStringLiteral(["created_at", "price_lakhs", "view_count"]),
};

export const serializePropertySearch = createSerializer(propertySearchParams);
