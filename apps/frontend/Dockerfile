FROM node:18-alpine

WORKDIR /app

COPY project*.json ./
COPY . .

RUN npm install

RUN npx nx build frontend

EXPOSE 3000

CMD ["npx", "nx", "serve", "frontend"]
