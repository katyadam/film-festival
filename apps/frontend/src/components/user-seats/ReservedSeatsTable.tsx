import React from 'react';
import { useUserSeats } from '../../app/hooks/use_seats';
import { useLocalStorageUser } from '../../app/hooks/use_auth';
import ReservedSeat from './ReservedSeat';

const ReservedSeatsTable = () => {
  const [user, _setUser] = useLocalStorageUser();
  if (!user) {
    return <div>You need to login first!</div>;
  }

  const { data: reservedSeats, isSuccess } = useUserSeats(user.id);

  return (
    <div className="text-white">
      {isSuccess &&
        reservedSeats.items.map((seat) => (
          <ReservedSeat key={seat.id} seat={seat} />
        ))}
    </div>
  );
};

export default ReservedSeatsTable;
