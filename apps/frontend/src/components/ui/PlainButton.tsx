import React, { FC } from 'react';
import { Link } from 'react-router-dom';

type PlainButtonProps = {
  title: string;
  link: string;
};

const PlainButton: FC<PlainButtonProps> = ({ title, link }) => {
  return (
    <Link to={link}>
      <button className="bg-red-400 text-white px-4 py-2 rounded-md hover:bg-red-800 duration-500">
        <p className="">{title}</p>
      </button>
    </Link>
  );
};

export default PlainButton;
