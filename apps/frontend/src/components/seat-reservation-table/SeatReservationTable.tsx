import React from 'react';
import SeatCell from './SeatCell';

const SeatReservationTable = () => {
  const rows = 5;
  const cols = 10;

  const seatRows = Array.from({ length: rows }, (_, row) => (
    <div className="flex flex-row justify-between m-2 items-center">
      <p className="text-5xl text-red-600">{row + 1}</p>
      {Array.from({ length: cols }, (_, col) => (
        <div className="flex">
          <SeatCell key={row} seatCol={col + 1} seatRow={row + 1} />
        </div>
      ))}
    </div>
  ));

  return <div className="m-5 p-5">{seatRows}</div>;
};

export default SeatReservationTable;
