# 01 — Arquitetura implementada (estado atual)

## Objetivo
Registrar a arquitetura realmente implementada até a conclusão da Fase 0.

## Estilo arquitetural atual

Estrutura mínima de aplicação web com Express:

- **App (`src/app.ts`)**: cria e configura a instância do Express e registra rotas;
- **Server (`src/server.ts`)**: responsabilidade de inicializar o listener HTTP;
- **Entry point (`src/main.ts`)**: inicia o servidor;
- **Routes (`src/routes/`)**: definição das rotas HTTP da fase atual.

Essa separação mantém responsabilidades básicas claras sem introduzir camadas prematuras.

## Estrutura de diretórios atual

```text
src/
  app.ts
  server.ts
  main.ts
  routes/
    health.routes.ts
```

## Endpoint implementado na Fase 0

- `GET /health` retorna status `200` com payload JSON de saúde da API.

## Componentes ainda não implementados

- persistência com PostgreSQL/TypeORM;
- entidades e regras de domínio (`Category`/`Product`);
- camadas de controller/service/repository;
- autenticação e autorização;
- documentação Swagger;
- observabilidade avançada e testes automatizados.
