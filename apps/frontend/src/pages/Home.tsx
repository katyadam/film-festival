import React from 'react';
import NewsPanel from '../components/news-panel/NewsPanel';
import FilmsPanel from '../components/films-panel/FilmsPanel';
import PlainButton from '../components/ui/PlainButton';

const Home = () => {
  // TODO: Seats left number
  return (
    <div className="flex flex-col gap-2 justify-between">
      <div className="flex flex-col w-full items-center gap-2 md:h-96 md:flex-row mb-4">
        <div className="w-full h-full md:w-3/4">Main Festival</div>
        <div className="w-full h-full md:w-1/4">
          <NewsPanel />
        </div>
      </div>
      <div className="md:h-72">
        <FilmsPanel />
      </div>
      <div className="text-center text-4xl h-52 flex flex-col gap-8">
        <p>
          Make a reservation -{' '}
          <span className="text-5xl text-red-500">{10}</span> seats left
        </p>
        <PlainButton link="/reservation" title="Reserve Now" />
      </div>
      <div className="text-center h-60">Partners</div>
    </div>
  );
};

export default Home;
