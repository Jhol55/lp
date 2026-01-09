'use client';

import { Card } from "@/components/ui/card";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import {
  TrendingUpIcon,
  DollarIcon,
  RocketIcon,
  ClockIcon,
  DashboardIcon,
  CreditCardIcon,
  SettingsIcon,
} from "@/components/icons";

const advantages = [
  {
    icon: TrendingUpIcon,
    title: "Lucratividade de Mais de 20%",
    description: "Invista em um negócio verdadeiramente lucrativo e inovador no Brasil",
  },
  {
    icon: DollarIcon,
    title: "Baixo Investimento Inicial",
    description: "Com apenas R$ 30 mil você pode se tornar licenciado",
  },
  {
    icon: RocketIcon,
    title: "Rápida Expansão",
    description: "Tenha facilidade e escalabilidade para expandir suas unidades e regiões atendidas",
  },
  {
    icon: ClockIcon,
    title: "Retorno em Menos de 1 Ano",
    description: "Retorne o investimento inicial em menos de 1 ano e comece a lucrar após esse período",
  },
  {
    icon: DashboardIcon,
    title: "Gestão em Tempo Real",
    description: "Acompanhe as vendas, gerencie o estoque e reposição de produtos em tempo real, pelo computador ou celular",
  },
  {
    icon: CreditCardIcon,
    title: "Receba de Diversas Formas",
    description: "Seus clientes podem pagar com débito, crédito, voucher alimentação ou refeição, PIX",
  },
  {
    icon: SettingsIcon,
    title: "Customização de Produtos",
    description: "Adapte o portfólio de produtos de acordo com os hábitos dos consumidores de cada ponto de venda",
  },
];

export function AdvantagesSection() {
  return (
    <section id="vantagens" className="pb-6 bg-white scroll-mt-20">
      <div className="container mx-auto px-4">
        <AnimateOnScroll animation="fadeInUp" delay={0.1} duration={0.8}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-dark mb-3">
              Vantagens de Se Tornar um Licenciado
            </h2>
            <p className="text-lg text-gray-medium max-w-2xl mx-auto">
              Tudo o que você precisa para construir um negócio de sucesso
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {advantages.map((advantage, index) => (
            <AnimateOnScroll 
              key={index} 
              animation="fadeInUp" 
              delay={0.2 + (index * 0.1)} 
              duration={0.6}
            >
              <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                <div className="w-14 h-14 mx-auto mb-3 bg-primary-light rounded-full flex items-center justify-center">
                  <advantage.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-base font-bold text-gray-dark mb-2">
                  {advantage.title}
                </h3>
                <p className="text-gray-medium text-xs">
                  {advantage.description}
                </p>
              </Card>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
