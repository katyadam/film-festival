import React from 'react';
import NewsPanel from '../components/news-panel/NewsPanel';

const Home = () => {
  return (
    <div className="flex flex-col gap-2 justify-between">
      <div className="flex flex-row items-center gap-2 h-96">
        <div className="w-3/4 h-full bg-gray-300">Main Festival</div>
        <div className="w-1/4 h-full bg-gray-300">
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
