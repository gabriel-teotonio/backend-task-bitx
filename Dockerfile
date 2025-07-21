FROM node:22-alpine

WORKDIR /app

# Instala dependências
COPY package.json package-lock.json ./
RUN npm install

# Copia o restante do código
COPY . .

# ⚠️ Gera o cliente Prisma antes do build
RUN npx prisma generate

# Faz o build da aplicação NestJS
RUN npm run build

EXPOSE 3000

# Inicia a aplicação em produção
CMD ["npm", "run", "start:prod"]
