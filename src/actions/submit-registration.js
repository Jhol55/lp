'use server';

import { api } from '@/services/api.service';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const REGISTRATIONS_ENDPOINT =
  process.env.REGISTRATIONS_ENDPOINT || '/api/registrations';

/**
 * Valida os dados do formulário de registro
 * @param {Object} formData - Dados do formulário
 * @returns {{valid: boolean, error?: string}}
 */
function validateRegistrationData(formData) {
  const { name, email, phone, investment, startTimeline } = formData || {};

  if (!name || name.trim().length < 3) {
    return { valid: false, error: 'Nome inválido' };
  }

  if (!email || !EMAIL_REGEX.test(email)) {
    return { valid: false, error: 'E-mail inválido' };
  }

  if (!phone || phone.trim().length < 6) {
    return { valid: false, error: 'WhatsApp inválido' };
  }

  if (!investment) {
    return { valid: false, error: 'Selecione um investimento' };
  }

  if (!startTimeline) {
    return { valid: false, error: 'Selecione quando pretende iniciar' };
  }

  return { valid: true };
}

/**
 * Server Action para submeter formulário de registro
 * @param {Object} formData - Dados do formulário { name, email, phone, investment, startTimeline }
 * @returns {Promise<{success: boolean, error?: string}>}
 */
export async function submitRegistration(formData) {
  // Validação server-side
  const validation = validateRegistrationData(formData);
  if (!validation.valid) {
    return { success: false, error: validation.error };
  }

  // Validação do endpoint
  if (!REGISTRATIONS_ENDPOINT) {
    console.error('REGISTRATIONS_ENDPOINT não configurado');
    return {
      success: false,
      error: 'Configuração do servidor incompleta. Entre em contato com o suporte.',
    };
  }

  // Prepara os dados para envio
  const { name, email, phone, investment, startTimeline } = formData;
  
  // Limpa o telefone: remove espaços, parênteses, traços e outros caracteres especiais
  const cleanPhone = phone.replace(/[\s()\-+]/g, '');
  
  const payload = {
    name: name.trim(),
    email: email.trim().toLowerCase(),
    phone: cleanPhone,
    investment,
    startTimeline,
  };

  // Faz a requisição usando o serviço genérico
  const result = await api.post(REGISTRATIONS_ENDPOINT, payload);

  if (!result.success) {
    return {
      success: false,
      error: result.error || 'Não foi possível enviar seus dados. Tente novamente.',
    };
  }

  return { success: true };
}
