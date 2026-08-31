# 00 — Roadmap pedagógico do projeto

## Objetivo
Organizar a evolução da API de produtos de tecnologia para acompanhar o curso, priorizando aprendizagem progressiva e domínio dos fundamentos.

## Visão geral das fases

| Fase | Conteúdo do curso | Funcionalidade | Conceitos | Pré-requisitos | Critério de conclusão |
| ---- | ----------------- | -------------- | --------- | -------------- | --------------------- |
| 0. Fundação | Módulo 2, Semanas 1–2 (Node.js, npm, Express, TS setup) | Projeto inicial executando servidor HTTP | organização de projeto, scripts, módulos, app/server | JS/TS básico, Git | servidor sobe localmente, rotas de saúde respondem, estrutura entendida |
| 1. Persistência | Módulo 2, Semana 3 (PostgreSQL, TypeORM, entities, repositories) | Conexão com banco e entidades iniciais | modelagem relacional, ORM, migrations | Fase 0 + SQL/PostgreSQL (Módulo 1) | banco conectado, tabelas criadas via migration, CRUD básico persistindo |
| 2. CRUD + MVC + Services | Módulo 2, Semana 4 (rotas, REST, MVC, services, erros) | CRUD de Product com regras básicas | separação de responsabilidades, validações, erro centralizado | Fase 1 | endpoints CRUD funcionam com tratamento de erros consistente |
| 3. Relacionamentos | Módulo 2, Semanas 3–4 (modelagem e CRUD relacional) | Category + vínculo Product→Category | cardinalidade 1:N, integridade referencial | Fase 2 | CRUD de categorias e vínculo com produto funcionando |
| 4. Autenticação e autorização | Módulo 2, Semana 5 (JWT, RBAC, Passport.js) | login e controle de acesso por papéis | autenticação, autorização, papéis | Fase 3 | rotas protegidas por perfil e fluxo de login validado |
| 5. Filtros e paginação | Módulo 2, Semana 6 (query params, filtros, paginação) | listagem avançada de produtos | filtros por query, ordenação, paginação | Fase 4 | listagem filtrável/paginada documentada e testada |
| 6. Logging, debugging e Swagger | Módulo 2, Semana 6 (Winston, debugging, Swagger) | observabilidade e documentação da API | logs estruturados, depuração, OpenAPI | Fase 5 | logs úteis, documentação navegável e endpoints mapeados |
| 7. Testes e TDD | Módulo 2, Semana 8 (Jest, unitários, TDD) + Semana 9 (integração/cobertura) | suíte inicial de testes automatizados | unitário, integração, ciclo TDD, cobertura | Fase 6 | testes executam no CI/local, cobertura mínima definida |
| 8. Segurança | Módulo 2, Semana 9 (SQLi, XSS, CSRF, segurança) | endurecimento da API | validação de entrada, proteção de credenciais/sensíveis, mitigação de ataques | Fase 7 + Fase 4 | riscos principais mapeados e mitigados com testes de segurança básicos |
| 9. Docker, DevOps e CI/CD | Módulo 2, Semana 10 (containers, DevOps, CI/CD) | padronizar execução e pipeline | containerização, automação de checks | Fase 8 | app sobe em container e pipeline valida build/testes |
| 10. Build e deploy | Módulo 2, Semanas 7 e 12 (build, deploy, projeto final) | publicação da API em ambiente alvo | processo de build, variáveis de ambiente, deploy | Fase 9 | build reproduzível e deploy funcional com checklist |

---

## Diretrizes contínuas (todas as fases)

Aplicar continuamente:

- nomes claros e consistentes;
- responsabilidades bem definidas por camada;
- redução de duplicação;
- tratamento de erros;
- SOLID apenas quando resolver problema real;
- refatoração incremental;
- evitar Design Patterns apenas por demonstração.

Sempre que um padrão for adotado, documentar:

- problema concreto;
- alternativa mais simples considerada;
- motivo da escolha;
- trade-offs.

---

## Fase 0 — Fundação

**Acompanha:** Semana 1–2 do Módulo 2 (Node.js, npm, Express, setup inicial).  
**Pré-requisitos:** fundamentos de JS/TS, terminal, Git/GitHub.  
**Novos conhecimentos:** bootstrap de API, scripts de execução, organização base da aplicação.

### Sessões sugeridas
1. Inicializar projeto Node/TS e scripts.
2. Subir servidor Express mínimo.
3. Organizar estrutura inicial de pastas e arquivos de entrada.

### Commits esperados (aprox.)
- `chore: initialize node and typescript project`
- `feat: configure basic express server`
- `chore: organize initial src structure`

---

## Fase 1 — Persistência

**Acompanha:** Semana 3 do Módulo 2 (PostgreSQL, TypeORM, entities, repositories).  
**Pré-requisitos:** Fase 0 + SQL/PostgreSQL do Módulo 1.  
**Novos conhecimentos:** conexão com banco em app real, migrations, modelagem inicial com ORM.

### Sessões sugeridas
1. Configurar conexão PostgreSQL.
2. Configurar TypeORM (`DataSource`).
3. Criar entities `Category` e `Product`.
4. Criar e executar migration inicial.

### Commits esperados (aprox.)
- `chore: configure postgres connection`
- `feat: configure typeorm datasource`
- `feat: add category and product entities`
- `feat: add initial database migration`

---

## Fase 2 — CRUD + MVC + Services

**Acompanha:** Semana 4 do Módulo 2 (rotas, RESTful, MVC, services, erros).  
**Pré-requisitos:** Fase 1.  
**Novos conhecimentos:** fluxo request → controller → service → repository, erros de domínio e HTTP.

### Sessões sugeridas
1. Criar rotas e controller de `Product`.
2. Criar service de `Product` com regras básicas (`price`, `stock`).
3. Implementar tratamento de erros centralizado.
4. Fechar CRUD completo de `Product`.

### Commits esperados (aprox.)
- `feat: add product routes and controller`
- `feat: add product service with business rules`
- `feat: add centralized error handling`
- `feat: complete product crud endpoints`

---

## Fase 3 — Relacionamentos

**Acompanha:** Semanas 3–4 (modelagem relacional aplicada em API).  
**Pré-requisitos:** Fase 2.  
**Novos conhecimentos:** integridade referencial no fluxo da API, validação de vínculo categoria-produto.

### Sessões sugeridas
1. Criar CRUD de `Category`.
2. Vincular `Product` a `Category` de forma obrigatória.
3. Garantir validações de categoria existente.

### Commits esperados (aprox.)
- `feat: add category crud`
- `feat: link products to categories`
- `feat: validate product category references`

---

## Fase 4 — Autenticação e autorização

**Acompanha:** Semana 5 (JWT, criptografia, RBAC, Passport.js).  
**Pré-requisitos:** Fase 3.  
**Novos conhecimentos:** identidade de usuário, login, proteção de rotas e regras por papel.

### Sessões sugeridas
1. Criar entidade/base de usuários.
2. Implementar cadastro/login com senha segura.
3. Implementar JWT.
4. Aplicar autorização por papéis (ADMIN/USER).

### Commits esperados (aprox.)
- `feat: add user entity and repository`
- `feat: add authentication service and login endpoint`
- `feat: protect routes with jwt middleware`
- `feat: add role-based authorization rules`

---

## Fase 5 — Filtros e paginação

**Acompanha:** Semana 6 (query parameters, filtros, paginação).  
**Pré-requisitos:** Fase 4.  
**Novos conhecimentos:** consultas dinâmicas simples e respostas paginadas.

### Sessões sugeridas
1. Filtro por categoria.
2. Filtro por marca e faixa de preço.
3. Paginação e ordenação.

### Commits esperados (aprox.)
- `feat: add product filtering by category`
- `feat: add brand and price filters`
- `feat: add product pagination and sorting`

---

## Fase 6 — Logging, debugging e Swagger

**Acompanha:** Semana 6 (Winston, debugging, Swagger).  
**Pré-requisitos:** Fase 5.  
**Novos conhecimentos:** observabilidade e documentação da API para uso e manutenção.

### Sessões sugeridas
1. Logging estruturado para erros e eventos-chave.
2. Ajustes de debugging no ambiente local.
3. Documentação Swagger/OpenAPI inicial.

### Commits esperados (aprox.)
- `feat: add structured logging with winston`
- `chore: improve debugging configuration`
- `docs: add swagger api documentation`

---

## Fase 7 — Testes e TDD

**Acompanha:** Semana 8 (Jest, unitários, TDD) e parte da Semana 9 (integração, cobertura).  
**Pré-requisitos:** Fase 6.  
**Novos conhecimentos:** estratégia de testes por camada e evolução segura do código.

### Introdução por tipo

- **Testes unitários (primeiro):** validar regras de negócio em services com isolamento; feedback rápido.
- **TDD (em funcionalidades novas ou refatorações locais):** escrever teste antes para guiar implementação.
- **Testes de integração (depois):** validar fluxo completo HTTP + banco + camadas.
- **Cobertura (por último da fase):** medir lacunas e definir meta realista inicial.

### Sessões sugeridas
1. Configurar Jest.
2. Criar primeiros testes unitários de services.
3. Aplicar TDD em uma melhoria pequena.
4. Adicionar testes de integração de endpoints críticos.
5. Configurar relatório de cobertura.

### Commits esperados (aprox.)
- `test: configure jest for the project`
- `test: add unit tests for product service`
- `test: add integration tests for product endpoints`
- `test: enable coverage report`

---

## Fase 8 — Segurança

**Acompanha:** Semana 9 (segurança em APIs).  
**Pré-requisitos:** Fase 7 e fundamentos de autenticação da Fase 5.  
**Novos conhecimentos:** segurança como tema transversal, além de login.

### Tópicos obrigatórios da fase

- SQL Injection;
- XSS;
- CSRF;
- validação de entrada;
- proteção de credenciais;
- JWT seguro (expiração/validação/segredo);
- autorização consistente;
- gestão de informações sensíveis.

### Sessões sugeridas
1. Revisar validação de entrada e sanitização.
2. Revisar queries/ORM para reduzir risco de SQL Injection.
3. Revisar respostas e payloads para mitigar XSS.
4. Definir estratégia para CSRF conforme tipo de autenticação.
5. Revisar secrets/env e política de credenciais.

### Commits esperados (aprox.)
- `security: strengthen input validation rules`
- `security: harden auth and jwt configuration`
- `security: protect sensitive configuration and credentials`
- `test: add basic security regression tests`

---

## Fase 9 — Docker, DevOps e CI/CD

**Acompanha:** Semana 10 (Docker, DevOps, CI/CD).  
**Pré-requisitos:** Fase 8.  
**Novos conhecimentos:** padronização de ambiente e validação automatizada.

### Sessões sugeridas
1. Criar Dockerfile da API.
2. Orquestrar API + banco para ambiente local.
3. Criar pipeline CI para lint/test/build.

### Commits esperados (aprox.)
- `chore: add dockerfile for api`
- `chore: add container orchestration for local development`
- `ci: add pipeline for lint test and build`

---

## Fase 10 — Build e deploy

**Acompanha:** Semanas 7 e 12 (build, deploy, entrega de projeto).  
**Pré-requisitos:** Fase 9.  
**Novos conhecimentos:** empacotamento e publicação com checklist de release.

### Sessões sugeridas
1. Definir pipeline de build de produção.
2. Configurar deploy no ambiente alvo.
3. Executar checklist de pré-release.

### Commits esperados (aprox.)
- `chore: configure production build process`
- `ci: add deploy workflow`
- `docs: add release and deploy checklist`

---

## Critérios de progressão entre fases

Manter os critérios atuais:

- fase atual está funcional e testável;
- conceitos da fase estão compreendidos;
- documentação da sessão foi registrada;
- commits representam mudanças pequenas e claras.

Adicionar critérios de aprendizagem:

- consigo explicar a solução;
- consigo modificar a solução;
- consigo reproduzir uma versão simplificada sem copiar;
- consigo diagnosticar erros básicos da funcionalidade.

---

## Regra de sessões (todas as fases)

Cada sessão deve gerar:

- uma unidade funcional ou conceitual pequena;
- testes compatíveis com o estágio do projeto;
- documentação da sessão em `docs/session-guides/`;
- um ou mais commits pequenos e temáticos.

Sequência sugerida por sessão:

Planejamento → implementação → teste → revisão → documentação → commit.
