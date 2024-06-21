import React, { FC } from 'react';
import LoginButton from '../ui/LoginButton';

type RegistrationFormProps = {
  toggleForm: () => void;
};

const RegistrationForm: FC<RegistrationFormProps> = ({ toggleForm }) => {
  return (
    <div className="border-4 border-rose-900 px-8 py-16 rounded-lg">
      <form className="flex flex-col justify-between w-96 mb-5">
        <div className="flex flex-col justify-between mb-4">
          <label className="text-2xl p-2" htmlFor="name">
            Name
          </label>
          <input
            className="text-white bg-rose-900 p-4 text-xl rounded-2xl focus:outline-none focus:ring-2 focus:ring-rose-900"
            type="text"
            id="name"
          />
        </div>
        <div className="flex flex-col justify-between mb-4">
          <label className="text-2xl p-2" htmlFor="email">
            Email
          </label>
          <input
            className="text-white bg-rose-900 p-4 text-xl rounded-2xl focus:outline-none focus:ring-2 focus:ring-rose-900"
            type="text"
            id="email"
          />
        </div>
        <div className="flex flex-col justify-between">
          <label className="text-2xl p-2" htmlFor="password">
            Password
          </label>
          <input
            className="text-white bg-rose-900 p-4 text-xl rounded-2xl focus:outline-none focus:ring-2 focus:ring-rose-900"
            type="password"
            id="password"
          />
        </div>
        <div className="text-2xl mt-6">
          <button
            className="bg-rose-900 text-white px-4 py-2 rounded-md transform transition-all duration-300 hover:scale-110"
            type="submit"
          >
            Register
          </button>
        </div>
      </form>
      <button onClick={toggleForm} className="text-blue-500 hover:underline">
        Already have an account? Login
      </button>
    </div>
  );
};

export default RegistrationForm;
