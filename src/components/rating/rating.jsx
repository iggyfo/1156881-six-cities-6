import React from "react";
import propTypes from "prop-types";

const RATING_STEP = 20;

const Rating = ({rating, className}) => {

  const getIntegerRatingInPercent = (integerRating) =>`${Math.round(integerRating) * RATING_STEP}%`;

  return (
    <div className={`${className}__rating rating`}>
      <div className={`${className}__stars rating__stars`}>
        <span style={{width: getIntegerRatingInPercent(rating)}} />
        <span className="visually-hidden">Rating</span>
      </div>
    </div>
  );
};

Rating.propTypes = {
  rating: propTypes.number.isRequired,
  className: propTypes.string.isRequired
};

export default Rating;
