import React, {useState, useRef} from "react";
import RatingStars from "../rating-stars/rating-stars";
import {Rating} from "../../const";
import propTypes from "prop-types";
import {connect} from "react-redux";
import {uploadComments} from "../../store/api-actions";


const PropertyNewComment = ({id, onUploadComment}) => {

  const formRef = useRef();
  const textareaRef = useRef();
  const [comment, setComment] = useState(null);
  const [rating, setRating] = useState(null);


  const handleCommentInput = (evt) => {
    setComment(evt.target.value);
  };

  const handleCommentRating = (evt) => {
    setRating(evt.target.value);
  };

  const handleCommentSubmit = (evt) => {
    evt.preventDefault();
    formRef.current.reset();
    onUploadComment(id, {comment, rating});
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleCommentSubmit} ref={formRef}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {Rating.map((element) =>
          <RatingStars key={element.defaultValue} ratingScale={element} handleCommentRating={handleCommentRating}/>
        )}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        defaultValue={``}
        ref={textareaRef}
        onChange={handleCommentInput} />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" >Submit</button>
      </div>
    </form>
  );
};

PropertyNewComment.propTypes = {
  onUploadComment: propTypes.func.isRequired,
  id: propTypes.string.isRequired,
};

const mapStateToProps = ({onUploadComment}) => ({
  onUploadComment,
});

const mapDispatchToProps = (dispatch) => ({
  onUploadComment(id, comment) {
    dispatch(uploadComments(id, comment));
  }
});

export {PropertyNewComment};
export default connect(mapStateToProps, mapDispatchToProps)(PropertyNewComment);
