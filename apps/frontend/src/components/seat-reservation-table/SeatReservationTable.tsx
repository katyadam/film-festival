import React from 'react';
import SeatCell from './SeatCell';
import { useSeatAmount } from '../../context/SeatAmountContext';
import { useSeats } from '../../app/hooks/use_seats';

const SeatReservationTable = () => {
  const { seatAmountState } = useSeatAmount();

  const { data: seats } = useSeats();

  const rows = 5;
  const cols = 10;

  if (seats) {
    const seatRows = Array.from({ length: rows }, (_, row) => (
      <div className="flex flex-row justify-between my-2 items-center">
        <p className="text-2xl lg:text-5xl p-2 w-12 text-center">{row + 1}</p>
        {Array.from({ length: cols }, (_, col) => (
          <div className="flex text-rose-900">
            <SeatCell key={row * 10 + col} seat={seats.items[row * 10 + col]} />
          </div>
        ))}
      </div>
    ));
    return <div className="mx-5 p-5">{seatRows}</div>;
  } else {
    <div>Loading...</div>;
  }
};

export default SeatReservationTable;
