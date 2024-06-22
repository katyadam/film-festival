import React from 'react';
import { useParticipants } from '../../app/hooks/use_participants';
import ParticipantCard from './ParticipantCard';

const ParticipantsList = () => {
  const { data: participants, isSuccess } = useParticipants();

  return (
    <div>
      {isSuccess &&
        participants.items.map((p) => (
          <ParticipantCard key={p.id} participant={p} />
        ))}
    </div>
  );
};

export default ParticipantsList;
