import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import SeatApi from '../api/seat_api';
import { Seat } from '@prisma/client';

export const useSeats = () => {
  return useQuery({
    queryKey: ['seats'],
    queryFn: () => SeatApi.getAllSeats(),
  });
};

export const useBookSeat = (seatId: number) => {
  return useMutation({
    mutationKey: ['seat'],
    mutationFn: (payload: Seat) => SeatApi.bookSeat(seatId, payload),
  });
};

export const useBookMultipleSeats = (userId: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['bookSeats'],
    mutationFn: (seatsId: number[]) =>
      SeatApi.bookMultipleSeats(userId, seatsId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['seats', 'seat'] });
    },
  });
};
