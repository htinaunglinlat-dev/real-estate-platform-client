"use client";

import { useEffect, useState } from "react";
import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CopyButtonProps {
  value: string;
  label: string;
}

export function CopyButton({ value, label }: CopyButtonProps) {
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");

  useEffect(() => {
    if (status === "idle") return;
    const timer = window.setTimeout(() => setStatus("idle"), 2500);
    return () => window.clearTimeout(timer);
  }, [status]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setStatus("copied");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="shrink-0">
      <Button
        type="button"
        variant="ghost"
        size="icon"
        className="size-11 rounded-xl text-primary hover:bg-primary/10"
        onClick={copy}
        aria-label={status === "copied" ? `${label} copied` : `Copy ${label}`}
        title={status === "copied" ? "Copied" : `Copy ${label}`}
      >
        {status === "copied" ? <Check /> : <Copy />}
      </Button>
      <span role="status" className="sr-only">
        {status === "copied" ? `${label} copied to clipboard.` : ""}
      </span>
      {status === "error" && (
        <p role="alert" className="mt-1 max-w-28 text-xs text-destructive">
          Could not copy. Select and copy the text manually.
        </p>
      )}
    </div>
  );
}
