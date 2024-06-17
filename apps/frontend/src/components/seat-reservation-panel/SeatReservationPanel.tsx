import React from 'react';
import SelectedSeat from './SelectedSeat';
import PlainButton from '../ui/PlainButton';

const SeatReservationPanel = () => {
  const selectedSeats = [
    { row: 1, col: 2 },
    { row: 2, col: 3 },
    { row: 3, col: 3 },
    { row: 4, col: 5 },
  ];

  return (
    <div className="flex flex-col md:flex-row justify-between mx-8 gap-4">
      <div className="flex flex-col gap-2 items-baseline text-white font-semibold">
        <p className="text-4xl">Selected seats</p>
        <div className="grid grid-cols-2 gap-2">
          {selectedSeats.map((seat) => (
            <SelectedSeat row={seat.row} col={seat.col} />
          ))}
        </div>
        <p className="text-4xl">Total: 80$</p>
      </div>

      <div className="flex flex-col gap-2 items-start basis-1/3">
        <input
          className="border-2 p-3 w-full border-rose-900 rounded-lg bg-rose-900 text-white"
          type="email"
          placeholder="Enter your email"
        />
        <div className="flex flex-row gap-2 text-white">
          <input
            className="cursor-pointer"
            type="checkbox"
            name="agreement"
            id="agreement"
          />
          <label
            htmlFor="agreement"
            className="flex items-center cursor-pointer"
          >
            Do you agree with GDPR?
          </label>
        </div>
        <PlainButton title="Pay" link="/reservation" color='rose-900'></PlainButton>
      </div>
    </div>
  );
};

export default SeatReservationPanel;
