import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRemove } from '@fortawesome/free-solid-svg-icons';

type SelectedSeatProps = {
  row: number;
  col: number;
};

const SelectedSeat: FC<SelectedSeatProps> = ({ row, col }) => {
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
