import { useQuery } from "@tanstack/react-query";
import ParticipantApi from "../api/participant_api";

export const usePariticants = () => {
  return useQuery({
    queryKey: ['participants'],
    queryFn: () => ParticipantApi.getAllParticipants(),
  });
};
