import { Result } from '@badrap/result';
import client from '../prisma_client';
import { DbResult } from '../types';
import { DBError, NotFoundError } from '../errors';
import { User } from '@prisma/client';
import { UserCreate, UserUpdate } from './user_types';

async function create(user: UserCreate): DbResult<User> {
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

async function readOne(id: number): DbResult<User> {
  try {
    const res = await client.user.findUnique({
      where: { id },
    });
    if (res) return Result.ok(res);
    return Result.err(new NotFoundError());
  } catch {
    return Result.err(new DBError());
  }
}

async function readAll(): DbResult<User[]> {
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
const userRepository = {
  create,
  login,
  read_one: readOne,
  read_all: readAll,
  update,
  remove,
};
export default userRepository;
