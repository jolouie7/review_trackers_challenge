import React from 'react';

import ReviewCard from '../ReviewCard/ReviewCard';

import './reviewCardList.scss'

const ReviewCardList = ({reviews}) => {
  return (
    <div className="review-card-list-container" data-testid="review-card-list">
      {reviews.map((review) => (
        <ReviewCard review={review} maxWidthStyle={"350px"}/>
      ))}
    </div>
  );
}

export default ReviewCardList
