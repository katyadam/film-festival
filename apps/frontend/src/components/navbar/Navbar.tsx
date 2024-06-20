import React, { useState } from 'react';
import LoginButton from '../ui/LoginButton';
import Logo from 'apps/frontend/src/assets/logo.png';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import SidePanel from './SidePanel';

const Navbar = () => {
  const location = useLocation();

  const [showPanel, setShowPanel] = useState(false);

  const links: LinkInfo[] = [
    { title: 'Films', path: '/films' },
    { title: 'Reservation', path: '/reservation' },
    { title: 'Partners', path: '/partners' },
    { title: 'Contacts', path: '/contacts' },
  ];

  const togglePanel = () => {
    setShowPanel(!showPanel);
  };

  const closePanel = () => {
    setShowPanel(false);
  };

  return (
    <div className="bg-black">
      <div className="flex flex-row justify-between p-5 items-center mx-3">
        <Link to="/" className="w-52 cursor-pointer">
          <img src={Logo} alt="" />
        </Link>

        <div className="hidden mx-5 md:flex md:flex-row md:justify-between md:basis-2/3 md:text-2xl items-center">
          {links.map(({ title, path }, index) => (
            <React.Fragment key={path}>
              <Link
                className={
                  'text-white cursor-pointer hover:text-rose-900 duration-500 font-bold px-4 ' +
                  (path === location.pathname
                    ? 'underline underline-offset-8'
                    : '')
                }
                to={path}
              >
                {title}
              </Link>
              {index < links.length - 1 && (
                <div className="border-l-2 border-rose-900 h-6"></div>
              )}
            </React.Fragment>
          ))}
          <div className="text-2xl">
            <LoginButton />
          </div>
        </div>

        <button className="md:hidden text-6xl text-white" onClick={togglePanel}>
          <FontAwesomeIcon icon={faBars} />
        </button>

        {showPanel && <SidePanel close={closePanel} links={links} />}
      </div>
    </div>
  );
};

export default Navbar;
