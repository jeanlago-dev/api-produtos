# 00 — Roadmap inicial do projeto

## Objetivo
Definir uma evolução progressiva, alinhada ao curso e ao nível iniciante/intermediário.

## Fases de evolução

### Fase 0 — Fundação do projeto
- Inicializar Node.js + TypeScript.
- Configurar Express básico.
- Estruturar pastas iniciais.
- Configurar scripts de execução e build.

### Fase 1 — Persistência e domínio inicial
- Configurar PostgreSQL.
- Integrar TypeORM.
- Criar entidades `Category` e `Product`.
- Criar migrations iniciais.

### Fase 2 — API CRUD de produtos
- Criar rotas CRUD de `Product`.
- Camadas básicas em estilo MVC + Services.
- Validar regras de negócio simples (preço, estoque, categoria existente).
- Tratamento de erros centralizado (versão inicial).

### Fase 3 — Categorias e relacionamento
- CRUD de `Category`.
- Relacionamento `Category 1:N Product`.
- Filtros por categoria/marca/preço.
- Paginação e ordenação simples.

### Fase 4 — Autenticação e autorização (quando chegar no conteúdo)
- Introduzir `User`.
- Login com JWT.
- Autorização por papel (RBAC inicial).

### Fase 5 — Pedidos (quando fizer sentido no curso)
- Introduzir `Order` e `OrderItem`.
- Controle de estoque na criação de pedido.
- Cálculo de total do pedido.

### Fase 6 — Qualidade e operação
- Logging.
- Swagger/OpenAPI.
- Testes unitários e de integração.
- Docker.
- CI/CD básico.

## Critérios de progressão entre fases

- fase atual está funcional e testável;
- conceitos da fase estão compreendidos;
- documentação da sessão foi registrada;
- commits representam mudanças pequenas e claras.

## Estratégia de validação por fase

- executar aplicação localmente;
- testar endpoints com cliente HTTP (Insomnia/Postman/curl);
- validar persistência no banco;
- registrar evidências no log de desenvolvimento.
