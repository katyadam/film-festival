import React from 'react';
import { partners } from '../mock/partners';

const PartnersPage = () => {
  const mainPartners = partners.filter(partner => partner.category === 'main');
  const mediaPartners = partners.filter(partner => partner.category === 'media');
  const partnersList = partners.filter(partner => partner.category === 'partner');

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8">Our Partners</h1>
      <div>
        <h2 className="text-3xl font-semibold text-center mb-4">Main Partners</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {mainPartners.map((partner, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-semibold mb-2">{partner.name}</h3>
              <p className="text-gray-700">{partner.originCountry}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <h2 className="text-3xl font-semibold text-center mb-4">Media Partners</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {mediaPartners.map((partner, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-semibold mb-2">{partner.name}</h3>
              <p className="text-gray-700">{partner.originCountry}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <h2 className="text-3xl font-semibold text-center mb-4">Partners</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {partnersList.map((partner, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-semibold mb-2">{partner.name}</h3>
              <p className="text-gray-700">{partner.originCountry}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnersPage;
