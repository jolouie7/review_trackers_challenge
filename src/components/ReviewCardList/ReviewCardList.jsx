import React from 'react';

import ReviewCard from '../ReviewCard/ReviewCard';

import './reviewCardList.scss'

const ReviewCardList = () => {
  const reviews = JSON.parse(localStorage.getItem("allReviews"));

  return (
    <div className="review-card-list-container">
      {reviews.map((review) => (
        <ReviewCard review={review} maxWidthStyle={"350px"}/>
      ))}
    </div>
  );
}

export default ReviewCardList
