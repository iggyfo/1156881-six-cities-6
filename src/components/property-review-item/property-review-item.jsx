import React from "react";
import propTypes from "prop-types";
import {reviewsPropsTypes} from "../../props-types";


const PropertyReviewItem = ({review}) => {
  const {id, user, rating, comment, date} = review;
  const {isPro, name, avatarUrl} = user;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatarUrl} width={54} height={54} alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `80%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime="2019-04-24">April 2019</time>
      </div>
    </li>

  );
};

PropertyReviewItem.propTypes = {
  review: propTypes.shape(reviewsPropsTypes),
};

export default PropertyReviewItem;
