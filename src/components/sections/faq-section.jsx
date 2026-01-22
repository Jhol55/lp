'use client';

import { Accordion } from "@/components/ui/accordion";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

const faqs = [
  {
    question: "Posso começar o licenciamento 3Fit operando de casa?",
    answer: "Sim. A 3Fit permite iniciar a operação a partir de casa, desde que o espaço atenda às exigências mínimas sanitárias e operacionais. Isso reduz drasticamente o investimento inicial e permite validar o negócio antes de evoluir para uma estrutura maior.",
  },
  {
    question: "Preciso ter experiência prévia com alimentação ou cozinha para ser um licenciado 3Fit?",
    answer: "Não. O licenciamento 3Fit foi estruturado para empreendedores. Os produtos chegam prontos, com cardápio validado e padronizado, eliminando a necessidade de produção complexa. Além disso, você recebe treinamento completo, manuais operacionais e suporte contínuo, permitindo operar mesmo sem experiência anterior no segmento.",
  },
  {
    question: "Qual é o investimento inicial para abrir uma unidade licenciada 3Fit?",
    answer: "O investimento inicial é a partir de R$ 14.997, podendo variar conforme o modelo de operação e a cidade. É um valor significativamente menor do que o de licenciamento normal. Todo o detalhamento é apresentado na etapa de apresentação oficial, sempre com foco em retorno, viabilidade e escala do negócio.",
  },
  {
    question: "Quanto tempo leva para começar a operar após a assinatura do contrato?",
    answer: "Após a assinatura do contrato e conclusão do onboarding, a unidade pode iniciar a operação em até 30 dias úteis, dependendo apenas da estrutura mínima e adequação do espaço. Todo o processo é rápido, organizado e guiado passo a passo pela equipe 3Fit.",
  },
  {
    question: "Existe exclusividade de território para o licenciado?",
    answer: "Sim. Cada licenciado opera em uma praça exclusiva, protegendo o investimento e evitando concorrência interna, desde que respeitadas as diretrizes e metas estabelecidas no contrato.",
  }
];

export function FAQSection() {
  return (
    <section id="faq" className="relative py-12 bg-white scroll-mt-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <AnimateOnScroll animation="fadeInUp" delay={0.1} duration={0.8}>
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-dark mb-3">
              Perguntas Frequentes
            </h2>
            <p className="text-lg text-gray-medium">
              Tire suas dúvidas sobre o programa
            </p>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll animation="fadeInUp" delay={0.2} duration={0.8}>
          <Accordion items={faqs} />
        </AnimateOnScroll>
      </div>
    </section>
  );
}
