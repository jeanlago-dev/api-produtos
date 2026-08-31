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

## Próximas sessões sugeridas

1. inicialização do projeto Node + TypeScript;
2. configuração inicial do Express;
3. configuração PostgreSQL + TypeORM;
4. criação das entidades iniciais e migrations;
5. CRUD básico de produtos.
