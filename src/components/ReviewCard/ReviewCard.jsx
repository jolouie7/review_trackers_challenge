import React, {useState, useEffect} from 'react';
import moment from "moment";
import { useHistory } from "react-router-dom";

import './reviewCard.scss'
import StarRating from '../StarRating/StarRating';

// maxWidthStyle is needed for review details view to be able to display the fully expanded review
const ReviewCard = ({review, maxWidthStyle}) => {
  const [response, setResponse] = useState('')
  const { id, author, place, published_at, rating, content } = review;

  const history = useHistory();
  const published_at_date = moment(published_at).format("DD/MM/YYYY");
  const allReviews = JSON.parse(localStorage.getItem('allReviews'));
  const url = window.location.href; // We only want to show the response tag if the user is looking at the list view

  useEffect(() => {
    for (let i = 0; i < allReviews.length; i++) {
      if (allReviews[i].id === review.id) {
        setResponse(allReviews[i].response);
      }
    }
  }, [])

  const handleClick = (review) => {
    if (!localStorage.getItem('review')) {
      localStorage.setItem('review', JSON.stringify(review));
    }

    for (let i = 0; i < allReviews.length; i++) {
      if (allReviews[i].id === review.id) {
        const newReview = allReviews[i];
        localStorage.setItem("review", JSON.stringify(newReview));
      }
    }
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
        <StarRating rating={rating}/>
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
