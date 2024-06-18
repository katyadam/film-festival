import prisma from './repositories/prisma_client';
import {
  cateogiries,
  filmParticipants,
  films,
  participants,
  reviews,
  seats,
  users,
} from './seed_data';

export async function seed() {
  await prisma.$transaction(async (tx) => {
    await tx.category.createMany({
      data: cateogiries,
    });
    await tx.seat.createMany({
      data: seats,
    });
    await tx.user.createMany({
      data: users,
    });
    await tx.film.createMany({
      data: films,
    });
    await tx.participant.createMany({
      data: participants,
    });
    await tx.review.createMany({
      data: reviews,
    });
    await tx.filmParticipant.createMany({
      data: filmParticipants,
    });
    console.log('done');
  });
}
seed();
