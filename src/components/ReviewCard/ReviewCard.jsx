import React from 'react';
import moment from "moment";
import { useHistory } from "react-router-dom";

import './reviewCard.scss'

// maxWidthStyle is needed for review details view to be able to display the fully expanded review
const ReviewCard = ({review, maxWidthStyle}) => {
  const { id, author, place, published_at, rating, content, response } = review;
  const history = useHistory();
  const published_at_date = moment(published_at).format("DD/MM/YYYY");
  const url = window.location.href; // We only want to show the response tag if the user is looking at the list view

  const handleClick = (review) => {
    localStorage.setItem("review", JSON.stringify(review));
    // localStorage.setItem("allReviews", JSON.stringify(Reviews));
    history.push(`/review/${review.id}`);
  };

  return (
    <div
      key={id}
      className="review-card-container"
      onClick={() => handleClick(review)}
      style={{ maxWidth: `${maxWidthStyle}` }}
    >
      <div className="review-card-header">
        <h1>{place}</h1>
        <div>{rating} Stars</div>
      </div>
      <div className="review-card-content">{content}</div>
      <div className="review-card-footer">
        <div>{author}</div>
        <div>{published_at_date}</div>
        {response && url === 'http://localhost:3000/' ? <div>Response</div> : null}
      </div>
    </div>
  );
};

export default ReviewCard
