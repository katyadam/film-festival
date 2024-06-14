import React from 'react';
import { filmPeople } from '../mock/festivalPeople';
import { festivalInfo } from '../mock/festivalInfo';
import { socialLinks } from '../mock/festivalSocials';

const Contacts = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      {/* Film People Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-semibold text-center mb-4">
          People Who Helped Prepare the Film Festival
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filmPeople.map((person, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <h3 className="text-2xl font-semibold mb-2">{person.name}</h3>
              <p className="text-gray-700">{person.role}</p>
              <p className="text-gray-500">{person.email}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Festival and Company Info Section */}
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-11/12">
          <h2 className="text-3xl font-semibold mb-4">
            Festival and Company Information
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {festivalInfo.map((info, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-2">{info.name}</h3>
                <p className="text-gray-700 mb-2">{info.description}</p>
                <p className="text-gray-500 mb-1">Address: {info.address}</p>
                <p className="text-gray-500">Email: {info.email}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Social Links Sidebar */}
        <div className="lg:w-1/10 lg:pl-8 mt-8 lg:mt-0">
          <h2 className="text-3xl font-semibold mb-4 text-center lg:text-left">
            Social Links
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <ul className="space-y-4">
              {socialLinks.map((link, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <img
                    src={link.icon}
                    alt={link.platform}
                    className="w-6 h-6"
                  />
                  <a
                    href={link.url}
                    className="text-black text-lg font-medium hover:underline"
                  >
                    {link.platform}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
