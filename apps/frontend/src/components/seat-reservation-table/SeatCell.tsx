import React, { FC, useState } from 'react';

type SeatCellProps = {
  seatRow: number;
  seatCol: number;
};

const SeatCell: FC<SeatCellProps> = ({ seatRow, seatCol }) => {
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected(!selected);
  };

  return (
    <div
      className={`flex flex-col items-center justify-center border-2 h-8 w-10 lg:h-14 lg:w-20 cursor-pointer rounded-md border-rose-900 ${
        selected ? 'bg-white' : 'bg-rose-900 text-white border-white transform transition-all duration-300 hover:scale-105 hover:cursor-pointer hover:bg-white hover:text-rose-900' 
      }`}
      onClick={handleClick}
    >
      <p>{seatCol}</p>
    </div>
  );
};

export default SeatCell;
