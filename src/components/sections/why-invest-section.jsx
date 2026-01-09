'use client';

import { Card } from "@/components/ui/card";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { HandIcon, TrendingUpIcon, HeadphonesIcon } from "@/components/icons";

const reasons = [
  {
    icon: HandIcon,
    title: "Investimento Acessível",
    description: "Comece seu negócio com apenas R$ 30 mil e tenha acesso a todo suporte necessário",
  },
  {
    icon: TrendingUpIcon,
    title: "Alta Lucratividade",
    description: "Fature mais de R$ 150 mil por ano com margem de lucro superior a 20%",
  },
  {
    icon: HeadphonesIcon,
    title: "Suporte Completo",
    description: "Sistema de gestão em tempo real e acompanhamento contínuo do seu negócio",
  },
];

export function WhyInvestSection() {
  return (
    <section id="programa" className="pb-12 pt-6 bg-gray-light scroll-mt-20">
      <div className="container mx-auto px-4">
        <AnimateOnScroll animation="fadeInUp" delay={0.1} duration={0.8}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-dark mb-3">
              Por Que Investir na 3FIT?
            </h2>
            <p className="text-lg text-gray-medium max-w-2xl mx-auto">
              Um modelo de negócio inovador e lucrativo no mercado de alimentação saudável
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <AnimateOnScroll 
              key={index} 
              animation="scale" 
              delay={0.2 + (index * 0.15)} 
              duration={0.6}
            >
              <Card className="text-center hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <reason.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-dark mb-3">
                  {reason.title}
                </h3>
                <p className="text-sm text-gray-medium">
                  {reason.description}
                </p>
              </Card>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
