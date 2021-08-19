import React from 'react';
import { useHistory } from "react-router-dom";

import Reviews from '../../reviews.json';
import ReviewCard from '../ReviewCard/ReviewCard';


const ReviewCardList = () => {
  const history = useHistory();

  const handleClick = (review) => {
    // console.log(review.id);
    localStorage.setItem('review', JSON.stringify(review));
    history.push(`/review/${review.id}`);
  }

  return (
    <div style={{display: 'flex', flexWrap:'wrap', margin:'0 7rem', justifyContent:'space-between'}}>
      {Reviews.map((review) => (
        <ReviewCard handleClick={handleClick} review={review} />
      ))}
    </div>
  );
}

export default ReviewCardList
