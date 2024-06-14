import { Result } from '@badrap/result';
import client from '../prisma_client';
import { DbResult } from '../types';
import { DBError, NotFoundError } from '../errors';
import { Category } from './category_types';

async function create(name: string): DbResult<Category> {
  try {
    const res = await client.category.create({
      data: { name },
    });
    return Result.ok(res);
  } catch {
    return Result.err(new DBError());
  }
}

async function update(id: number, name: string): DbResult<Category> {
  try {
    const res = await client.category.update({
      where: { id },
      data: { name },
    });
    return Result.ok(res);
  } catch {
    return Result.err(new DBError());
  }
}

async function read(id: number): DbResult<Category> {
  try {
    const res = await client.category.findUnique({
      where: { id },
    });
    if (res) return Result.ok(res);
    return Result.err(new NotFoundError());
  } catch {
    return Result.err(new DBError());
  }
}

async function read_all(): DbResult<Category[]> {
  try {
    const res = await client.category.findMany({});
    return Result.ok(res);
  } catch {
    return Result.err(new DBError());
  }
}

async function remove(id: number): DbResult<Category> {
  try {
    const res = await client.category.delete({
      where: { id },
    });
    return Result.ok(res);
  } catch {
    return Result.err(new DBError());
  }
}

async function add_films(
  filmIds: number[],
  cateogryId: number
): DbResult<Category> {
  try {
    const res = await client.category.update({
      where: {
        id: cateogryId,
      },
      data: {
        films: {
          connect: filmIds.map((x) => {
            return { id: x };
          }),
        },
      },
    });
    return Result.ok(res);
  } catch {
    return Result.err(new DBError());
  }
}

async function remove_films(
  filmIds: number[],
  cateogryId: number
): DbResult<Category> {
  try {
    const res = await client.category.update({
      where: {
        id: cateogryId,
      },
      data: {
        films: {
          disconnect: filmIds.map((x) => {
            return { id: x };
          }),
        },
      },
    });
    return Result.ok(res);
  } catch {
    return Result.err(new DBError());
  }
}

const categoryRepository = {
  remove_films,
  add_films,
  read_all,
  read,
  create,
  update,
  remove,
};
export default categoryRepository;
