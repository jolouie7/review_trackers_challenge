import React from 'react';
import { Link } from "react-router-dom";

import './reviewsHeader.scss'

const ReviewsHeader = () => {
  return (
    <div className="header-container">
      <h1>
        <Link to='/'>Reviews</Link>
      </h1>
    </div>
  );
}

export default ReviewsHeader;
