# Task Management API

Este é um projeto de API REST para gerenciamento de tarefas construído com NestJS, Prisma e PostgreSQL, containerizado com Docker.

## 🚀 Tecnologias

- [NestJS](https://nestjs.com/)
- [Prisma](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [Docker](https://www.docker.com/)
- [TypeScript](https://www.typescriptlang.org/)

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
   DATABASE_URL=postgres://postgres:postgres@db:5432/taskbitx
   POSTGRES_USER=postgres
   POSTGRES_PASSWORD=postgres
   POSTGRES_DB=taskbitx
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

## 📝 Endpoints da API

### Tasks
- `GET /tasks` - Lista todas as tarefas
- `GET /tasks/:id` - Busca uma tarefa específica
- `POST /tasks` - Cria uma nova tarefa
- `PATCH /tasks/:id` - Atualiza uma tarefa
- `DELETE /tasks/:id` - Remove uma tarefa

## 🛠️ Desenvolvimento

Se você quiser rodar o projeto em modo de desenvolvimento:

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Gere o cliente Prisma:
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
- `npm run test` - Executa os testes
- `npm run test:e2e` - Executa os testes end-to-end

## 📄 Licença

Este projeto está sob a licença MIT - veja o arquivo [LICENSE.md](LICENSE.md) para detalhes

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```