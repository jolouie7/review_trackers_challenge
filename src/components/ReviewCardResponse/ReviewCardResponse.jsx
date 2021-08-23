import React from 'react';
import moment from "moment";
import { FaReply } from "react-icons/fa";

import './reviewCardResponse.scss';

const ReviewCardResponse = ({handleEditResponse, review, response}) => {
  const { author, published_at } = review;
  const published_at_date = moment(published_at).format("DD/MM/YYYY");

  return (
    <div className="response-card-container">
      <div className="response-card-content-container">
        <FaReply />
        <div className="response-card-content">
          <div>{response}</div>
          <div className="response-card-footer">
            <div>{author}</div>
            <div>{published_at_date}</div>
          </div>
        </div>
      </div>
      <div onClick={handleEditResponse}>Edit</div>
    </div>
  );
}

export default ReviewCardResponse
