'use client';

import { Button } from "@/components/ui/button";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { NumberTicker } from "@/components/ui/number-ticker";
import Image from 'next/image';

export function HeroSection() {
  const handleScrollToForm = () => {
    document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToAdvantages = () => {
    document.getElementById('vantagens')?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <section className="relative bg-[#FF7033] text-white pb-20 md:pb-32 overflow-hidden pt-0">
      <AuroraBackground colorScheme="orange" showRadialGradient={false} />
      
      {/* Team Image - Full Width at Top, colada no header */}
      <div className="relative w-full z-10">
        <div className="relative w-full aspect-[21/9] md:aspect-[21/9] overflow-hidden">
          <Image
            src="/team.png"
            alt="O maior time de marmitas fit do Brasil - Jorlan V., Léo Stronda, Felca e Sardinha"
            fill
            className="object-contain object-top"
            sizes="100vw"
            priority
          />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10 -mt-8 md:-mt-32">
        <div className="max-w-4xl mx-auto text-center">

          {/* Main Headline */}
          <AnimateOnScroll animation="fadeInUp" delay={0.1} duration={0.8}>
            <h1 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 leading-tight">
              Invista R$ 30 Mil e Fature Mais de R$ 150 Mil por Ano
            </h1>
          </AnimateOnScroll>

          {/* Sub-headline */}
          <AnimateOnScroll animation="fadeInUp" delay={0.2} duration={0.8}>
            <p className="text-lg md:text-xl mb-10 text-white/90">
              Conquiste agora sua liberdade financeira com o modelo de negócio mais inovador do Brasil
            </p>
          </AnimateOnScroll>

          {/* CTA Buttons */}
          <AnimateOnScroll animation="fadeInUp" delay={0.3} duration={0.8}>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
              <Button 
                variant="white" 
                className="min-w-[200px]"
                onClick={handleScrollToForm}
              >
                QUERO SER LICENCIADO
              </Button>
              <Button 
                variant="outline" 
                className="min-w-[200px] border-white text-white hover:bg-white/10"
                onClick={handleScrollToAdvantages}
              >
                CONHECER VANTAGENS
              </Button>
            </div>
          </AnimateOnScroll>

          {/* Metrics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 mb-8 md:mb-10">
            <AnimateOnScroll animation="scale" delay={0.4} duration={0.6}>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 border border-white/30">
                <div className="text-3xl md:text-4xl font-bold mb-1 text-white">
                  +<NumberTicker value={20} startValue={0} delay={0.5} className="text-white" />%
                </div>
                <div className="text-base">Lucratividade</div>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="scale" delay={0.5} duration={0.6}>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 border border-white/30">
                <div className="text-3xl md:text-4xl font-bold mb-1 text-white">
                  &lt;<NumberTicker value={1} startValue={0} delay={0.6} className="text-white" /> Ano
                </div>
                <div className="text-base">Retorno do Investimento</div>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="scale" delay={0.6} duration={0.6}>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 border border-white/30">
                <div className="text-3xl md:text-4xl font-bold mb-1 text-white">
                  R$ <NumberTicker value={30} startValue={0} delay={0.7} className="text-white" />k
                </div>
                <div className="text-base">Investimento Inicial</div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>

      {/* Wave at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 120L60 100C120 80 240 40 360 33.3C480 26.7 600 53.3 720 66.7C840 80 960 80 1080 66.7C1200 53.3 1320 26.7 1380 13.3L1440 0V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#FFFFFF"/>
        </svg>
      </div>
    </section>
  );
}
