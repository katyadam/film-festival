import React, { FC } from 'react';

type LoginButtonProps = {
  title?: string;
};

const LoginButton: FC<LoginButtonProps> = ({ title }) => {
  return (
    <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-blue-500 duration-500">
      {title ? title : 'Login'}
    </button>
  );
};

export default LoginButton;
