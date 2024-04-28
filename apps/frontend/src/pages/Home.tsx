import React from 'react';
import NewsPanel from '../components/news-panel/NewsPanel';

const Home = () => {
  return (
    <div className="flex flex-col gap-2 justify-between">
      <div className="flex flex-col w-full items-center gap-2 md:h-96 md:flex-row">
        <div className="w-full h-full bg-gray-300 md:w-3/4">Main Festival</div>
        <div className="w-full h-full bg-gray-300 md:w-1/4">
          <NewsPanel />
        </div>
      </div>
      <div className="text-center bg-gray-300 h-72">All Films</div>
      <div className="text-center bg-gray-300 h-52">Reservations</div>
      <div className="text-center bg-gray-300 h-60">Partners</div>
    </div>
  );
};

export default Home;
