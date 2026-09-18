import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Logo } from "@/components/layout/logo";

export function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="border-t bg-surface">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="sm:col-span-2">
          <Logo />
          <p className="mt-4 max-w-sm text-sm leading-6 text-muted-foreground">
            {t("description")}
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold">{t("explore")}</p>
          <div className="mt-4 grid gap-3 text-sm text-muted-foreground">
            <Link href="/properties">{t("allProperties")}</Link>
            <Link href="/blogs">{t("articles")}</Link>
            <Link href="/login">{t("signIn")}</Link>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold">{t("contact")}</p>
          <div className="mt-4 grid gap-2 text-sm text-muted-foreground">
            <a href="tel:+959450880220">+95 9 450 880 220</a>
            <a href="mailto:hello@haven.mm">hello@haven.mm</a>
            <span>{t("location")}</span>
          </div>
        </div>
      </div>
      <div className="border-t px-5 py-5 text-center text-xs text-muted-foreground">
        {t("copyright", { year: 2026 })}
      </div>
    </footer>
  );
}
