import React, { FC } from 'react';
import { MockFilmPeople } from '../../mock/festivalPeople';

type ContactsCardProps = {
  person: MockFilmPeople;
};

const ContactsCard: FC<ContactsCardProps> = ({ person }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <h3 className="text-2xl font-semibold mb-2">{person.name}</h3>
      <p className="text-gray-700">{person.role}</p>
      <p className="text-gray-500">{person.email}</p>
    </div>
  );
};

export default ContactsCard;
