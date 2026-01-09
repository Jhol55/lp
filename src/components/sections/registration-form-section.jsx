'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

export function RegistrationFormSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    investment: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="formulario" className="py-12 bg-gray-light scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Banner */}
          <AnimateOnScroll animation="fadeInDown" delay={0.1} duration={0.8}>
            <div className="bg-primary rounded-t-2xl p-6 md:p-8 text-center text-white mb-0">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                Garanta Sua Vaga Agora!
              </h2>
              <p className="text-base md:text-lg text-white/90">
                Preencha o formulário e receba todas as informações sobre o programa
              </p>
            </div>
          </AnimateOnScroll>

          {/* Form */}
          <AnimateOnScroll animation="fadeInUp" delay={0.2} duration={0.8}>
            <form onSubmit={handleSubmit} className="bg-white rounded-b-2xl shadow-lg p-6 md:p-8 space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-dark font-semibold mb-1.5 text-sm">
                Nome Completo *
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Digite seu nome completo"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-dark font-semibold mb-1.5 text-sm">
                E-mail *
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Digite seu melhor Email"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-gray-dark font-semibold mb-1.5 text-sm">
                WhatsApp *
              </label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Digite seu WhatsApp"
                required
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="investment" className="block text-gray-dark font-semibold mb-1.5 text-sm">
                Investimentos: *
              </label>
              <Select
                id="investment"
                name="investment"
                required
                value={formData.investment}
                onChange={handleChange}
              >
                <option value="">Selecione uma opção</option>
                <option value="25-30">25.000 a 30.000</option>
                <option value="30-50">30.000 a 50.000</option>
                <option value="50+">Mais de 50.000</option>
              </Select>
            </div>

            <Button type="submit" variant="primary" className="w-full py-3 text-base">
              QUERO COMEÇAR AGORA
            </Button>

              <p className="text-center text-sm text-gray-400 mt-4">
                Seus dados estão seguros e não serão compartilhados com terceiros
              </p>
            </form>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
