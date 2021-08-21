import React, {useState, useEffect} from 'react';
import moment from 'moment';

import ReviewCard from '../ReviewCard/ReviewCard';
import ReviewCardResponse from '../ReviewCardResponse/ReviewCardResponse';

import './reviewCardDetails.scss'

const ReviewCardDetails = () => {
  const initialResponse = JSON.parse(localStorage.getItem("review")).response;
  const [review, setReview] = useState(JSON.parse(localStorage.getItem("review")));
  const [submittedResponse, setSubmittedResponse] = useState("")
  // const [response, setResponse] = useState(JSON.parse(localStorage.getItem("review")).response);
  const [response, setResponse] = useState(initialResponse);
  const [isResponseBoxVisible, setIsResponseBoxVisible] = useState(false);

  useEffect(() => {
    if (!response) {
      setIsResponseBoxVisible(true);
    }
  }, [])

  const handleChange = (e) => {
    if (e.target.name === "response") {
      setResponse(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("response: ", response);
    const reviews = JSON.parse(localStorage.getItem("allReviews"));
    for (let i = 0; i < reviews.length; i++) {
      if (reviews[i].id === review.id) {
        // console.log(reviews[i].id);
        reviews[i].response = response;
        setSubmittedResponse(response);
        console.log(reviews)
        localStorage.setItem("allReviews", JSON.stringify(reviews));
        setIsResponseBoxVisible(false);
      }
    }
  };

  const handleClick = () => {
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
      {(submittedResponse || initialResponse) && (
        <ReviewCardResponse
          handleEditResponse={handleEditResponse}
          review={review}
          response={response}
        />
      )}

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
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ReviewCardDetails
