import Link from "next/link";
import { PropertyDetail } from "@/components/property/property-detail";

export default async function PropertyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <div className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
      <Link
        href="/properties"
        className="mb-8 inline-block text-sm text-muted-foreground hover:text-foreground"
      >
        ← All properties
      </Link>
      <PropertyDetail slug={slug} />
    </div>
  );
}
