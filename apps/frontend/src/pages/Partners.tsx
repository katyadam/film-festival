import React from 'react';
import { partners } from '../mock/partners';
import PartnersRow from '../components/partners-panel/PartnersRow';

const PartnersPage = () => {
  const mainPartners = partners.filter(partner => partner.category === 'main');
  const mediaPartners = partners.filter(partner => partner.category === 'media');
  const partnersList = partners.filter(partner => partner.category === 'partner');

  return (
    <div className="bg-black min-h-screen px-8 text-white">
      <hr className="border-0 h-1 bg-rose-900 rounded-lg shadow-lg mb-8"></hr>
      <PartnersRow text="Main Partners" partners={mainPartners} />
      <PartnersRow text="Media Partners" partners={mediaPartners} />
      <PartnersRow text="Partners" partners={partnersList} />
    </div>
  );
};

export default PartnersPage;
