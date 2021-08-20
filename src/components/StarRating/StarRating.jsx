import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(
        <IconContext.Provider value={{ color: "#FF9529" }}>
          <FaStar key={i} />
        </IconContext.Provider>
      );
    } else {
      stars.push(
        <IconContext.Provider value={{ color: "#FF9529" }}>
          <FaRegStar key={i} />
        </IconContext.Provider>
      );
    }
  }
  return <div>{stars}</div>;
};

export default StarRating;
