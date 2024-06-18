import React, { ReactNode } from 'react';
import { useSeatReservation } from '../../context/SeatReservationContext';

type BillingFormProps = {
  onClose: () => void;
};

const BillingForm: React.FC<BillingFormProps> = ({ onClose }) => {
  const { seatReservationState } = useSeatReservation();

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
      <div className="bg-white p-8 rounded-lg shadow-lg z-10">Billing Form</div>
    </div>
  );
};

export default BillingForm;
