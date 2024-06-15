FROM node:18-alpine

WORKDIR /app/apps/frontend

COPY package.json ./
COPY nx.json ./
COPY project*.json ./
COPY . .

RUN npm install -g nx
RUN npm install

RUN npx nx build frontend

EXPOSE ${FRONTEND_PORT}

CMD ["nx", "serve", "frontend"]
