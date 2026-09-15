import { Check, Copy } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CoordinateItemProps {
  label: string;
  value: string;
  copied: boolean;
  onCopy: () => void;
}

export function CoordinateItem({
  label,
  value,
  copied,
  onCopy,
}: CoordinateItemProps) {
  return (
    <div className="flex min-w-0 items-center justify-between gap-3 rounded-xl border border-border/60 bg-card px-4 py-3">
      <div className="min-w-0">
        <p className="text-xs font-medium text-muted-foreground">{label}</p>

        <p className="mt-1 truncate font-mono text-sm font-medium tabular-nums text-card-foreground">{value}</p>
      </div>

      <Button
        type="button"
        variant="ghost"
        size="icon"
        className={cn(
          "size-11 shrink-0 rounded-lg text-muted-foreground hover:bg-primary/10 hover:text-primary",
          copied && "bg-primary/10 text-primary",
        )}
        onClick={onCopy}
        aria-label={`Copy ${label.toLowerCase()}`}
      >
        {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
      </Button>
    </div>
  );
}
