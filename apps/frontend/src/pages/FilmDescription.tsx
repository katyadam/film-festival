import React from 'react';
import { useParams } from 'react-router-dom';
import { films } from '../mock/films';
import Description from '../components/description-panel/Description';

const FilmDescription = () => {
  const { id } = useParams();
  const filmId = id ? parseInt(id) : -1;
  const film = films.find((f) => f.id === filmId);

  if (!film) {
    return <h2>Film not found</h2>;
  }

  return (
    // TODO (writer, sound, director, actors, annotations...)
    // TODO reviews + spoiler
    <div className="bg-gray-100 min-h-screen p-8 mb-16 grid grid-cols-2">
      <img
        className="rounded-lg border-4 m-4 text-center"
        alt="Big image logo"
      ></img>
      <Description film={film}></Description>
      <div className="m-4 ">
        <input
          type="text"
          placeholder="Write your review..."
          className="border border-gray-300 p-2 rounded-lg w-80 mr-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md">
          Post Comment
        </button>
      </div>
    </div>
  );
};

export default FilmDescription;
