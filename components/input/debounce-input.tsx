"use client";

import { useEffect, useState, type ComponentProps } from "react";
import { Input } from "@/components/ui/input";

interface DebounceInputProps extends Omit<
  ComponentProps<typeof Input>,
  "value" | "defaultValue" | "onChange"
> {
  value: string;
  onValueChange: (value: string) => void;
  delay?: number;
}

export function DebounceInput({
  value,
  onValueChange,
  delay = 300,
  ...props
}: DebounceInputProps) {
  const [draft, setDraft] = useState(value);
  const [previousValue, setPreviousValue] = useState(value);

  // Synchronize external URL changes, including browser navigation.
  if (previousValue !== value) {
    setPreviousValue(value);
    setDraft(value);
  }

  useEffect(() => {
    if (draft === value) return;
    const timeout = setTimeout(() => onValueChange(draft), delay);
    return () => clearTimeout(timeout);
  }, [draft, value, delay, onValueChange]);

  return (
    <Input
      {...props}
      value={draft}
      onChange={(event) => setDraft(event.target.value)}
    />
  );
}
