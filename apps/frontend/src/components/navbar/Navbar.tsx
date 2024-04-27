import React from 'react';
import Link from '../ui/Link';
import LoginButton from '../ui/LoginButton';
import Logo from 'apps/frontend/src/assets/logo.png';

const Navbar = () => {
  const links = ['Films', 'Reservation', 'Partners', 'Contacts'];
  return (
    <div className="flex flex-row justify-between p-5 items-center border-b-4">
      <a className="w-44 cursor-pointer">
        <img src={Logo} alt="" />
      </a>
      <div className="flex flex-row justify-between basis-2/3 text-2xl">
        {links.map((link) => (
          <Link title={link} />
        ))}
      </div>
      <div className="text-2xl">
        <LoginButton />
      </div>
    </div>
  );
};

export default Navbar;
