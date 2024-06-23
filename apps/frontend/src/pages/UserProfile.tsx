import React from 'react';
import { useLocalStorageUser } from '../app/hooks/use_auth';
import NavbarLine from '../components/ui/NavbarLine';
import ReservedSeatsTable from '../components/user-seats/ReservedSeatsTable';

const UserProfile = () => {
  const [user, _setUser] = useLocalStorageUser();

  return (
    <div className="bg-black min-h-screen text-white">
      <NavbarLine />

      <div className="flex flex-row justify-between">
        <div className="w-1/2 text-center border-2 rounded-md p-4 ml-2">
          <h1 className="text-4xl m-4">My reserved seats</h1>
          <NavbarLine />
          <ReservedSeatsTable />
        </div>
        {user && (
          <div className="w-1/2 text-right mr-5">
            <p>Email: {user?.email}</p>
            <p>Name: {user?.name}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
