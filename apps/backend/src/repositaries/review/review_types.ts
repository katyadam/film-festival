export type ReviewUpdate = {
  userId?: number;
  movieId?: number;
  stars?: number;
  description?: string;
  isSpoiler?: boolean;
};

export type ReviewCreate = {
  userId: number;
  movieId: number;
  stars: number;
  description: string;
  isSpoiler: boolean;
};

export type Review = ReviewCreate & {
  id: number;
};
