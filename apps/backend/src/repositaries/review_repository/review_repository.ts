import { Result } from '@badrap/result';
import client from '../prisma_client';
import { DbResult, ReviewUpdate } from '../types';
import { DBError, EntityNotFoundError } from '../errors';
import { Review } from '@prisma/client';

async function create(review: ReviewUpdate): DbResult<Review> {
  try {
    const res = await client.review.create({
      data: review,
    });
    return Result.ok(res);
  } catch {
    return Result.err(new DBError());
  }
}

async function read_one(id: number): DbResult<Review> {
  try {
    const res = await client.review.findUnique({
      where: { id },
    });
    if (res) return Result.ok(res);
    return Result.err(new EntityNotFoundError());
  } catch {
    return Result.err(new DBError());
  }
}

async function read_all(): DbResult<Review[]> {
  try {
    const res = await client.review.findMany({});
    return Result.ok(res);
  } catch {
    return Result.err(new DBError());
  }
}

async function update(review: ReviewUpdate, id: number): DbResult<Review> {
  try {
    const res = await client.review.update({
      where: {
        id,
      },
      data: review,
    });
    return Result.ok(res);
  } catch {
    return Result.err(new DBError());
  }
}

async function remove(id: number): DbResult<Review> {
  try {
    const res = await client.review.delete({
      where: { id },
    });
    return Result.ok(res);
  } catch {
    return Result.err(new DBError());
  }
}

const review_repo = {
  create,
  read_one,
  read_all,
  update,
  remove,
};
export default review_repo;
