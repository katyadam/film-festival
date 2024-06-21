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
      skipDuplicates: true,
    });
    await tx.user.createMany({
      data: users,
      skipDuplicates: true,
    });
    await tx.film.createMany({
      data: films,
      skipDuplicates: true,
    });
    await tx.participant.createMany({
      data: participants,
      skipDuplicates: true,
    });
    await tx.review.createMany({
      data: reviews,
      skipDuplicates: true,
    });
    await tx.filmParticipant.createMany({
      data: filmParticipants,
      skipDuplicates: true,
    });
    console.log('done');
  });
}
seed();
