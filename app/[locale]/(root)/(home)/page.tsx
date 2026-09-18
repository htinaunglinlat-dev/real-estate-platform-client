import { HeroSection } from "./_components/section/hero-section";
import { FeaturedPropertiesSection } from "./_components/section/featured-properties-section";
import { ServicesSection } from "./_components/section/services-section";
import { HomeArticlesSection } from "./_components/section/articles-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedPropertiesSection />
      <ServicesSection />
      <HomeArticlesSection />
    </>
  );
}
