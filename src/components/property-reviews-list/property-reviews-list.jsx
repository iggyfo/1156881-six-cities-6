import React from "react";
import PropertyReviewItem from "../property-review-item/property-review-item";
import propTypes from "prop-types";
import {commentPropsTypes} from "../../props-types";
import {fetchComments} from "../../store/api-actions";
import {connect} from "react-redux";


const PropertyReviewsList = ({comments}) => {
  return (
    <>
      <h2 className="reviews__title">Reviews · <span className="reviews__amount">{comments.length}</span></h2>
      <ul className="reviews__list">
        {comments.map((userComment, index) =>
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

const mapStateToProps = ({comments}) => ({
  comments,
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData(id) {
    dispatch(fetchComments(id));
  },
});

export {PropertyReviewsList};
export default connect(mapStateToProps, mapDispatchToProps)(PropertyReviewsList);

