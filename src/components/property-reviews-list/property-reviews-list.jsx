import React from "react";
import PropertyReviewItem from "../property-review-item/property-review-item";
import propTypes from "prop-types";
import {commentPropsTypes} from "../../props-types";
import {getSortedComments} from "../../utils";
import {useSelector} from "react-redux";

const CommentsNum = {
  MIN: 0,
  MAX: 10
};

const PropertyReviewsList = () => {

  const {comments} = useSelector((state) => state.DATA);

  const sortedComments = comments.slice(0, CommentsNum.MAX).sort(getSortedComments);
  return (
    <>
      <h2 className="reviews__title">Reviews · <span className="reviews__amount">{comments.length}</span></h2>
      <ul className="reviews__list">
        {sortedComments.map((userComment, index) =>
          <PropertyReviewItem
            key={index}
            userComment={userComment}
          />
        )}
      </ul>
    </>
  );
};

PropertyReviewsList.propTypes = {
  comments: propTypes.arrayOf(propTypes.shape(commentPropsTypes)),
};

export default PropertyReviewsList;

