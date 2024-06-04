import { Result } from '@badrap/result';
import client from '../prisma_client';
import { DbResult } from '../types';
import { DBError } from '../errors';
import { Seat } from '@prisma/client';

async function book(user: number, seat: number): DbResult<Seat> {
  try {
    const res = await client.seat.update({
      where: { id: seat },
      data: {
        reservation: { connect: { id: user } },
      },
    });
    return Result.ok(res);
  } catch {
    return Result.err(new DBError());
  }
}

async function unbook(user: number, seat: number): DbResult<Seat> {
  try {
    const res = await client.seat.update({
      where: { id: seat },
      data: {
        reservation: {
          disconnect: { id: user },
        },
      },
    });
    return Result.ok(res);
  } catch {
    return Result.err(new DBError());
  }
}

async function read_all(): DbResult<Seat[]> {
  try {
    const res = await client.seat.findMany({});
    return Result.ok(res);
  } catch {
    return Result.err(new DBError());
  }
}

const seat_repo = {
  book,
  unbook,
  read_all,
};
export default seat_repo;
