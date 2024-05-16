import React, { FC } from 'react';
import { MockPartner } from '../../mock/partners';
import { Link } from 'react-router-dom';

type PartnerCardProps = {
  partner: MockPartner;
};

const PartnerCard: FC<PartnerCardProps> = ({ partner }) => {
  return (
    <Link className="text-2xl border-y-2 p-4" to="/">
      <p>{partner.name}</p>
      <p>{partner.originCountry}</p>
    </Link>
  );
};

export default PartnerCard;
