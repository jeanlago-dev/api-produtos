# 01 — Arquitetura inicial proposta

## Objetivo
Definir uma arquitetura simples, didática e evolutiva para a API.

## Estilo arquitetural inicial

Arquitetura em camadas com MVC simplificado:

- **Routes**: mapeamento HTTP.
- **Controllers**: recebem requisição e devolvem resposta.
- **Services**: regras de negócio.
- **Repositories/ORM**: acesso a dados com TypeORM.
- **Entities**: modelo relacional mapeado para classes.

Essa estrutura mantém separação suficiente sem excesso de abstrações.

## Estrutura de diretórios sugerida (fase inicial)

```text
src/
  app.ts
  server.ts
  config/
    data-source.ts
  modules/
    categories/
      category.entity.ts
      category.repository.ts
      category.service.ts
      category.controller.ts
      category.routes.ts
    products/
      product.entity.ts
      product.repository.ts
      product.service.ts
      product.controller.ts
      product.routes.ts
  shared/
    errors/
      app-error.ts
      error-handler.middleware.ts
```

> Observação: essa estrutura pode começar menor e crescer por sessão.

## Modelo inicial do banco de dados

### Entidade: Category

Campos iniciais:
- `id` (PK, uuid ou serial)
- `name` (texto, único)
- `description` (texto opcional)
- `created_at` (timestamp)
- `updated_at` (timestamp)

### Entidade: Product

Campos iniciais:
- `id` (PK, uuid ou serial)
- `name` (texto)
- `description` (texto)
- `price` (decimal numérico positivo)
- `stock` (inteiro >= 0)
- `brand` (texto)
- `category_id` (FK para `categories.id`)
- `created_at` (timestamp)
- `updated_at` (timestamp)

### Relacionamento inicial

- `Category (1) -> (N) Product`

## Regras iniciais de domínio (mínimas)

- produto deve pertencer a uma categoria existente;
- `price` deve ser maior que zero;
- `stock` não pode ser negativo;
- nome de categoria deve ser único.

## Componentes que ficam para etapas futuras

- autenticação/JWT;
- RBAC;
- pedidos e itens de pedido;
- testes automatizados completos;
- Docker e CI/CD.
