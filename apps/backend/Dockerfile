FROM node:18-alpine

WORKDIR /app/apps/backend

COPY nx.json ./
COPY package.json ./
COPY project*.json ./
COPY tsconfig*.json ./
COPY . .

RUN npm install -g nx

RUN npm install

RUN npx nx build backend

EXPOSE ${BACKEND_PORT}

CMD ["nx", "serve", "backend"]
