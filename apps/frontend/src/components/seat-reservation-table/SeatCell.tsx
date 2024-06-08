import React, { FC } from 'react';

type SeatCellProps = {
  seatRow: number;
  seatCol: number;
};

const SeatCell: FC<SeatCellProps> = ({ seatRow, seatCol }) => {
  return (
    <div className="flex flex-col items-center justify-center border-2 h-16 w-24 cursor-pointer rounded-md hover:border-red-600 duration-500">
      <p>{seatCol}</p>
    </div>
  );
};

export default SeatCell;
