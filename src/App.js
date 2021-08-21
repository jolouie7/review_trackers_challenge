import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Reviews from "./reviews.json";
import ReviewCardList from "./components/ReviewCardList/ReviewCardList";
import ReviewsHeader from "./components/ReviewsHeader/ReviewsHeader";
import NotFound from "./components/NotFound/NotFound";
import ReviewCardDetails from "./components/ReviewCardDetails/ReviewCardDetails";

function App() {
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    // if allReviews don't exist in localStorage, set it to localStorage
    if (!localStorage.getItem("allReviews")) {
      localStorage.setItem("allReviews", JSON.stringify(Reviews));
    } else {
      const allReviews = JSON.parse(localStorage.getItem("allReviews"));
      setReviews(allReviews);
    }
    // const allReviews = localStorage.setItem("allReviews", JSON.stringify(Reviews));
    // Get allReviews from localStorage
    // setReviews(Reviews);
  }, [])

  return (
    <Router>
      <ReviewsHeader />
      <Switch>
        <Route path="/review/:id">
          <ReviewCardDetails />
        </Route>
        <Route exact path="/">
          <ReviewCardList reviews={reviews} />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
