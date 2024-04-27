import React, { FC } from 'react';
import { Link } from 'react-router-dom';

type LoginButtonProps = {
  title?: string;
};

const LoginButton: FC<LoginButtonProps> = ({ title }) => {
  return (
    <Link to="/auth/login">
      <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-blue-500 duration-500">
        {title ? title : 'Login'}
      </button>
    </Link>
  );
};

export default LoginButton;
