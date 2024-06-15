# Backend Dockerfile
FROM node:18-alpine

WORKDIR /app

COPY project*.json ./
COPY tsconfig*.json ./
COPY . .

RUN npm install

RUN npx nx build backend

EXPOSE ${BACKEND_PORT}

CMD ["npx", "nx", "serve", "backend"]
