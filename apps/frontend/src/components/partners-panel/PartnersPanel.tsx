import { FC } from 'react';
import { MockPartner } from '../../mock/partners';
import PartnerCard from './PartnerCard';

type PartnerPanelProps = {
  text: string;
  partners: MockPartner[];
};


const PartnersPanel: FC<PartnerPanelProps> = ({text, partners}) => {
  return (
    <div>
        <h2 className="text-3xl font-semibold text-center mb-4">{text}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {partners.map((partner) => (
            <PartnerCard partner={partner}></PartnerCard>
          ))}
        </div>
      </div>
  );
};

export default PartnersPanel;
