import { useMutation, useQuery } from '@tanstack/react-query';
import SeatApi from '../api/seat_api';
import { Seat } from '@prisma/client';

export const useSeats = () => {
  return useQuery({
    queryKey: ['categories'],
    queryFn: () => SeatApi.getAllSeats(),
  });
};

export const useBookSeat = (seatId: number) => {
  return useMutation({
    mutationKey: ['seat'],
    mutationFn: (payload: Seat) => SeatApi.bookSeat(seatId, payload),
  });
};
