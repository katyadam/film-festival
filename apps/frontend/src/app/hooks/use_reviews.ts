import { useQuery } from "@tanstack/react-query"

//TODO

export const useReviews = () => {
  return useQuery({
    queryKey: ['reviews'],
    queryFn: () => {},
  });
};
