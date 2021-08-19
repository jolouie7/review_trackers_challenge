import React, {useState, useEffect} from 'react';
import moment from 'moment';
import ReviewCard from '../ReviewCard/ReviewCard';

const ReviewCardDetails = () => {
  const [review, setReview] = useState(
    JSON.parse(localStorage.getItem("review"))
  );
  console.log(review);

  // useEffect(() => {
  //   getReview();
  // }, []);

  const getReview = () => {
    const review = localStorage.getItem("review");
    console.log(review);
    if (review) {
      setReview(JSON.parse(review));
    }
  };

  const handleClick = () => {
    console.log("hello");
  }

  return (
    <div style={{display: "grid"}}>
      <ReviewCard review={review} handleClick={handleClick} maxWidthStyle={'auto'}/>
    </div>
  );
}

export default ReviewCardDetails
