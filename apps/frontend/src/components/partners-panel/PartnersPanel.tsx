import React from 'react';
import { partners } from '../../mock/partners';
import PartnerCard from './PartnerCard';

const PartnersPanel = () => {
  return (
    <div className="flex flex-col justify-around md:flex-row w-full">
      {partners.slice(0, 4).map((partner) => (
        <PartnerCard partner={partner} />
      ))}
    </div>
  );
};

export default PartnersPanel;
