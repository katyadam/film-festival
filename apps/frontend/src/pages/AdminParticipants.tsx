import React from 'react';
import CreateParticipantForm from '../components/participants-panel/CreateParticipantForm';
import ParticipantsList from '../components/participants-panel/ParticipantsList';
import AddParticipantToFilm from '../components/participants-panel/AddParticipantToFilm';
import { ParticipantsProvider } from '../context/ParticipantsContext';

const AdminParticipants = () => {
  return (
    <ParticipantsProvider>
      <div className="bg-black px-8 min-h-screen flex flex-col md:flex-row gap-5">
        <div className="flex flex-col md:w-1/2 gap-5">
          <div>
            <CreateParticipantForm />
          </div>
          <div>
            <AddParticipantToFilm />
          </div>
        </div>
        <div className="md:w-1/2">
          <ParticipantsList />
        </div>
      </div>
    </ParticipantsProvider>
  );
};

export default AdminParticipants;
