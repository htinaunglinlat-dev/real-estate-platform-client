"use client";

import { useTranslations } from "next-intl";

import { useTownships } from "@/hooks/use-region";
import { LocationSelect } from "@/components/select/location-select";
import type { LocationSelectProps } from "@/types/region";

interface TownshipSelectProps extends LocationSelectProps {
  regionId?: number;
}

export function TownshipSelect({ regionId, disabled, ...props }: TownshipSelectProps) {
  const t = useTranslations("PropertySearch");
  const query = useTownships(regionId);
  return (
    <LocationSelect
      {...props}
      disabled={disabled || regionId === undefined}
      label={t("township")}
      name="township_id"
      options={query.data ?? []}
      isLoading={query.isPending}
      isError={query.isError}
      onRetry={() => void query.refetch()}
      placeholder={t(regionId === undefined ? "selectRegionFirst" : "allTownships")}
      emptyMessage={t("noTownships")}
    />
  );
}
