# Task Management API

Este é um projeto de API REST para gerenciamento de tarefas e comentários, construído com NestJS, Prisma e PostgreSQL, containerizado com Docker.

## 🚀 Tecnologias

- [NestJS](https://nestjs.com/)
- [Prisma](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [Docker](https://www.docker.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Swagger](https://swagger.io/) (documentação automática)

## 📋 Pré-requisitos

Antes de começar, você precisa ter instalado em sua máquina:

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

## 🔧 Instalação e Execução com Docker

1. Clone o repositório:
   ```bash
   git clone https://github.com/gabriel-teotonio/backend-task-bitx.git
   cd backend-task-bitx
   ```

2. Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@db:5432/tasksdb?schema=public"
   POSTGRES_USER=postgres
   POSTGRES_PASSWORD=postgres
   POSTGRES_DB=tasksdb
   ```

3. Execute o projeto com Docker Compose:
   ```bash
   docker compose up -d --build
   ```

   A API estará disponível em `http://localhost:3000`

4. Para parar os containers:
   ```bash
   docker compose down
   ```

## 📚 Documentação da API (Swagger)

Após subir a aplicação, acesse a documentação interativa em:

```
http://localhost:3000/api
```

Lá você pode testar todos os endpoints, ver exemplos de payloads e schemas.

## 📝 Endpoints da API

### Tasks
- `GET /tasks` - Lista todas as tarefas
- `POST /tasks` - Cria uma nova tarefa
- `PATCH /tasks/:id` - Atualiza uma tarefa
- `PATCH /tasks/:id/status` - Atualiza apenas o status da tarefa
- `DELETE /tasks/:id` - Remove uma tarefa

### Comments
- `GET /comments?taskId=1` - Lista comentários de uma tarefa
- `POST /comments` - Cria um comentário para uma tarefa
- `PATCH /comments/:id` - Atualiza um comentário
- `DELETE /comments/:id` - Remove um comentário

## 🛠️ Desenvolvimento

Se você quiser rodar o projeto em modo de desenvolvimento:

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Gere o client Prisma:
   ```bash
   npx prisma generate
   ```

3. Execute as migrações do banco de dados:
   ```bash
   npx prisma migrate dev
   ```

4. Inicie o projeto em modo de desenvolvimento:
   ```bash
   npm run start:dev
   ```

## ⚙️ Scripts Disponíveis

- `npm run start:dev` - Roda o projeto em modo de desenvolvimento
- `npm run build` - Compila o projeto
- `npm run start:prod` - Roda o projeto em modo de produção
- `npm run test` - Executa os testes unitários
- `npm run test:e2e` - Executa os testes end-to-end
- `npm run test:cov` - Gera o relatório de cobertura de testes

## 🧩 Estrutura do Projeto

- `src/tasks` - Domínio de tarefas (controllers, services, repository, DTOs)
- `src/comments` - Domínio de comentários
- `src/prisma` - Serviço de integração com o Prisma
- `prisma/schema.prisma` - Definição do modelo de dados

O projeto segue princípios de Clean Architecture, separando regras de negócio, acesso a dados e exposição de rotas.

## 🧪 Testes

Para rodar os testes:
```bash
npm run test         # Testes unitários
npm run test:e2e     # Testes end-to-end
npm run test:cov     # Cobertura de testes
```

## 📄 Licença

Este projeto está sob a licença MIT - veja o arquivo [LICENSE.md](LICENSE.md) para detalhes

```