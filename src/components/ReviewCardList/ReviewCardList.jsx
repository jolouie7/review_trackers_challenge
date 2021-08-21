import React, {useEffect} from 'react';

import Reviews from "../../reviews.json";
import ReviewCard from '../ReviewCard/ReviewCard';

import './reviewCardList.scss'

const ReviewCardList = ({reviews}) => {

  // useEffect(() => {
  //   if (JSON.parse(localStorage.getItem("allReviews")) === null) {
  //     localStorage.setItem("allReviews", JSON.stringify(Reviews));
  //   } else {
  //     localStorage.setItem("allReviews", JSON.stringify(Reviews));
  //   }
  // }, []);

  // const reviews = JSON.parse(localStorage.getItem("allReviews"));

  return (
    <div className="review-card-list-container" data-testid="review-card-list">
      {reviews.map((review) => (
        <ReviewCard review={review} maxWidthStyle={"350px"}/>
      ))}
    </div>
  );
}

export default ReviewCardList
