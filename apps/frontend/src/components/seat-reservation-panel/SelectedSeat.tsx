import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRemove } from '@fortawesome/free-solid-svg-icons';
import { Seat } from '@prisma/client';

type SelectedSeatProps = {
  seat: Seat;
};

const SelectedSeat: FC<SelectedSeatProps> = ({ seat }) => {
  const { id, row, col } = seat;

  return (
    <div className="border-2 p-2 rounded-2xl text-center flex flex-row justify-between gap-2 items-center bg-rose-900">
      <p>
        row: {row} seat: {col}
      </p>
      <FontAwesomeIcon
        className="cursor-pointer hover:text-black duration-200"
        icon={faRemove}
        size="xl"
      />
    </div>
  );
};

export default SelectedSeat;
