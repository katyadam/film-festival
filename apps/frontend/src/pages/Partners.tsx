import React from 'react';
import { partners } from '../mock/partners';
import PartnersRow from '../components/partners-panel/PartnersRow';

const PartnersPage = () => {
  const mainPartners = partners.filter(partner => partner.category === 'main');
  const mediaPartners = partners.filter(partner => partner.category === 'media');
  const partnersList = partners.filter(partner => partner.category === 'partner');

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8">Our Partners</h1>
      <PartnersRow text="Main Partners" partners={mainPartners} />
      <PartnersRow text="Media Partners" partners={mediaPartners} />
      <PartnersRow text="Partners" partners={partnersList} />
    </div>
  );
};

export default PartnersPage;
