import { Result } from '@badrap/result';
import client from '../prisma_client';
import { DbResult } from '../types';
import { DBError } from '../errors';
import { Category } from '@prisma/client';

async function read_all(): DbResult<Category[]> {
  try {
    const res = await client.category.findMany({});
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

const category_repo = {
  remove_films,
  add_films,
  read_all,
};
export default category_repo;
