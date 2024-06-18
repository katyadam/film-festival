import React, { FC, useState } from 'react';
import { useSeatReservation } from '../../context/SeatReservationContext';
import { Seat } from '../../context/seatType';

type SeatCellProps = {
  seat: Seat;
};

const SeatCell: FC<SeatCellProps> = ({ seat }) => {
  const { id, row, col } = seat;
  const [selected, setSelected] = useState(false);

  const { seatReservationDispatch } = useSeatReservation();

  const handleClick = () => {
    if (selected) {
      seatReservationDispatch({ type: 'UNBOOK_SEAT', payload: id });
    } else {
      seatReservationDispatch({ type: 'BOOK_SEAT', payload: seat });
    }
    setSelected(!selected);
  };

  return (
    <div
      className={`flex flex-col items-center justify-center border-2 h-8 w-10 lg:h-14 lg:w-20 cursor-pointer rounded-md border-rose-900 ${
        selected
          ? 'bg-white'
          : 'bg-rose-900 text-white border-white transform transition-all duration-300 hover:scale-105 hover:cursor-pointer hover:bg-white hover:text-rose-900'
      }`}
      onClick={handleClick}
    >
      <p>{col}</p>
    </div>
  );
};

export default SeatCell;
