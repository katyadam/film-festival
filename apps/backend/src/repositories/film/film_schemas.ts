import { z } from 'zod';

export const createFilmRequestSchema = z.object({
  body: z.object({
    name: z.string().min(1).max(255),
    originalName: z.string().min(1).max(255),
    intro: z.string().min(1),
    publishedAt: z.coerce.number(),
    runTimeMinutes: z.coerce.number(),
    categoryID: z.coerce.number(),
  }),
});

export const updateFilmRequestSchema = z.object({
  params: z.object({
    id: z.coerce.number(),
  }),
  body: z.object({
    name: z.string().min(1).max(255).optional(),
    originalName: z.string().min(1).max(255).optional(),
    intro: z.string().min(1).optional(),
    publishedAt: z.coerce.number().optional(),
    runTimeMinutes: z.coerce.number().optional(),
    categoryID: z.coerce.number().optional(),
  }),
});

export const getFilmRequestSchema = z.object({
  params: z.object({
    id: z.coerce.number(),
  }),
});

export const deleteFilmRequestSchema = z.object({
  params: z.object({
    id: z.coerce.number(),
  }),
});
