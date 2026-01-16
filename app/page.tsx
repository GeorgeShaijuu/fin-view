import { HeroSection } from "@/components/landing/HeroSection";
import { ConverterWidget } from "@/components/landing/ConverterWidget";
import { ServicesSection } from "@/components/landing/ServicesSection";
import { AnalyticsSection } from "@/components/landing/AnalyticsSection";
import { MobilePromoSection } from "@/components/landing/MobilePromoSection";
import { SecuritySection } from "@/components/landing/SecuritySection";
import { ProductsSection } from "@/components/landing/ProductsSection";
import { PromoBanner } from "@/components/landing/PromoBanner";
import { StepsSection } from "@/components/landing/StepsSection";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <ConverterWidget />
      <ServicesSection />
      <AnalyticsSection />
      <MobilePromoSection />
      <SecuritySection />
      <ProductsSection />
      <PromoBanner />
      <StepsSection />
      <Footer />
    </main>
  );
}
