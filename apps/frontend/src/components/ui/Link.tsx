import React, { FC } from 'react';

type LinkProps = {
  title: string;
};

const Link: FC<LinkProps> = ({ title }) => {
  return (
    <a className="cursor-pointer hover:text-blue-500 duration-500 font-bold">
      {title}
    </a>
  );
};

export default Link;
