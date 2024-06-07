import { Participant } from '../participant/participant_types';
import { Review, User } from '../types';

export type FilmUpdate = {
  name?: string;
  originalName?: string;
  intro?: string;
  picture?: string;
  publishedAt?: number;
  runTimeMinutes?: number;
  categoryID?: number;
};

export type FilmCreate = {
  name: string;
  originalName: string;
  intro: string;
  picture: string;
  publishedAt: number;
  runTimeMinutes: number;
  categoryID: number;
};

export type Film = FilmUpdate & {
  id: number;
};

export type FilmExtended = Film & {
  users: User[];
  reviews: Review[];
  participants: Participant[];
};
