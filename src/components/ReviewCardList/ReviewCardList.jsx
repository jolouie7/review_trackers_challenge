import React from 'react';
import Reviews from '../../reviews.json';
import ReviewCard from '../ReviewCard/ReviewCard';

const ReviewCardList = () => {

  const handleClick = (id) => {
    console.log(id);
  }

  return (
    <div>
      {Reviews.map((review) => (
        <ReviewCard handleClick={handleClick} review={review} />
      ))}
    </div>
  );
}

export default ReviewCardList
