import { Film } from '../film/film_types';
import { Review } from '../review/review_types';
import { Seat } from '../seat/seat_types';

export type UserBase = {
  email: string;
  name: string;
  hashedPassword: string;
  salt: string;
  isAdmin: boolean;
};

export type UserCreate = UserBase;
export type UserUpdate = Partial<UserBase>;

export type User = UserCreate & {
  id: number;
};

export type UserExtended = User & {
  votes: Film[];
  reviews: Review[];
  seats: Seat[];
};
