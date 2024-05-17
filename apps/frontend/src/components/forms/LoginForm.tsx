import React, { FC } from 'react';
import LoginButton from '../ui/LoginButton';

type LoginFormProps = {};

const LoginForm: FC<LoginFormProps> = ({}) => {
  return (
    <form className="flex flex-col justify-between w-96">
      <div className="flex flex-col justify-between mb-4">
        <label className="text-2xl p-2" htmlFor="email">
          Email
        </label>
        <input
          className="p-4 text-xl border-2 rounded-2xl focus:outline-none focus:border-red-500"
          type="text"
          id="email"
        />
      </div>
      <div className="flex flex-col justify-between">
        <label className="text-2xl p-2" htmlFor="password">
          Password
        </label>
        <input
          className="p-4 text-xl border-2 rounded-2xl focus:outline-none focus:border-red-500"
          type="password"
          id="password"
        />
      </div>
      <div className="text-2xl mt-6">
        <LoginButton />
      </div>
    </form>
  );
};

export default LoginForm;
