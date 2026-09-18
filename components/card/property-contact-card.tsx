import { ArrowUpRight, MessageCircle, Phone, Send } from "lucide-react";
import { CopyButton } from "@/components/button/copy-button";
import { buttonVariants } from "@/components/ui/button";
import { formatPrice } from "@/lib/format/format-price";
import type { Property } from "@/types/property";

export function PropertyContactCard({ property }: { property: Property }) {
  const phone = property.contactPhone?.replace(/[^+\d]/g, "");
  const viber = property.contactViber?.replace(/[^+\d]/g, "");
  const telegram = property.contactTelegram?.trim().replace(/^@/, "");
  const contacts = [
    {
      label: "Phone number",
      value: property.contactPhone?.trim(),
      copyValue: phone,
      href: phone && /\d/.test(phone) ? `tel:${phone}` : undefined,
      action: "Call now",
      icon: Phone,
    },
    {
      label: "Viber number",
      value: property.contactViber?.trim(),
      copyValue: viber,
      href:
        viber && /\d/.test(viber)
          ? `viber://chat?number=${encodeURIComponent(viber)}`
          : undefined,
      action: "Chat on Viber",
      icon: MessageCircle,
    },
    {
      label: "Telegram username",
      value: telegram ? `@${telegram}` : undefined,
      copyValue: telegram,
      href:
        telegram && /^[a-zA-Z0-9_]+$/.test(telegram)
          ? `https://t.me/${telegram}`
          : undefined,
      action: "Chat on Telegram",
      icon: Send,
    },
  ].filter((contact) => contact.value);

  return (
    <aside className="min-w-0 overflow-hidden rounded-2xl border border-border/80 bg-card text-card-foreground shadow-sm">
      <div className="space-y-2 border-b border-border/60 bg-primary/5 p-5 sm:p-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Property price
        </p>
        <p className="break-words text-2xl font-semibold leading-snug text-primary">
          {property.price != null && Number.isFinite(property.price)
            ? formatPrice(
                property.price,
                property.currency ?? "MMK",
                property.priceType ?? "fixed",
              )
            : "Price on request"}
        </p>
        {property.priceLabel && (
          <p className="text-sm leading-relaxed text-muted-foreground">
            {property.priceLabel}
          </p>
        )}
      </div>

      <div className="space-y-5 p-5 sm:p-6">
        <div>
          <h2 className="text-lg font-semibold">Contact about this property</h2>
          {contacts.length > 0 && (
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              Get in touch or copy the contact details.
            </p>
          )}
        </div>
        <div className="space-y-3">
          {contacts.map(
            ({ label, value, copyValue, href, action, icon: Icon }) => (
              <div
                key={label}
                className="rounded-xl border border-border/70 p-3"
              >
                <div className="flex items-center gap-2">
                  <Icon
                    className="size-4 shrink-0 text-primary"
                    aria-hidden="true"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="text-xs text-muted-foreground">{label}</p>
                    <p className="mt-1 select-text break-all text-sm font-medium">
                      {value}
                    </p>
                  </div>
                  <CopyButton
                    key={value}
                    value={copyValue || value!}
                    label={label.toLowerCase()}
                  />
                </div>
                {href && (
                  <a
                    href={href}
                    target={
                      label === "Telegram username" ? "_blank" : undefined
                    }
                    rel={
                      label === "Telegram username"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className={buttonVariants({
                      variant: label === "Phone number" ? "default" : "outline",
                      className: "mt-3 h-11 w-full gap-2 rounded-lg",
                    })}
                  >
                    {action}
                    <ArrowUpRight aria-hidden="true" />
                  </a>
                )}
              </div>
            ),
          )}
          {contacts.length === 0 && (
            <p className="rounded-xl bg-muted/50 p-4 text-sm leading-relaxed text-muted-foreground">
              Contact information is not available yet.
            </p>
          )}
        </div>
      </div>
    </aside>
  );
}
