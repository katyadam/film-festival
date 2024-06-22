import React from 'react';
import { useParams } from 'react-router-dom';
import { mockReviews } from '../mock/reviews';
import Description from '../components/description-panel/Description';
import RandomImage from '../utils/RandomImage';
import ReviewSection from '../components/description-panel/ReviewSection';
import NavbarLine from '../components/ui/NavbarLine';
import PlainButton from '../components/ui/PlainButton';
import { useFilm } from '../app/hooks/use_films';
import { getVideoId } from '../utils/getVideoId';

const FilmDescription = () => {
  const { id } = useParams();
  const filmId = id ? id : '-1';
  const { data: film, isLoading, error } = useFilm(parseInt(filmId));
  const reviews = mockReviews.filter(
    (review) => review.filmId === parseInt(filmId)
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.error('Error loading films:', error);
    return <div>Error loading films.</div>;
  }

  const youtubeVideoId = film?.item.intro ? getVideoId(film.item.intro) : null;

  return (
    <div className="bg-black">
      <NavbarLine />
      <div className="grid sd:grid-cols-1 md:grid-cols-2">
        <Description film={film?.item} />
        <div className="text-black rounded-lg border-rose-900 text-center overflow-hidden p-4">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${youtubeVideoId}`}
            allowFullScreen
            className="rounded-2xl"
          ></iframe>
        </div>
        {/*<RandomImage width={900} height={750} /> */}

        <div className="p-4">
          <textarea
            placeholder="Write your review..."
            className="border border-rose-900 p-2 rounded-2xl w-full h-24 focus:outline-none focus:ring-2 focus:ring-rose-900"
          />
          <PlainButton
            title="Post Review"
            link={`/films/${filmId}`}
            color="rose-900"
          ></PlainButton>
        </div>
        <div className="p-4">
          <p className="text-white font-semibold pb-4">Total rating: {film?.item.voters.length}</p>
          <PlainButton
            title="Vote Here"
            color="rose-900"
            link={`/films/${filmId}`}
          />
        </div>
      </div>

      <NavbarLine />

      <div className="p-4">
        <ReviewSection reviews={reviews} />
      </div>
      <div className=" min-h-screen"></div>
    </div>
  );
};

export default FilmDescription;
