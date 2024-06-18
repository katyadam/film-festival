import React from 'react';
import SeatReservationTable from '../components/seat-reservation-table/SeatReservationTable';
import SeatReservationPanel from '../components/seat-reservation-panel/SeatReservationPanel';
import { SeatReservationProvider } from '../context/SeatReservationContext';

const Reservation = () => {
  return (
    <SeatReservationProvider>
      <div className="bg-black min-h-screen text-rose-900">
        <div className="bg-rose-900 text-white flex flex-col gap-4 mx-8 rounded-lg mb-8">
          <SeatReservationTable />
        </div>
        <div>
          <SeatReservationPanel />
        </div>
      </div>
    </SeatReservationProvider>
  );
};

export default Reservation;
