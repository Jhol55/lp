'use server';

import { api } from '@/services/api.service';

/**
 * Exemplo de Server Action para demonstrar o padrão
 * Este arquivo pode ser usado como template para novas actions
 */

const EXAMPLE_ENDPOINT = process.env.EXAMPLE_ENDPOINT || '/api/example';

/**
 * Exemplo de Server Action
 * @param {Object} data - Dados para enviar
 * @returns {Promise<{success: boolean, data?: any, error?: string}>}
 */
export async function exampleAction(data) {
  // Validação server-side
  if (!data || typeof data !== 'object') {
    return { success: false, error: 'Dados inválidos' };
  }

  // Requisição usando o serviço genérico
  const result = await api.post(EXAMPLE_ENDPOINT, data);

  if (!result.success) {
    return {
      success: false,
      error: result.error || 'Erro ao processar requisição',
    };
  }

  return { success: true, data: result.data };
}

/**
 * Exemplo de GET request
 */
export async function getExampleData(id) {
  if (!id) {
    return { success: false, error: 'ID é obrigatório' };
  }

  const result = await api.get(`${EXAMPLE_ENDPOINT}/${id}`);

  if (!result.success) {
    return {
      success: false,
      error: result.error || 'Erro ao buscar dados',
    };
  }

  return { success: true, data: result.data };
}
