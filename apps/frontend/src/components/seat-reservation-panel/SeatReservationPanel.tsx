import React, { FC } from 'react';
import SelectedSeat from './SelectedSeat';
import PlainButton from '../ui/PlainButton';
import { useSeatReservation } from '../../context/SeatReservationContext';
import { useLocalStorageUser } from '../../app/hooks/use_auth';

type SeatReservationPanelProps = {
  openCheckout: () => void;
};

const SeatReservationPanel: FC<SeatReservationPanelProps> = ({
  openCheckout,
}) => {
  const { seatReservationState } = useSeatReservation();
  const [user, _setUser] = useLocalStorageUser();

  const seatPrice = 20;

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    openCheckout();
  };

  return (
    <div className="flex flex-col md:flex-row justify-between mx-8 gap-4">
      <div className="flex flex-col gap-2 items-baseline text-white font-semibold">
        <p className="text-4xl">Selected seats</p>
        <div className="grid grid-cols-2 gap-2">
          {seatReservationState.seats.map((seat) => (
            <SelectedSeat seat={seat} />
          ))}
        </div>
        <p className="text-4xl mb-16">
          Total: {seatReservationState.seats.length * seatPrice} $
        </p>
      </div>

      {user ? (
        <button
          className="bg-rose-900 text-white px-40 py-2 rounded-md transform transition-all duration-300 hover:scale-105 hover:cursor-pointer max-h-10"
          onClick={handleSubmit}
        >
          Pay
        </button>
      ) : (
        <p className="text-white text-2xl">You need to login first!</p>
      )}
    </div>
  );
};

export default SeatReservationPanel;

// (
//   <form
//     onSubmit={handleSubmit}
//     className="flex flex-col gap-2 items-start basis-1/3"
//   >
//     <input
//       className="border-2 p-3 w-full border-rose-900 rounded-lg bg-rose-900 text-white"
//       type="email"
//       placeholder="Enter your email"
//       required
//     />
//     <div className="flex flex-row gap-2 text-white">
//       <input
//         className="cursor-pointer"
//         type="checkbox"
//         name="agreement"
//         id="agreement"
//         required
//       />
//       <label
//         htmlFor="agreement"
//         className="flex items-center cursor-pointer"
//       >
//         Do you agree with GDPR?
//       </label>
//     </div>
//     <button
//       type="submit"
//       className="bg-rose-900 text-white px-4 py-2 rounded-md transform transition-all duration-300 hover:scale-105 hover:cursor-pointer"
//     >
//       Pay
//     </button>
//   </form>
// ) : (
