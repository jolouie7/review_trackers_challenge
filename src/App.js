import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Reviews from "./reviews.json";
import ReviewCardList from "./components/ReviewCardList/ReviewCardList";
import ReviewsHeader from "./components/ReviewsHeader/ReviewsHeader";
import NotFound from "./components/NotFound/NotFound";
import ReviewCardDetails from "./components/ReviewCardDetails/ReviewCardDetails";

function App() {
  useEffect(() => {
    localStorage.setItem("allReviews", JSON.stringify(Reviews));
  }, [])

  return (
    <Router>
      <ReviewsHeader />
      <Switch>
        <Route path="/review/:id">
          <ReviewCardDetails />
        </Route>
        <Route exact path="/">
          <ReviewCardList />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
