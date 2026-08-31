# 03 — Development log

Registro cronológico das sessões de evolução do projeto.

---

## Sessão 001 — Diagnóstico inicial e planejamento da base

### Objetivo
Mapear o estado real do repositório e definir arquitetura/roadmap inicial antes de codificar.

### Alterações
- criação de `docs/00-project-context.md`;
- criação de `docs/00-project-roadmap.md`;
- criação de `docs/01-architecture.md`;
- criação de `docs/02-design-decisions.md`;
- criação de `docs/03-development-log.md`.

### Problemas encontrados
- repositório praticamente vazio para backend (sem setup Node/TS/Express).

### Decisões
- evoluir em pequenas sessões;
- iniciar domínio com `Category` e `Product`;
- usar arquitetura MVC + Services simples.

### Testes
- não aplicável nesta sessão (somente documentação e planejamento).

### Commit
- `docs: add initial project analysis and roadmap`

---

## Sessão 002 — Inicialização Node.js + TypeScript (Fase 0.1)

### Objetivo
Criar a fundação mínima do projeto com Node.js e TypeScript, sem ainda incluir framework HTTP, banco de dados ou camadas de domínio.

### Alterações
- criação de `package.json` com scripts básicos (`dev`, `build`, `start`, `typecheck`, `clean`);
- criação de `tsconfig.json` com compilação de `src/` para `dist/`;
- criação de `.gitignore` para artefatos Node/TypeScript e arquivos de ambiente;
- criação de `src/main.ts` como ponto de entrada inicial;
- criação de `docs/session-guides/00.1-inicializacao-node-typescript.md`.

### Problemas encontrados
- `README.md` está com codificação inválida, afetando texto automático gerado pelo `npm init`.

### Decisões
- manter o escopo estritamente na fundação (sem Express, sem PostgreSQL, sem TypeORM);
- adotar modo `NodeNext` no TypeScript para compatibilidade com versões atuais do compilador.

### Testes
- `npm run typecheck`;
- `npm run build`;
- `npm run start`.

### Commit
- `chore: initialize node and typescript foundation`

---

## Próximas sessões sugeridas

1. configuração inicial do Express;
2. configuração PostgreSQL + TypeORM;
3. criação das entidades iniciais e migrations;
4. CRUD básico de produtos.
