# Server Actions

Este diretório contém as Server Actions do projeto, seguindo a arquitetura Next.js 14 com App Router.

## Estrutura

Cada Server Action deve:
- Ter a diretiva `'use server'` no topo do arquivo
- Usar o serviço genérico `@/services/api.service` para requisições HTTP
- Implementar validação server-side dos dados
- Retornar objetos padronizados: `{ success: boolean, data?: any, error?: string }`

## Exemplo de Uso

### Criando uma nova Server Action

```javascript
'use server';

import { api } from '@/services/api.service';

const MY_ENDPOINT = process.env.MY_ENDPOINT || '/api/my-endpoint';

export async function myAction(data) {
  // Validação
  if (!data) {
    return { success: false, error: 'Dados inválidos' };
  }

  // Requisição usando o serviço genérico
  const result = await api.post(MY_ENDPOINT, data);

  if (!result.success) {
    return {
      success: false,
      error: result.error || 'Erro ao processar requisição',
    };
  }

  return { success: true, data: result.data };
}
```

## Serviço de API

Todas as requisições HTTP devem usar o serviço genérico em `@/services/api.service`:

- `api.get(endpoint, options)` - GET request
- `api.post(endpoint, body, options)` - POST request
- `api.put(endpoint, body, options)` - PUT request
- `api.patch(endpoint, body, options)` - PATCH request
- `api.delete(endpoint, options)` - DELETE request

## Configuração de Endpoints

Endpoints podem ser configurados via variáveis de ambiente:
- `API_URL` ou `NEXT_PUBLIC_API_URL` - URL base da API
- `{ACTION}_ENDPOINT` - Endpoint específico para cada action (ex: `REGISTRATIONS_ENDPOINT`)
