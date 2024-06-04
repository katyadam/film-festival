import { Result } from '@badrap/result';
import client from '../prisma_client';
import { DbResult, UserUpdate } from '../types';
import { DBError, EntityNotFoundError } from '../errors';
import { User } from '@prisma/client';

async function create(user: UserUpdate): DbResult<User> {
  try {
    const res = await client.user.create({
      data: user,
    });
    return Result.ok(res);
  } catch {
    return Result.err(new DBError());
  }
}

async function login(email: string, hashedPassword: string): DbResult<boolean> {
  try {
    const res = await client.user.findFirst({
      where: { email, hashedPassword },
    });
    if (res) return Result.ok(true);
    return Result.ok(false);
  } catch {
    return Result.err(new DBError());
  }
}

async function read_one(id: number): DbResult<User> {
  try {
    const res = await client.user.findUnique({
      where: { id },
    });
    if (res) return Result.ok(res);
    return Result.err(new EntityNotFoundError());
  } catch {
    return Result.err(new DBError());
  }
}

async function read_all(): DbResult<User[]> {
  try {
    const res = await client.user.findMany({});
    return Result.ok(res);
  } catch {
    return Result.err(new DBError());
  }
}

async function update(user: UserUpdate, id: number): DbResult<User> {
  try {
    const res = await client.user.update({
      where: {
        id,
      },
      data: user,
    });
    return Result.ok(res);
  } catch {
    return Result.err(new DBError());
  }
}

async function remove(id: number): DbResult<User> {
  try {
    const res = await client.user.delete({
      where: { id },
    });
    return Result.ok(res);
  } catch {
    return Result.err(new DBError());
  }
}
const user_repo = {
  create,
  login,
  read_one,
  read_all,
  update,
  remove,
};
export default user_repo;
