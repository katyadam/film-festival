import React from 'react';
import LoginButton from '../ui/LoginButton';
import Logo from 'apps/frontend/src/assets/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const links = [
    { title: 'Films', path: '/films' },
    { title: 'Reservation', path: '/reservation' },
    { title: 'Partners', path: '/partners' },
    { title: 'Contacts', path: '/contacts' },
  ];
  return (
    <div className="flex flex-row justify-between p-5 items-center border-b-4">
      <Link to="/" className="w-44 cursor-pointer">
        <img src={Logo} alt="" />
      </Link>
      <div className="flex flex-row justify-between basis-2/3 text-2xl">
        {links.map(({ title, path }) => (
          <Link
            className="cursor-pointer hover:text-blue-500 duration-500 font-bold"
            to={path}
          >
            {title}
          </Link>
        ))}
      </div>
      <div className="text-2xl">
        <LoginButton />
      </div>
    </div>
  );
};

export default Navbar;
