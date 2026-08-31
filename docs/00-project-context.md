# 00 — Contexto atual do projeto

## Objetivo deste documento
Registrar o estado inicial real do repositório antes da implementação da API.

## Estrutura atual do repositório

Estrutura identificada:

- `README.md`
- `.git/` (metadados do Git)

## Arquivos existentes

### `README.md`
- Existe apenas um conteúdo inicial mínimo (título do repositório).
- Ainda não há documentação técnica do projeto.

## Estado atual do projeto

No estado atual:

- não existe aplicação Node.js inicializada;
- não existe `package.json`;
- não existe configuração TypeScript;
- não existe estrutura de pastas de código (`src`, `routes`, `controllers`, etc.);
- não existe configuração de Express;
- não existe configuração de banco PostgreSQL;
- não existe TypeORM;
- não existem entidades, migrations, rotas ou testes.

Resumo: o projeto está em fase **pré-implementação**, ideal para começar com base didática e incremental.

## Escopo inicial confirmado

Para a primeira fase técnica:

- foco em API REST educacional para produtos de tecnologia;
- início com domínio reduzido;
- entidades iniciais: **Category** e **Product**;
- sem autenticação, sem pedidos e sem funcionalidades avançadas nesta etapa.

## Princípios pedagógicos que guiarão a evolução

1. evolução por sessões pequenas;
2. cada sessão com objetivo conceitual único;
3. commits curtos e sem acúmulo de funcionalidades;
4. documentação contínua da aprendizagem e decisões;
5. evitar complexidade prematura.
