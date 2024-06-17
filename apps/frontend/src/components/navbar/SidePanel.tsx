import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import LoginButton from '../ui/LoginButton';

type SidePanelProps = {
  close: () => void;
  links: LinkInfo[];
};

const SidePanel: FC<SidePanelProps> = ({ close, links }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={close}>
      <div className="absolute top-0 right-0 bg-white w-2/3 h-full shadow-lg flex flex-col items-center">
        {links.map(({ title, path }) => (
          <div className="border-b-4 text-center p-5 text-2xl w-full">
            <Link key={path} className="cursor-pointer font-bold" to={path}>
              {title}
            </Link>
          </div>
        ))}
        <div className="text-2xl mt-5">
          <LoginButton />
        </div>
      </div>
    </div>
  );
};

export default SidePanel;
