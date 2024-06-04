import { Result } from '@badrap/result';

export type DbResult<T> = Promise<Result<T>>;

/* extende types include relations */

/* Films */
export type FilmUpdate = {
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

/* User */
export type UserUpdate = {
  email: string;
  name: string;
  hashedPassword: string;
  salt: string;
};

export type User = UserUpdate & {
  id: number;
};

export type UserExtended = User & {
  votes: Film[];
  reviews: Review[];
  seats: Seat[];
};

/* Review*/
export type ReviewUpdate = {
  userId: number;
  movieId: number;
  stars: number;
  description: string;
  isSpoiler: boolean;
};

export type Review = ReviewUpdate & {
  id: number;
};

/* Seat*/
export type Seat = {
  id: number;
  reservation: number;
};

/* Participant */
export type ParticipantUpdate = {
  name: string;
};

export type Participant = ParticipantUpdate & {
  id: number;
};

export type Role = 'DIRECTOR' | 'SCREEWRITER' | 'ACTOR';

export type FilmParticipant = {
  participant: number;
  film: number;
  role: Role;
};
