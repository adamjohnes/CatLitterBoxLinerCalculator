import { LinerCalculator } from "../components/calculator/LinerCalculator";
import { HeroSection } from "../sections/HeroSection";
import { ProductsSection } from "../sections/ProductsSection";
import { SiteFooter } from "../sections/SiteFooter";
import { SiteHeader } from "../sections/SiteHeader";

export function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-stone-50 text-emerald-950">
      <SiteHeader />
      <HeroSection />
      <LinerCalculator />
      <ProductsSection />
      <SiteFooter />
    </main>
  );
}
