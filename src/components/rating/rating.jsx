import React from "react";
import propTypes from "prop-types";

const MAX_INTEGER_RATING = 5;
const MAX_PERCENT_RATING = 100;

const getIntegerRatingInPercent = (integerRating) =>
  `${((integerRating * MAX_PERCENT_RATING) / MAX_INTEGER_RATING)}%`;

const Rating = ({rating, className}) => {

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
/*
5-100
4-x
x= 5*80/100
 */
