import React, { FC } from 'react';

type SeatCellProps = {
  seatRow: number;
  seatCol: number;
};

const SeatCell: FC<SeatCellProps> = ({ seatRow, seatCol }) => {
  return (
    <div className="flex flex-col items-center justify-center border-2 h-8 w-10 lg:h-14 lg:w-20 cursor-pointer rounded-md hover:border-red-600 duration-500">
      <p>{seatCol}</p>
    </div>
  );
};

export default SeatCell;
