import { z } from 'zod';

export const loginSchemaRequestSchema = z.object({
  body: z.object({
    email: z.string().email().min(5),
    hashedPassword: z.string().min(1),
  }),
});

export const createUserSchemaRequestSchema = z.object({
  body: z.object({
    email: z.string().email().min(5),
    hashedPassword: z.string().min(1),
    salt: z.string().min(5),
    name: z.string().min(1),
    isAdmin: z.boolean(),
  }),
});

export const updateUserSchemaRequestSchema = z.object({
  params: z.object({ id: z.coerce.number() }),
  body: z.object({
    email: z.string().email().min(5).optional(),
    hashedPassword: z.string().min(1).optional(),
    salt: z.string().min(5).optional(),
    name: z.string().min(1).optional(),
    isAdmin: z.boolean(),
  }),
});

export const deleteUserSchemaRequestSchema = z.object({
  params: z.object({ id: z.coerce.number() }),
});
