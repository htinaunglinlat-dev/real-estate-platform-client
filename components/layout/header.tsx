import Link from "next/link";
import { Logo } from "@/components/layout/logo";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { MobileNav } from "@/components/layout/mobile-nav";
import { buttonVariants } from "@/components/ui/button";

const links = [
  { href: "/properties", label: "Properties" },
  { href: "/properties?listing_type=SALE", label: "Buy" },
  { href: "/properties?listing_type=RENT", label: "Rent" },
  { href: "/blogs", label: "Articles" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Logo />

        <nav
          className="hidden items-center gap-7 md:flex"
          aria-label="Main navigation"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />

          <Link className={buttonVariants()} href="/properties">
            Find a Property
          </Link>

          <MobileNav />
        </div>
      </div>
    </header>
  );
}
