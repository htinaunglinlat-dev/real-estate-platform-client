"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useState } from "react";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <Button
        variant="outline"
        size="icon-lg"
        className="md:hidden"
        aria-label="Open navigation menu"
        onClick={() => setOpen(true)}
      >
        <Menu />
      </Button>

      <SheetContent>
        <SheetHeader className="pt-12">
          <SheetTitle>ZawTiKa Real Estate</SheetTitle>

          <SheetDescription>
            Find a place that feels right for you.
          </SheetDescription>
        </SheetHeader>

        <nav aria-label="Mobile navigation" className="grid gap-2 px-4">
          {[
            ["/", "Home"],
            ["/properties", "Properties"],
            ["/blogs", "Articles"],
            ["/login", "Sign In"],
          ].map(([href, label], index) => (
            <Link
              key={`${href}-${label}-${index}`}
              href={href}
              onNavigate={() => setOpen(false)}
              className={buttonVariants({
                variant: "ghost",
                className: "justify-start",
              })}
            >
              {label}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
