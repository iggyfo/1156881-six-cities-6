import React from "react";
import Rating from "../rating/rating";
import propTypes from "prop-types";
import {reviewsPropsTypes} from "../../props-types";
import {classNameTypes} from "../../const";
import dayjs from "dayjs";


const PropertyReviewItem = ({review}) => {
  const {user, rating, comment, date} = review;
  const {name, avatarUrl} = user;

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
        <Rating
          rating={rating}
          className={classNameTypes.reviews}
        />
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={`${dayjs(date).format(`YYYY-MM-DD`)}`}>{dayjs(date).format(`MMMM YYYY`)}</time>
      </div>
    </li>
  );
};

PropertyReviewItem.propTypes = {
  review: propTypes.shape(reviewsPropsTypes),
};

export default PropertyReviewItem;
