import { z } from 'zod';

export const bookSeatRequestSchema = z.object({
  params: z.object({
    id: z.coerce.number(),
  }),
  body: z.object({
    userId: z.string(),
    row: z.coerce.number(),
    col: z.coerce.number(),
  }),
});
