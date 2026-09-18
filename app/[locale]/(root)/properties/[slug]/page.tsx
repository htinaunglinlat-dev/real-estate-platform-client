import { PropertyDetail } from "@/app/[locale]/(root)/properties/[slug]/_components/property-detail";
import { Link } from "@/i18n/navigation";
import { ArrowLeft } from "lucide-react";

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
        className="group mb-8 inline-flex items-center gap-2 rounded-md px-2 py-1.5 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
      >
        <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-0.5" />
        <span>All properties</span>
      </Link>
      <PropertyDetail slug={slug} />
    </div>
  );
}
