import React, { FC } from 'react';
import { MockComment } from '../../mock/reviews';
import FilmReview from './FilmReview';

type ReviewsProps = {
  reviews: MockComment[];
};

const ReviewSection: FC<ReviewsProps> = ({ reviews }) => {
  const reviewsToShow = reviews || [];

  return (
    <div className='grid grid-cols-2 gap-8 p-4'>
      {reviewsToShow.length > 0 ? (
        reviewsToShow.map((review) => (
          <FilmReview key={review.id} review={review}></FilmReview>
        ))
      ) : (
        <p className='text-4xl'>No reviews available</p>
      )}
    </div>
  );
};

export default ReviewSection;
