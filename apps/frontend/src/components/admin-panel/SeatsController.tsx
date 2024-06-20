import React from 'react';

const SeatsController = () => {
  return (
    <div className="bg-white p-6 rounded-lg">
      <input
        className="w-full p-2 border border-gray-300 rounded mb-3"
        placeholder="Number of rows"
        type="number"
        min={0}
      />
      <input
        className="w-full p-2 border border-gray-300 rounded"
        placeholder="Number of columns"
        type="number"
        min={0}
      />
      <button className="mt-4 bg-rose-900 text-white px-4 py-2 rounded-md transform transition-all duration-300 hover:scale-105 hover:cursor-pointer">
        Set
      </button>
    </div>
  );
};

export default SeatsController;
