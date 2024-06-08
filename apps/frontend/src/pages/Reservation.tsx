import React from 'react';
import SeatReservationTable from '../components/seat-reservation-table/SeatReservationTable';
import SeatReservationPanel from '../components/seat-reservation-panel/SeatReservationPanel';

const Reservation = () => {
  return (
    <div className="flex flex-col gap-4">
      <SeatReservationTable />
      <SeatReservationPanel />
    </div>
  );
};

export default Reservation;
