## FILM-FESTIVAL
## Description
This project was made during PB138 course of Masaryk University, Faculty of Informatics.

## Installation
```
git clone git@github.com:katyadam/film-festival.git
cd film-festival
npm i
npm install -g nx

-- Generate prisma schema for ORM --
npx prisma generate --schema=./apps/backend/prisma/schema.prisma
npx prisma migrate dev --name 'last' --schema=./apps/backend/prisma/schema.prisma

-- Run postgresql database and redis --
docker run -d --name mydb -p 5432:5432 -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=mydb postgres
docker run --name my-redis-container -p 6379:6379 -d redis

-- Start the app --
nx serve frontend
nx serve backend
```

- backend listening on: http://localhost:4200/
- frontend listening on: http://localhost:3000/
