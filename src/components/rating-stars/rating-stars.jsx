import React from "react";
import propTypes from "prop-types";


const RatingStars = ({id, title}) => {

  return (
    <label htmlFor={id} className="reviews__rating-label form__rating-label" title={title}>
      <svg className="form__star-image" width={37} height={33}>
        <use xlinkHref="#icon-star" />
      </svg>
    </label>
  );
};

RatingStars.propTypes = {
  id: propTypes.string.isRequired,
  title: propTypes.string.isRequired
};

export default RatingStars;
