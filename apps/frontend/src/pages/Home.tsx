import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col h-screen gap-2 justify-between">
      <div className="flex flex-row items-center gap-2 basis-2/6">
        <div className="w-3/4 h-full bg-gray-300">Main Festival</div>
        <div className="w-1/4 h-full bg-gray-300">News/Updates</div>
      </div>
      <div className="text-center bg-gray-300 basis-2/6">All Films</div>
      <div className="text-center bg-gray-300 basis-1/6">Reservations</div>
      <div className="text-center bg-gray-300 basis-1/6">Partners</div>
    </div>
  );
};

export default Home;
