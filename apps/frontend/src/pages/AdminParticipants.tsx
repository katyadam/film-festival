import React from 'react';
import CreateParticipantForm from '../components/participants-panel/CreateParticipantForm';
import ParticipantsList from '../components/participants-panel/ParticipantsList';

const AdminParticipants = () => {
  return (
    <div className="bg-black px-8 min-h-screen flex flex-col md:flex-row gap-5">
      <div className="md:w-1/2">
        <CreateParticipantForm />
      </div>
      <div className="md:w-1/2">
        <ParticipantsList />
      </div>
    </div>
  );
};

export default AdminParticipants;
