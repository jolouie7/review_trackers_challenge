import React, {useState, useEffect} from 'react';
import moment from 'moment';

import ReviewCard from '../ReviewCard/ReviewCard';
import ReviewCardResponse from '../ReviewCardResponse/ReviewCardResponse';

import './reviewCardDetails.scss'

const ReviewCardDetails = () => {
  const [review, setReview] = useState(JSON.parse(localStorage.getItem("review")));
  const [response, setResponse] = useState(JSON.parse(localStorage.getItem("review")).response);
  const [isResponseBoxVisible, setIsResponseBoxVisible] = useState(false);

  const handleChange = (e) => {
    if (e.target.name === "response") {
      setResponse(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("response: ", response);
  };

  const handleClick = () => {
    console.log("hello");
  }

  const handleEditResponse = () => {
    setIsResponseBoxVisible(!isResponseBoxVisible);
  }

  return (
    <div className="review-card-details-container">
      <ReviewCard
        review={review}
        handleClick={handleClick}
        maxWidthStyle={"auto"}
      />
      <ReviewCardResponse handleEditResponse={handleEditResponse} />
      {/* display textbox for the user to add a response */}
      {/* have the response update the json object in the reviews.json file */}

      <form
        className={`${isResponseBoxVisible ? "show" : "hidden"}`}
        onSubmit={handleSubmit}
      >
        <textarea
          rows="4"
          cols="50"
          type="text"
          name="response"
          value={response}
          onChange={handleChange}
          placeholder="Add a response"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ReviewCardDetails
