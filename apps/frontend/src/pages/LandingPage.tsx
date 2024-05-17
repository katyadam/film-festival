import React from 'react';
import NewsPanel from '../components/news-panel/NewsPanel';
import FilmsPanel from '../components/films-panel/FilmsPanel';
import PlainButton from '../components/ui/PlainButton';
import PartnersPanel from '../components/partners-panel/PartnersPanel';
import LandingPageImage from '../../public/landing-page-image.jpg';

const LandingPage = () => {
  // TODO: Seats left number
  return (
    <div className="flex flex-col gap-2 justify-between">
      <div className="flex flex-col w-full items-center gap-2 md:h-96 md:flex-row mb-4">
        <div className="w-full h-full md:w-3/4">
          {/* <img src={LandingPageImage} className="w-4/6" /> */}
        </div>
        <div className="w-full h-full md:w-1/4">
          <NewsPanel />
        </div>
      </div>
      <div className="md:h-72">
        <FilmsPanel />
        <div className="text-center mt-8 text-3xl">
          <PlainButton link="/films" title="Go to all films" />
        </div>
      </div>
      <div className="text-center text-4xl h-52 flex flex-col gap-8">
        <p>
          Make a reservation -{' '}
          <span className="text-5xl text-red-500">{10}</span> seats left
        </p>
        <div className="text-3xl">
          <PlainButton link="/reservation" title="Reserve Now" />
        </div>
      </div>
      <div className="text-center h-60">
        <p className="text-4xl mb-4 font-bold">Partners</p>
        <div className="flex items-center flex-col md:flex-row justify-between ">
          <PartnersPanel />
          <div className="text-3xl m-3">
            <PlainButton link="/partners" title="More Partners" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
