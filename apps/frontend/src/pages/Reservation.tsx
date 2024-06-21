import React, { useState } from 'react';
import SeatReservationTable from '../components/seat-reservation-table/SeatReservationTable';
import SeatReservationPanel from '../components/seat-reservation-panel/SeatReservationPanel';
import { SeatReservationProvider } from '../context/SeatReservationContext';
import BillingForm from '../components/billing-form/BillingForm';

const Reservation: React.FC = () => {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState<boolean>(false);

  return (
    <div>
      <SeatReservationProvider>
        <div className="bg-black min-h-screen text-rose-900">
          <div className="bg-rose-900 text-white flex flex-col gap-4 mx-8 rounded-lg mb-8">
            <SeatReservationTable />
          </div>
          <div>
            <SeatReservationPanel
              openCheckout={() => setIsCheckoutOpen(true)}
            />
          </div>
        </div>
        {isCheckoutOpen && (
          <BillingForm onClose={() => setIsCheckoutOpen(false)} />
        )}
      </SeatReservationProvider>
    </div>
  );
};

export default Reservation;
