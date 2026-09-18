import * as rootParams from "next/root-params";
import { hasLocale } from "next-intl";
import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";

import { routing } from "./routing";

export default getRequestConfig(async ({ locale }) => {
  const paramLocale = locale ?? (await rootParams.locale());

  if (!hasLocale(routing.locales, paramLocale)) {
    notFound();
  }

  return {
    locale: paramLocale,
    formats: {
      number: {
        localized: {
          numberingSystem: paramLocale === "my" ? "mymr" : "latn",
        },
      },
    },
    messages: (await import(`../messages/${paramLocale}.json`)).default,
  };
});
