import cors from 'cors';
import express from 'express';
import {
  category_router,
  film_router,
  participant_router,
  review_router,
  seat_router,
  user_router,
} from './routers';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();

// CORS middleware
app.use(cors());

// JSON middleware
app.use(express.json());

// parse URL encoded strings
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
  res.send({ message: 'Hello API' });
});
app.use('/categories', category_router);
app.use('/films', film_router);
app.use('/seats', seat_router);
app.use('/user', user_router);
app.use('/participants', participant_router);
app.use('/reviews', review_router);

app.use((_req, res) => {
  res.status(404).send('Not found');
});

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
