import React from 'react';
import SeatCell from './SeatCell';
import { useSeatAmount } from '../../context/SeatAmountContext';

const SeatReservationTable = () => {
  const { seatAmountState } = useSeatAmount();

  const rows = seatAmountState.rows;
  const cols = seatAmountState.cols;

  const seatRows = Array.from({ length: rows }, (_, row) => (
    <div className="flex flex-row justify-between my-2 items-center">
      <p className="text-2xl lg:text-5xl p-2 w-12 text-center">{row + 1}</p>
      {Array.from({ length: cols }, (_, col) => (
        <div className="flex text-rose-900">
          <SeatCell
            key={row}
            seat={{
              id: 0.5 * (row + col) * (row + col + 1) + col,
              row: row + 1,
              col: col + 1,
              reservationID: null,
            }}
          />
        </div>
      ))}
    </div>
  ));

  return <div className="mx-5 p-5">{seatRows}</div>;
};

export default SeatReservationTable;
