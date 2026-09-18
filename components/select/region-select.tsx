"use client";

import { useTranslations } from "next-intl";

import { useRegions } from "@/hooks/use-region";
import { LocationSelect } from "@/components/select/location-select";
import type { LocationSelectProps } from "@/types/region";

export function RegionSelect(props: LocationSelectProps) {
  const t = useTranslations("PropertySearch");
  const query = useRegions();
  return (
    <LocationSelect
      {...props}
      label={t("region")}
      name="region_id"
      options={query.data ?? []}
      isLoading={query.isPending}
      isError={query.isError}
      onRetry={() => void query.refetch()}
      placeholder={t("allRegions")}
      emptyMessage={t("noRegions")}
    />
  );
}
