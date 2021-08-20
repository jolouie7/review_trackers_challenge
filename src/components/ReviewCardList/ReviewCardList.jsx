import React from 'react';
import { useHistory } from "react-router-dom";

import ReviewCard from '../ReviewCard/ReviewCard';

import './reviewCardList.scss'


const ReviewCardList = () => {
  const history = useHistory();
  const reviews = JSON.parse(localStorage.getItem("allReviews"));

  const handleClick = (review) => {
    localStorage.setItem('review', JSON.stringify(review));
    // localStorage.setItem("allReviews", JSON.stringify(Reviews));
    history.push(`/review/${review.id}`);
  }

  return (
    <div className="review-card-list-container">
      {reviews.map((review) => (
        <ReviewCard handleClick={handleClick} review={review} maxWidthStyle={"350px"}/>
      ))}
    </div>
  );
}

export default ReviewCardList
