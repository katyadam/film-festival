import { FC } from 'react';
import { MockComment } from '../../mock/reviews';

type Review = {
  review: MockComment;
};

const FilmReview: FC<Review> = ({ review }) => {
  return (
    <div className="text-rose-900 font-semibold mb-4 bg-white p-6 rounded-lg shadow-md relative">
      <p className="text-3xl mb-2">{review.user}</p>
      <p>{review.comment}</p>
      <p className="text-sm absolute right-2">{review.date}</p>
    </div>
  );
};

export default FilmReview;
