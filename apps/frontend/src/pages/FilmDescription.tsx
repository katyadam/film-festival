import React from 'react';
import { useParams } from 'react-router-dom';
import { films } from '../mock/films';
import { mockReviews } from '../mock/reviews';
import Description from '../components/description-panel/Description';
import RandomImage from '../components/films-panel/RandomImage';
import ReviewSection from '../components/description-panel/ReviewSection';

const FilmDescription = () => {
  const { id } = useParams();
  const filmId = id ? parseInt(id) : -1;
  const film = films.find((f) => f.id === filmId);
  const reviews = mockReviews.filter((review) => review.filmId === filmId);
  console.log(reviews);

  if (!film) {
    return <h2>Film not found</h2>;
  }

  return (
    <div>
      <div className="bg-gray-100 p-8 grid sd:grid-cols-1 md:grid-cols-2">
        <RandomImage width={900} height={750} />
        <Description film={film} />
        <div className="m-4 ">
          <input
            type="text"
            placeholder="Write your review..."
            className="border border-gray-300 p-4 rounded-lg w-full md:w-4/5 mr-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-4 rounded-md">
            Post Review
          </button>
        </div>
      </div>
      <div className="bg-gray-100 p-8">
        <ReviewSection reviews={reviews} />
      </div>
    </div>
  );
};

export default FilmDescription;
