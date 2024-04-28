import React, { useState } from 'react';
import LoginButton from '../ui/LoginButton';
import Logo from 'apps/frontend/src/assets/logo.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import SidePanel from './SidePanel';

const Navbar = () => {
  const links: LinkInfo[] = [
    { title: 'Films', path: '/films' },
    { title: 'Reservation', path: '/reservation' },
    { title: 'Partners', path: '/partners' },
    { title: 'Contacts', path: '/contacts' },
  ];

  const [showPanel, setShowPanel] = useState(false);

  const togglePanel = () => {
    setShowPanel(!showPanel);
  };

  const closePanel = () => {
    setShowPanel(false);
  };

  return (
    <div className="flex flex-row justify-between p-5 items-center border-b-4">
      <Link to="/" className="w-52 cursor-pointer">
        <img src={Logo} alt="" />
      </Link>

      <div className="hidden mx-5 md:flex md:flex-row md:justify-between md:basis-2/3 md:text-2xl items-center">
        {links.map(({ title, path }) => (
          <Link
            key={path}
            className="cursor-pointer hover:text-blue-500 duration-500 font-bold"
            to={path}
          >
            {title}
          </Link>
        ))}
        <div className="text-2xl">
          <LoginButton />
        </div>
      </div>

      <button className="md:hidden text-6xl" onClick={togglePanel}>
        <FontAwesomeIcon icon={faBars} />
      </button>

      {showPanel && <SidePanel close={closePanel} links={links} />}
    </div>
  );
};

export default Navbar;
