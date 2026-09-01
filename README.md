# api-produtos

API REST educacional para produtos de tecnologia, evoluída por fases.

## Estado atual (Fase 0 concluída)

A base inicial da Fase 0 está concluída:

- projeto Node.js + TypeScript inicializado;
- scripts npm básicos configurados;
- compilação TypeScript funcionando;
- servidor HTTP com Express;
- separação inicial entre `app` e `server`;
- rota de saúde em `GET /health`.

## Scripts

- `npm run dev`
- `npm run typecheck`
- `npm run build`
- `npm run start`
- `npm run clean`
- `npm test`

## Validação rápida

```bash
npm ci
npm run typecheck
npm run build
npm run start
npm test
```

Após iniciar a aplicação com `npm run start`, teste:

```bash
curl http://127.0.0.1:3000/health
```

Resposta esperada:

```text
{"status":"ok","message":"API Produtos is running"}
```

## Documentação

- `/home/runner/work/api-produtos/api-produtos/docs/00-project-roadmap.md`
- `/home/runner/work/api-produtos/api-produtos/docs/03-development-log.md`
- `/home/runner/work/api-produtos/api-produtos/docs/session-guides/00.1-inicializacao-node-typescript.md`
- `/home/runner/work/api-produtos/api-produtos/docs/session-guides/00.2-express-healthcheck.md`
