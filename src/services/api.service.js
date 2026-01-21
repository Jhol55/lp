/**
 * Serviço genérico para requisições HTTP
 * Framework-agnostic, reutilizável em Server Actions e API Routes
 */

const DEFAULT_BASE_URL =
  process.env.API_URL ||
  process.env.NEXT_PUBLIC_API_URL ||
  '';

/**
 * Faz uma requisição HTTP genérica
 * @param {string} endpoint - Endpoint da API (ex: '/api/registrations' ou URL completa)
 * @param {Object} options - Opções da requisição
 * @param {string} options.method - Método HTTP (GET, POST, PUT, DELETE, etc.)
 * @param {Object} options.body - Corpo da requisição (será convertido para JSON)
 * @param {Object} options.headers - Headers customizados
 * @param {number} options.timeout - Timeout em milissegundos (padrão: 10000)
 * @returns {Promise<{success: boolean, data?: any, error?: string}>}
 */
export async function apiRequest(endpoint, options = {}) {
  // Validação do endpoint
  if (!endpoint || typeof endpoint !== 'string') {
    return {
      success: false,
      error: 'Endpoint não fornecido ou inválido',
    };
  }

  const {
    method = 'GET',
    body = null,
    headers = {},
    timeout = 10000,
  } = options;

  // Constrói a URL completa
  const url = endpoint.startsWith('http') 
    ? endpoint 
    : `${DEFAULT_BASE_URL}${endpoint}`;

  // Configura headers padrão
  const defaultHeaders = {
    'Content-Type': 'application/json',
    ...headers,
  };

  // Configuração do fetch
  const fetchOptions = {
    method,
    headers: defaultHeaders,
    cache: 'no-store',
  };

  // Adiciona body se existir
  if (body && method !== 'GET') {
    fetchOptions.body = JSON.stringify(body);
  }

  try {
    // Cria um AbortController para timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);
    fetchOptions.signal = controller.signal;

    const response = await fetch(url, fetchOptions);
    clearTimeout(timeoutId);

    // Tenta parsear a resposta como JSON
    let data;
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      data = await response.json().catch(() => ({}));
    } else {
      data = await response.text().catch(() => '');
    }

    // Verifica se a resposta foi bem-sucedida
    if (!response.ok) {
      const errorMessage =
        data?.message ||
        data?.error ||
        `Erro ${response.status}: ${response.statusText}` ||
        'Erro ao processar requisição';
      
      return {
        success: false,
        error: errorMessage,
        status: response.status,
      };
    }

    return {
      success: true,
      data,
      status: response.status,
    };
  } catch (error) {
    // Tratamento de erros
    if (error.name === 'AbortError') {
      return {
        success: false,
        error: 'Tempo de requisição excedido. Tente novamente.',
      };
    }

    if (error instanceof TypeError && error.message.includes('fetch')) {
      return {
        success: false,
        error: 'Erro ao conectar com o servidor. Verifique sua conexão.',
      };
    }

    console.error('apiRequest error:', error);
    return {
      success: false,
      error: 'Erro inesperado ao processar requisição. Tente novamente.',
    };
  }
}

/**
 * Métodos helper para facilitar o uso
 */
export const api = {
  get: (endpoint, options = {}) =>
    apiRequest(endpoint, { ...options, method: 'GET' }),

  post: (endpoint, body, options = {}) =>
    apiRequest(endpoint, { ...options, method: 'POST', body }),

  put: (endpoint, body, options = {}) =>
    apiRequest(endpoint, { ...options, method: 'PUT', body }),

  patch: (endpoint, body, options = {}) =>
    apiRequest(endpoint, { ...options, method: 'PATCH', body }),

  delete: (endpoint, options = {}) =>
    apiRequest(endpoint, { ...options, method: 'DELETE' }),
};
