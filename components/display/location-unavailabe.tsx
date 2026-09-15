import { cn } from "cn";
import { MapPin } from "lucide-react";

interface LocationUnavailableProps {
  title: string;
  description: string;
  className?: string;
}

export function LocationUnavailable({
  title,
  description,
  className,
}: LocationUnavailableProps) {
  return (
    <section
      className={cn(
        "flex min-h-85 flex-col items-center justify-center overflow-hidden rounded-xl border bg-card p-6 text-center",
        className,
      )}
    >
      <div className="relative mb-6 flex size-32 items-center justify-center">
        {/* Animated rings */}
        <span className="absolute size-24 rounded-full border border-primary/20 animate-ping" />

        <span className="absolute size-20 rounded-full bg-primary/5" />

        <svg
          viewBox="0 0 120 120"
          className="relative size-24 text-muted-foreground"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Map */}
          <path
            d="M19 31L45 20L75 31L101 20V87L75 98L45 87L19 98V31Z"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="opacity-30"
          />

          <path
            d="M45 20V87M75 31V98"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            className="opacity-30"
          />

          {/* Location pin */}
          <g className="animate-bounce">
            <path
              d="M60 27C48.954 27 40 35.954 40 47C40 62 60 82 60 82C60 82 80 62 80 47C80 35.954 71.046 27 60 27Z"
              className="fill-primary/15 stroke-primary"
              strokeWidth="4"
              strokeLinejoin="round"
            />

            <circle cx="60" cy="47" r="7" className="fill-primary" />
          </g>
        </svg>
      </div>

      <h3 className="text-lg font-semibold">{title}</h3>

      <p className="mt-2 max-w-md text-sm leading-6 text-muted-foreground">
        {description}
      </p>

      <div className="mt-5 flex items-center gap-2 rounded-full bg-muted px-4 py-2 text-xs text-muted-foreground">
        <MapPin className="size-3.5" />
        Location unavailable
      </div>
    </section>
  );
}
