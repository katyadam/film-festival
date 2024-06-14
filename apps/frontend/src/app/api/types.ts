export type ApiRespMulti<T> = {
  items: T[];
  message?: string;
};

export type ApiRespMultiPaginated<T> = ApiRespMulti<T> & {
  pagination: Pagination;
};

export type ApiRespSingle<T> = {
  item: T;
  message?: string;
};

export type Pagination = {
  currentPage: number;
  totalPages: number;
};

export type ReqPagination = {
  page: number;
};

export interface User {
  id: number;
  email: string;
  name: string;
  hashedPassword: string;
  salt: string;
  votes: Film[];
  reviews: Review[];
  seats: Seat[];
}

export interface Film {
  id: number;
  name: string;
  originalName: string;
  intro: string;
  picture: string;
  publishedAt: number;
  runTimeMinutes: number;
  voters: User[];
  reviews: Review[];
  category: Category;
  categoryID: number;
  participants: FilmParticipant[];
}

export interface Review {
  id: number;
  reviewed: Film;
  reviewer: User;
  userId: number;
  movieId: number;
  stars: number;
  description: string;
  isSpoiler: boolean;
}

export interface Category {
  id: number;
  name: string;
  films: Film[];
}

export interface Participant {
  id: number;
  name: string;
  participations: FilmParticipant[];
}

export interface FilmParticipant {
  participant: Participant;
  participantId: number;
  film: Film;
  filmId: number;
  role: Role;
}

export interface Seat {
  id: number;
  reservation?: User;
  reservationID?: number;
}

export enum Role {
  DIRECTOR = 'DIRECTOR',
  SCREEWRITER = 'SCREEWRITER',
  ACTOR = 'ACTOR',
}