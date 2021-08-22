import React from 'react';
import moment from "moment";

import './reviewCardResponse.scss';

const ReviewCardResponse = ({handleEditResponse, review, response}) => {
  const { author, published_at } = review;
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
