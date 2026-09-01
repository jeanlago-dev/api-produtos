# 02 — Design decisions (ADRs)

Este documento registra decisões arquiteturais relevantes do projeto.

---

## ADR-001 — Evolução incremental por sessões curtas

### Contexto
O projeto é didático e acompanha um curso com progressão de conteúdo.

### Problema
Implementar tudo de uma vez reduz aprendizado e aumenta complexidade.

### Alternativas consideradas
- implementar a aplicação completa desde o início;
- evoluir por entregas pequenas e conceituais.

### Decisão
Evoluir o projeto em sessões pequenas, cada uma com objetivo pedagógico claro.

### Justificativa
Facilita estudo, revisão, depuração e reconstrução do projeto pelo aluno.

### Trade-offs
- **Pró**: maior clareza de aprendizado e histórico.
- **Contra**: mais etapas de organização e documentação.

---

## ADR-002 — Iniciar domínio com Category e Product

### Contexto
A aplicação representa uma loja de produtos de tecnologia.

### Problema
Escopo inicial muito amplo (usuários, pedidos, autorização) pode atrasar base técnica.

### Alternativas consideradas
- iniciar com todas as entidades principais;
- iniciar apenas com `Category` e `Product`.

### Decisão
Começar com `Category` e `Product`; introduzir `User`, `Order` e `OrderItem` depois.

### Justificativa
Permite foco em CRUD, relacionamento e API REST antes de segurança e fluxo de compra.

### Trade-offs
- **Pró**: menor risco e curva de aprendizagem controlada.
- **Contra**: funcionalidades de e-commerce ficam incompletas na fase inicial.

---

## ADR-003 — Arquitetura MVC + Services simples

### Contexto
É necessário organizar a API sem overengineering.

### Problema
Projeto sem separação de responsabilidades tende a crescer desorganizado.

### Alternativas consideradas
- arquitetura em camadas simples (routes/controllers/services/repositories);
- arquiteturas mais complexas (múltiplos padrões avançados).

### Decisão
Usar MVC simplificado com camada de Services e TypeORM para persistência.

### Justificativa
Estrutura adequada ao curso, fácil de entender, testar e evoluir.

### Trade-offs
- **Pró**: clareza estrutural com baixa complexidade.
- **Contra**: pode exigir refatorações futuras se o projeto crescer muito.

---

## ADR-004 — Bootstrap inicial sem frameworks externos

### Contexto
A Sessão 0.1 tem objetivo de fundação do projeto Node.js + TypeScript, sem avanço para camadas HTTP e persistência.

### Problema
Adicionar Express e outras dependências já no bootstrap aumentaria complexidade antes da base de compilação e scripts estar estável.

### Alternativas consideradas
- iniciar já com Express e estrutura completa de servidor;
- iniciar apenas com runtime Node + compilação TypeScript + ponto de entrada mínimo.

### Decisão
Iniciar com ponto de entrada TypeScript simples (`src/main.ts`) e scripts de ciclo básico (`dev`, `build`, `start`, `typecheck`), sem framework HTTP nesta sessão.

### Justificativa
Permite validar instalação, compilação e execução antes de incluir novas camadas.

### Trade-offs
- **Pró**: menor risco e melhor foco pedagógico na fundação.
- **Contra**: ainda não entrega endpoint HTTP nesta etapa.

---

## ADR-005 — Separar `app` e `server` ao introduzir Express

### Contexto
A Fase 0.2 adiciona o primeiro servidor HTTP da API com Express.

### Problema
Misturar configuração da aplicação com inicialização do listener HTTP dificulta evolução e testes de integração futuros.

### Alternativas consideradas
- manter tudo no ponto de entrada (`main.ts`);
- separar configuração da aplicação (`app`) da inicialização do servidor (`server`).

### Decisão
Separar `src/app.ts` (configuração do Express e rotas) de `src/server.ts` (startup HTTP), mantendo `src/main.ts` apenas como ponto de inicialização.

### Justificativa
Preserva simplicidade nesta fase e prepara a base para crescimento incremental sem acoplamento desnecessário.

### Trade-offs
- **Pró**: responsabilidades mais claras e estrutura pronta para expansão.
- **Contra**: aumenta em poucos arquivos a estrutura inicial.
