import React from "react";
import propTypes from "prop-types";


const RatingStars = ({ratingScale, handleCommentRating}) => {
  const {id, defaultValue, title} = ratingScale;

  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating" defaultValue={defaultValue}
        id={id}
        type="radio"
        onChange={handleCommentRating}
      />
      <label htmlFor={id} className="reviews__rating-label form__rating-label" title={title}>
        <svg className="form__star-image" width={37} height={33}>
          <use xlinkHref="#icon-star" />
        </svg>
      </label>
    </>
  );
};

RatingStars.propTypes = {
  ratingScale: propTypes.shape({
    id: propTypes.string,
    defaultValue: propTypes.number,
    title: propTypes.string
  }).isRequired,
  handleCommentRating: propTypes.func.isRequired,
};

export default RatingStars;
