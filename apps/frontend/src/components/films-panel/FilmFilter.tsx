import React from 'react';

const FilmFilter = () => {
  //TODO filter
  return (
    <div className="text-white grid grid-cols-3 rounded-lg shadow-md text-center bg-rose-900 p-6 mb-8">
      <p>SEARCH BAR</p>
      <p>RATING VALUE FILTER</p>
      <p>
        <div className="grid grid-cols-3">
          <p>CHECKBOX 1</p>
          <p>CHECKBOX 2</p>
          <p>APPLY</p>
          <p>CHECKBOX 3</p>
          <p>CHECKBOX 4</p>
          <p>REMOVE</p>
        </div>
      </p>
    </div>
  );
};

export default FilmFilter;
