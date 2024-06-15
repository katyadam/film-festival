import { FC } from 'react';
import { MockComment } from '../../mock/reviews';

type Review = {
  review: MockComment;
};

const FilmReview: FC<Review> = ({ review }) => {
  return (
    <div className='mb-4 bg-white p-6 rounded-lg shadow-md'>
      <p className='text-3xl mb-2'>User: {review.user}</p>
      <p>Comment: {review.comment}</p>
      <p>Date posted: {review.date}</p>
      
    </div>
  );
};

export default FilmReview;
