import React from "react";
import PropertyReviewItem from "../property-review-item/property-review-item";
import propTypes from "prop-types";
import {offerPropsTypes, reviewsPropsTypes} from "../../props-types";


const PropertyReviewsList = ({reviews}) => {

  const reviewsAmount = reviews.length;
  return (
    <>
      <h2 className="reviews__title">Reviews · <span className="reviews__amount">{reviewsAmount}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review) =>
          <PropertyReviewItem
            key={review.user.id}
            review={review}
          />
        )}
      </ul>
    </>
  );
};

PropertyReviewsList.propTypes = {
  nearby: propTypes.arrayOf(propTypes.shape(offerPropsTypes)),
  reviews: propTypes.arrayOf(propTypes.shape(reviewsPropsTypes)),
};

export default PropertyReviewsList;

