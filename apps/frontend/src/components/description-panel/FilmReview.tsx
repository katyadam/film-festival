import { Review } from '@prisma/client';
import { FC } from 'react';

type FilmReviewProps = {
  review: Review;
};

const FilmReview: FC<FilmReviewProps> = ({ review }) => {
  // const {data: user} = useUser()

  return (
    <div className="text-rose-900 font-semibold mb-4 bg-white p-6 rounded-lg shadow-md relative">
      <p className="text-3xl mb-2">{review.userId}</p>
      <p>{review.description}</p>
      {/* <p className="text-sm absolute right-2">{review.stars}</p> */}
    </div>
  );
};

export default FilmReview;
