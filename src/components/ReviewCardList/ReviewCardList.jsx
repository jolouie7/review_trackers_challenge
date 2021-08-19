import React from 'react';
import { useHistory } from "react-router-dom";

import Reviews from '../../reviews.json';
import ReviewCard from '../ReviewCard/ReviewCard';

import './reviewCardList.scss'


const ReviewCardList = () => {
  const history = useHistory();

  const handleClick = (review) => {
    localStorage.setItem('review', JSON.stringify(review));
    history.push(`/review/${review.id}`);
  }

  return (
    <div className="review-card-list-container">
      {Reviews.map((review) => (
        <ReviewCard handleClick={handleClick} review={review} maxWidthStyle={"350px"}/>
      ))}
    </div>
  );
}

export default ReviewCardList
