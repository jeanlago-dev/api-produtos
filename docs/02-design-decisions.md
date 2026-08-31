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
