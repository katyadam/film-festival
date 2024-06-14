import { Film } from '../film/film_types';
import { Review } from '../review/review_types';
import { Seat } from '../seat/seat_types';

export type UserUpdate = {
  email?: string;
  name?: string;
  hashedPassword?: string;
  salt?: string;
};

export type UserCreate = {
  email: string;
  name: string;
  hashedPassword: string;
  salt: string;
};

export type User = UserCreate & {
  id: number;
};

export type UserExtended = User & {
  votes: Film[];
  reviews: Review[];
  seats: Seat[];
};
