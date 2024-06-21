import { Participant } from '../participant/participant_types';
import { Review } from '../review/review_types';
import { User } from '../user/user_types';

export type FilmBase = {
  name: string;
  originalName: string;
  intro: string;
  picture: string;
  publishedAt: number;
  runTimeMinutes: number;
  categoryID: number;
};

export type FilmCreate = FilmBase;
export type FilmUpdate = Partial<FilmBase>;

export type Film = FilmUpdate & {
  id: number;
};

export type FilmExtended = Film & {
  users: User[];
  reviews: Review[];
  participants: Participant[];
};

export type Role = 'DIRECTOR' | 'SCREEWRITER' | 'ACTOR';