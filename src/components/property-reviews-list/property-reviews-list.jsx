import React from "react";
import PropertyReviewItem from "../property-review-item/property-review-item";
import propTypes from "prop-types";
import {commentPropsTypes} from "../../props-types";
import {fetchComments} from "../../store/api-actions";
import {getSortedComments} from "../../utils";
import {connect} from "react-redux";
import {getComments} from "../../store/load-data/selectors";

const CommentsNum = {
  MIN: 0,
  MAX: 10
};

const PropertyReviewsList = ({comments}) => {

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

const mapStateToProps = (state) => ({
  comments: getComments(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData(id) {
    dispatch(fetchComments(id));
  },
});

export {PropertyReviewsList};
export default connect(mapStateToProps, mapDispatchToProps)(PropertyReviewsList);

