import { FC } from 'react';
import { MockPartner } from '../../mock/partners';

type PartnerCardProps = {
  partner: MockPartner;
};

const PartnerCard: FC<PartnerCardProps> = ({ partner }) => {
  return (
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h3 className="text-2xl font-semibold mb-2">{partner.name}</h3>
          <p className="text-gray-700">{partner.originCountry}</p>
      </div>
  );
};

export default PartnerCard;
