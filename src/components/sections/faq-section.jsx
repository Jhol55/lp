'use client';

import { Accordion } from "@/components/ui/accordion";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

const faqs = [
  {
    question: "Preciso ser formado em nutrição?",
    answer: "Não! Nosso programa é desenvolvido para qualquer pessoa que queira trabalhar com alimentação saudável. Você receberá todo o conhecimento necessário e certificação para atuar com segurança.",
  },
  {
    question: "Quanto tempo leva para começar a faturar?",
    answer: "O retorno do investimento acontece em menos de 1 ano. Após concluir o programa de capacitação e receber sua certificação, você já pode começar a atender clientes e faturar.",
  },
  {
    question: "Qual o investimento necessário?",
    answer: "O investimento inicial é de R$ 30 mil, que inclui todo o suporte necessário, sistema de gestão, treinamento completo e certificação profissional.",
  },
  {
    question: "Terei suporte durante o programa?",
    answer: "Sim! Você terá acesso a suporte completo durante todo o programa, incluindo acompanhamento contínuo, sistema de gestão em tempo real e equipe disponível para tirar dúvidas.",
  },
  {
    question: "O certificado é reconhecido?",
    answer: "Sim, o certificado é profissional e reconhecido, permitindo que você atue com segurança e credibilidade no mercado de alimentação saudável.",
  },
  {
    question: "Posso trabalhar de qualquer lugar?",
    answer: "Com nosso modelo de negócio, você tem flexibilidade para atuar em diferentes locais, adaptando o portfólio de produtos conforme as necessidades de cada região.",
  },
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
