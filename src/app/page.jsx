import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { AdvantagesSection } from "@/components/sections/advantages-section";
import { WhatYouGetSection } from "@/components/sections/what-you-get-section";
import { DifferentialsSection } from "@/components/sections/differentials-section";
import { TheMarketSection } from "@/components/sections/the-market-section";
import { ProductsSection } from "@/components/sections/products-section";
import { RegistrationFormSection } from "@/components/sections/registration-form-section";
import { FAQSection } from "@/components/sections/faq-section";
import { PreventAutoScroll } from "@/components/prevent-auto-scroll";
import { Bg } from "@/components/sections/bg";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Bg />
      <PreventAutoScroll />
      <Header />
      <HeroSection />
      <AdvantagesSection />
      <RegistrationFormSection />
      <WhatYouGetSection />
      <DifferentialsSection />
      <TheMarketSection />
      <ProductsSection />
      <FAQSection />
      <Footer />
    </main>
  );
}