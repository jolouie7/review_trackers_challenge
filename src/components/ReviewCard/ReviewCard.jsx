import React from 'react';
import moment from "moment";

import './reviewCard.scss'

const ReviewCard = ({review, handleClick}) => {
  const { id, author, place, published_at, rating, content } = review;
  const published_at_date = moment(published_at).format("DD/MM/YYYY");

  return (
    <div
      key={id}
      className="review-card-container"
      onClick={() => handleClick(review)}
    >
      <div className="review-card-header">
        <h1>{place}</h1>
        <div>{rating}</div>
      </div>
      <div className="review-card-content">{content}</div>
      <div className="review-card-footer">
        <div>{author}</div>
        <div>{published_at_date}</div>
      </div>
    </div>
  );
};

export default ReviewCard
