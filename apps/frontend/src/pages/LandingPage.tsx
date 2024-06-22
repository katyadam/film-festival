import React from 'react';
import FilmsPanel from '../components/films-panel/FilmsPanel';
import PlainButton from '../components/ui/PlainButton';
import PartnersPanel from '../components/partners-panel/PartnersPanel';
import NavbarLine from '../components/ui/NavbarLine';
import { useSeats } from '../app/hooks/use_seats';

const LandingPage = () => {
  const {data,isSuccess} = useSeats()
  return (
    <div>
      <div className="flex flex-col gap-6 justify-between bg-rose-900 text-center p-8">
        <FilmsPanel />
        <div className=" mt-8 text-3xl">
          <PlainButton link="/films" title="Go to all films" color="black" />
        </div>
      </div>

      <div className="bg-black flex flex-col justify-between text-center p-8 text-white p-8">
        <div className="text-3xl mb-8">
          <p className="mb-8">
            Make a reservation -{' '}
            <span className="text-5xl text-rose-900">{isSuccess ? data.items.filter((seat) => !seat.reservationID).length : "-"}</span> seats left
          </p>
          <PlainButton
            link="/reservation"
            title="Reserve Now"
            color="rose-900"
          />
        </div>

        <NavbarLine />

        <div>
          <p className="text-3xl mb-6 font-semibold">Partners</p>
          <div className="flex items-center flex-col md:flex-row justify-between">
            <PartnersPanel />
            <PlainButton
              link="/partners"
              title="More Partners"
              color="rose-900"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
