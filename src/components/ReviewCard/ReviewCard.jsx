import React from 'react';
import moment from "moment";

import './reviewCard.scss'

const ReviewCard = (props) => {
  const { id, author, place, published_at, rating, content } = props.review;
  const handleClick = props.handleClick;
  const published_at_date = moment(published_at).format("DD/MM/YYYY");

  return (
    // Pass id to handleClick

    <div key={id} className="review-card-container" onClick={() => handleClick(id)}>
      <div className="review-card-header">
        <h1>{place}</h1>
        <div>{rating}</div>
      </div>
      <div>{content}</div>
      <div className="review-card-footer">
        <div>{author}</div>
        <div>{published_at_date}</div>
      </div>
    </div>
  );
};

export default ReviewCard
