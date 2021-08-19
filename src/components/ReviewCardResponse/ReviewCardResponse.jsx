import React, { useState } from 'react';
import moment from "moment";

import './reviewCardResponse.scss';

const ReviewCardResponse = ({handleEditResponse}) => {
  const [review, setReview] = useState(JSON.parse(localStorage.getItem('review')));
  const { id, author, place, published_at, rating, content, response } = review;
  const published_at_date = moment(published_at).format("DD/MM/YYYY");

  return (
    <div className="response-card-container">
      <div>
        <div>{response}</div>
        <div>{author}</div>
        <div>{published_at_date}</div>
      </div>
      <div onClick={handleEditResponse}>Edit</div>
    </div>
  );
}

export default ReviewCardResponse
