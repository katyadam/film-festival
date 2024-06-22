import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import ParticipantApi from '../api/participant_api';

export const usePariticants = () => {
  return useQuery({
    queryKey: ['participants'],
    queryFn: () => ParticipantApi.getAllParticipants(),
  });
};

export const useCreateParticipant = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['participantCreate'],
    mutationFn: ParticipantApi.createParticipant,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['participants'] });
    },
  });
};
