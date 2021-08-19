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

  // const { id, author, place, published_at, rating, content } = review;
  if (review) {
    // const { id, author, place, published_at, rating, content } = review;
    // const date = moment(published_at).fromNow();
    // return (
    //   <ReviewCard
    //     id={id}
    //     author={author}
    //     place={place}
    //     date={date}
    //     rating={rating}
    //     content={content}
    //   />
    // );
  }
  // const published_at_date = moment(review.published_at).format("DD/MM/YYYY");

  return (
    <div>
      <ReviewCard review={review} handleClick={handleClick}/>
    </div>
  );
}

export default ReviewCardDetails
