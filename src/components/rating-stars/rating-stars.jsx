import React from "react";
import propTypes from "prop-types";


const RatingStars = ({rating}) => {
  const {id, defaultValue, title} = rating;
  return (
    <>
      <input className="form__rating-input visually-hidden" name="rating" defaultValue={defaultValue} id={id} type="radio" />
      <label htmlFor={id} className="reviews__rating-label form__rating-label" title={title}>
        <svg className="form__star-image" width={37} height={33}>
          <use xlinkHref="#icon-star" />
        </svg>
      </label>
    </>
  );
};

RatingStars.propTypes = {
  rating: propTypes.shape({
    id: propTypes.string,
    defaultValue: propTypes.number,
    title: propTypes.string
  }).isRequired
};

export default RatingStars;
