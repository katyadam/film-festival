import { useQuery } from '@tanstack/react-query';
import UserApi from '../api/userApi';

export const useUserById = (id: string) => {
  return useQuery({
    queryKey: ['user', id],
    queryFn: () => UserApi.getUserById(id),
  });
};
