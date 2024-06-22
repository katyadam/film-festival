import { useQuery } from '@tanstack/react-query';
import SeatApi from '../api/seat_api';

export const useSeats = () => {
  return useQuery({
    queryKey: ['categories'],
    queryFn: () => SeatApi.getAllSeats(),
  });
};
