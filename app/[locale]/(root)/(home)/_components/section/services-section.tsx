import { Building2, Handshake, ShieldCheck } from "lucide-react";
import { useTranslations } from "next-intl";

export function ServicesSection() {
  const t = useTranslations("Home.Services");

  return (
    <section className="bg-surface">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[.8fr_1.2fr] lg:px-8 lg:py-20">
        <div>
          <p className="text-xs font-semibold uppercase tracking-normal text-primary">
            {t("eyebrow")}
          </p>

          <h2 className="mt-3 max-w-md font-serif text-3xl tracking-normal sm:text-3xl">
            {t("title")}
          </h2>

          <p className="mt-5 max-w-md leading-7 text-muted-foreground">
            {t("description")}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {[
            {
              icon: ShieldCheck,
              title: t("verified.title"),
              text: t("verified.description"),
            },
            {
              icon: Building2,
              title: t("location.title"),
              text: t("location.description"),
            },
            {
              icon: Handshake,
              title: t("support.title"),
              text: t("support.description"),
            },
          ].map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-[1.25rem] border bg-background p-6"
            >
              <Icon size={24} className="text-primary" />

              <h3 className="mt-8 font-serif text-lg">{title}</h3>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
