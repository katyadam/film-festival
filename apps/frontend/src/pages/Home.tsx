import React from 'react';
import NewsPanel from '../components/news-panel/NewsPanel';
import FilmsPanel from '../components/films-panel/FilmsPanel';

const Home = () => {
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
      <div className="text-center h-52">Reservations</div>
      <div className="text-center h-60">Partners</div>
    </div>
  );
};

export default Home;
