import React from 'react';
import SeatCell from './SeatCell';

const SeatReservationTable = () => {
  const rows = 5;
  const cols = 10;

  const seatRows = Array.from({ length: rows }, (_, row) => (
    <div className="flex flex-row justify-between my-2 items-center">
      <p className="text-2xl lg:text-5xl">{row + 1}</p>
      {Array.from({ length: cols }, (_, col) => (
        <div className="flex text-rose-900">
          <SeatCell
            key={row}
            seat={{ id: row + col, row: row + 1, col: col + 1 }}
          />
        </div>
      ))}
    </div>
  ));

  return <div className="mx-5 p-5">{seatRows}</div>;
};

export default SeatReservationTable;
