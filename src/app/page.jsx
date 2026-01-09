import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { AdvantagesSection } from "@/components/sections/advantages-section";
import { WhatYouGetSection } from "@/components/sections/what-you-get-section";
import { WhyInvestSection } from "@/components/sections/why-invest-section";
import { RegistrationFormSection } from "@/components/sections/registration-form-section";
import { FAQSection } from "@/components/sections/faq-section";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AdvantagesSection />
      <WhatYouGetSection />
      <WhyInvestSection />
      <RegistrationFormSection />
      <FAQSection />
      <Footer />
    </main>
  );
}