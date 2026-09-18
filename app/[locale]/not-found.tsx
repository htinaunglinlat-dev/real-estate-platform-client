import Link from "next/link";
import { House } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-5 py-16">
      <div className="max-w-md text-center">
        <House className="mx-auto mb-6 size-12 text-primary" />

        <p className="text-sm text-muted-foreground">404</p>

        <h1 className="mt-3 text-3xl">Page Not Found</h1>

        <p className="mt-4 text-muted-foreground">
          Please check the link or return to the home page to continue browsing.
        </p>

        <Link href="/" className={buttonVariants({ variant: "default" })}>
          Back to Home
        </Link>
      </div>
    </main>
  );
}
