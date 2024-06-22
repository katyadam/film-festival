import { Participant } from '@prisma/client';
import React, { FC } from 'react';
import { useDeleteParticipant } from '../../app/hooks/use_participants';
import PlainButton from '../ui/PlainButton';

type ParticipantCardProps = {
  participant: Participant;
};

const ParticipantCard: FC<ParticipantCardProps> = ({ participant }) => {
  const { mutateAsync: deleteParticipant } = useDeleteParticipant();

  return (
    <div className="flex flex-row justify-between bg-white rounded-md mb-3 p-4">
      <p>{participant.name}</p>
      <PlainButton
        color="rose-900"
        link="/admin/participants"
        title="Remove"
        onClick={async () => await deleteParticipant(participant.id)}
      />
    </div>
  );
};

export default ParticipantCard;
