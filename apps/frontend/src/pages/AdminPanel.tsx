import React from 'react';
import CreateFilmForm from '../components/admin-panel/CreateFilmForm';
import CreateCategoryForm from '../components/admin-panel/CreateCategoryForm';
import SeatsController from '../components/admin-panel/SeatsController';
import CreateParticipantForm from '../components/participants-panel/CreateParticipantForm';

const AdminPanel = () => {
  return (
    <div className="bg-black px-8 min-h-screen flex flex-col md:flex-row gap-5">
      <div className="md:w-8/12">
        <CreateFilmForm />
      </div>
      <div className="md:w-4/12">
        <CreateCategoryForm />
      </div>
    </div>
  );
};

export default AdminPanel;
