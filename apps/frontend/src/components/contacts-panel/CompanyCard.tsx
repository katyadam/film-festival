import React, { FC } from 'react';
import { MockFestivalInfo } from '../../mock/festivalInfo';

type CompanyCardProps = {
  info: MockFestivalInfo;
};

const CompanyCard: FC<CompanyCardProps> = ({ info }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold mb-2">{info.name}</h3>
      <p className="text-gray-700 mb-2">{info.description}</p>
      <p className="text-gray-500 mb-1">Address: {info.address}</p>
      <p className="text-gray-500">Email: {info.email}</p>
    </div>
  );
};

export default CompanyCard;
