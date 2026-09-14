"use client";

import { useId } from "react";
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import type { LocationSelectProps, RegionOption } from "@/types/region";

interface Props extends LocationSelectProps {
  label: string;
  name: string;
  options: RegionOption[];
  isLoading: boolean;
  isError: boolean;
  onRetry: () => void;
  placeholder: string;
  emptyMessage: string;
}

export function LocationSelect({
  value, onValueChange, disabled, label, name, options, isLoading,
  isError, onRetry, placeholder, emptyMessage,
}: Props) {
  const id = useId();
  const unavailable = value !== undefined && !options.some((option) => option.id === value);

  return (
    <div className="grid min-w-0 content-start">
      <label htmlFor={id} className="sr-only">{label}</label>
      {isLoading && !disabled ? (
        <div role="status" aria-label={`Fetching ${label.toLowerCase()}`}>
          <Skeleton className="h-12 w-full rounded" />
        </div>
      ) : (
        <NativeSelect
          id={id}
          name={name}
          value={value ?? ""}
          onChange={(event) => onValueChange(event.target.value ? Number(event.target.value) : undefined)}
          disabled={disabled || (options.length === 0 && value === undefined)}
          aria-describedby={isError ? `${id}-error` : undefined}
          className="w-full [&_select]:h-12 [&_select]:rounded [&_select]:bg-background"
        >
          <NativeSelectOption value="">
            {disabled ? placeholder : isError && options.length === 0 ? `Unable to fetch ${label.toLowerCase()}` : options.length === 0 ? emptyMessage : placeholder}
          </NativeSelectOption>
          {unavailable && <NativeSelectOption value={value} disabled>Selected {label.toLowerCase()} unavailable</NativeSelectOption>}
          {options.map((option) => (
            <NativeSelectOption key={option.id} value={option.id}>
              {option.nameMm ? `${option.nameMm} (${option.nameEn})` : option.nameEn}
            </NativeSelectOption>
          ))}
        </NativeSelect>
      )}
      {isError && !disabled && (
        <div id={`${id}-error`} role="alert" className="flex items-center gap-2 text-xs text-destructive">
          Could not fetch {label.toLowerCase()}.
          <Button type="button" variant="link" size="sm" onClick={onRetry}>Retry</Button>
        </div>
      )}
    </div>
  );
}
