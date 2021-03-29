import React from "react";
import PropertyReviewItem from "../property-review-item/property-review-item";
import propTypes from "prop-types";
import {offerPropsTypes, commentPropsTypes} from "../../props-types";


const PropertyReviewsList = ({comments}) => {

  const reviewsAmount = comments.length;
  return (
    <>
      <h2 className="reviews__title">Reviews · <span className="reviews__amount">{reviewsAmount}</span></h2>
      <ul className="reviews__list">
        {comments.map((userComment) =>
          <PropertyReviewItem
            key={userComment.user.id}
            userComment={userComment}
          />
        )}
      </ul>
    </>
  );
};

PropertyReviewsList.propTypes = {
  nearPlaces: propTypes.arrayOf(propTypes.shape(offerPropsTypes)),
  comments: propTypes.arrayOf(propTypes.shape(commentPropsTypes)),
};

export default PropertyReviewsList;

