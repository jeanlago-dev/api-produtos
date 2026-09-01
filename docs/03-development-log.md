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

## Sessão 003 — Auditoria da Fase 0

### Objetivo
Revisar o estado real após o merge da Fase 0, validar a configuração atual e alinhar a documentação com o que está efetivamente implementado.

### Alterações
- atualização do `README.md` para UTF-8 e conteúdo alinhado ao estado atual do projeto;
- registro explícito de que a Fase 0 está parcialmente concluída.

### Verificações executadas
- `npm ci`;
- `npm run typecheck`;
- `npm run build`;
- `npm run start`;
- `npm test`;
- `npm run clean` + rebuild.

### Resultado da auditoria
- fundação Node.js + TypeScript está funcional;
- scripts da base estão operacionais;
- Express e rota de saúde ainda não foram implementados;
- Fase 0 permanece parcial (0.1 concluída, 0 completa pendente).

### Problemas encontrados
- `README.md` estava com codificação UTF-16/CRLF e conteúdo mínimo, causando inconsistência documental.

### Decisões
- corrigir apenas documentação, sem avançar para Fase 1 e sem implementar novas funcionalidades.

### Commit
- `docs: align phase 0 documentation with current status`

---

## Sessão 004 — Conclusão da Fase 0.2 com Express

### Objetivo
Concluir a Fase 0 com a camada web mínima em Express e uma rota de health check funcional.

### Alterações
- instalação de `express` e `@types/express`;
- criação de `src/app.ts` para configuração da aplicação;
- criação de `src/server.ts` para inicialização do listener HTTP;
- atualização de `src/main.ts` para iniciar o servidor;
- criação de `src/routes/health.routes.ts` com `GET /health`;
- atualização de documentação arquitetural e decisões;
- criação do guia da sessão em `docs/session-guides/00.2-express-healthcheck.md`.

### Problemas encontrados
- tentativa inicial de validação com processo em background falhou ao encerrar PID de forma inválida no shell.

### Solução
- validação da execução ajustada para fluxo com servidor em sessão assíncrona, teste com `curl` e encerramento controlado.

### Decisões
- separar `app` e `server` já nesta fase para manter responsabilidades claras sem introduzir camadas adicionais.

### Testes
- `npm run typecheck`;
- `npm run build`;
- `npm run start`;
- `curl http://127.0.0.1:3000/health`;
- `npm test`.

### Commit
- `chore: add express dependencies`
- `feat: add express app with health route`
- `docs: document phase 0.2 express implementation`

---

## Próximas sessões sugeridas

1. configuração PostgreSQL + TypeORM;
2. criação das entidades iniciais e migrations;
3. CRUD básico de produtos;
4. CRUD básico de categorias.
