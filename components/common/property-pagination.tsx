"use client";

import { Button } from "@/components/ui/button";

export function PropertyPagination({ page, totalPages, disabled, onPageChange, label }: {
  page: number; totalPages: number; disabled?: boolean; onPageChange: (page: number) => void; label: string;
}) {
  const pages = [...new Set([1, page - 1, page, page + 1, totalPages])].filter((value) => value >= 1 && value <= totalPages).sort((a, b) => a - b);
  return <nav aria-label={label} className="flex flex-wrap items-center justify-between gap-3 py-5">
    <p className="text-sm text-muted-foreground" aria-live="polite">Page {page} of {totalPages}</p>
    <div className="flex flex-wrap items-center gap-2">
      <Button variant="outline" disabled={disabled || page <= 1} onClick={() => onPageChange(page - 1)}>Previous</Button>
      {pages.map((value, index) => <span key={value} className="flex items-center gap-2">{index > 0 && value - pages[index - 1] > 1 && <span aria-hidden="true">…</span>}<Button variant={value === page ? "default" : "outline"} aria-current={value === page ? "page" : undefined} aria-label={`Page ${value}`} disabled={disabled} onClick={() => onPageChange(value)}>{value}</Button></span>)}
      <Button variant="outline" disabled={disabled || page >= totalPages} onClick={() => onPageChange(page + 1)}>Next</Button>
    </div>
  </nav>;
}
