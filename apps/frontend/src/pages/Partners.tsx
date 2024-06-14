import React from 'react';
import { partners } from '../mock/partners';
import PartnersPanel from '../components/partners-panel/PartnersPanel';

const PartnersPage = () => {
  const mainPartners = partners.filter(partner => partner.category === 'main');
  const mediaPartners = partners.filter(partner => partner.category === 'media');
  const partnersList = partners.filter(partner => partner.category === 'partner');

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8">Our Partners</h1>
      <PartnersPanel text="Main Partners" partners={mainPartners} />
      <PartnersPanel text="Media Partners" partners={mediaPartners} />
      <PartnersPanel text="Partners" partners={partnersList} />
    </div>
  );
};

export default PartnersPage;
