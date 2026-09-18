"use client";

import { useTransition } from "react";

import { Languages } from "lucide-react";
import { useLocale } from "next-intl";
import type { Locale } from "next-intl";
import { useSearchParams } from "next/navigation";

import { usePathname, useRouter } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

export function LanguageToggle() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const [isPending, startTransition] = useTransition();

  function changeLocale(nextLocale: Locale) {
    if (nextLocale === locale) {
      return;
    }

    const query = Object.fromEntries(searchParams.entries());

    startTransition(() => {
      router.replace(
        {
          pathname,
          query,
        },
        {
          locale: nextLocale,
          scroll: false,
        },
      );
    });
  }

  return (
    <div
      role="group"
      aria-label="Language"
      className="inline-flex items-center gap-1 rounded-full border bg-background p-1 shadow-sm"
    >
      <Languages
        aria-hidden="true"
        className="ml-2 size-4 text-muted-foreground"
      />

      <button
        type="button"
        aria-pressed={locale === "en"}
        disabled={isPending}
        onClick={() => changeLocale("en")}
        className={cn(
          "rounded-full px-3 py-1.5 text-xs font-medium",
          locale === "en"
            ? "bg-primary text-primary-foreground shadow-sm"
            : "text-muted-foreground hover:bg-muted hover:text-foreground",
        )}
      >
        EN
      </button>

      <button
        type="button"
        aria-pressed={locale === "my"}
        disabled={isPending}
        onClick={() => changeLocale("my")}
        className={cn(
          "rounded-full px-3 py-1.5 text-xs font-medium",
          locale === "my"
            ? "bg-primary text-primary-foreground shadow-sm"
            : "text-muted-foreground hover:bg-muted hover:text-foreground",
        )}
      >
        မြန်မာ
      </button>
    </div>
  );
}
