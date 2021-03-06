import React, {useState, useRef} from "react";
import RatingStars from "../rating-stars/rating-stars";
import {ratingStars} from "../../const";
import propTypes from "prop-types";
import {useDispatch} from "react-redux";
import {uploadComments, fetchComments} from "../../store/api-actions";


const CommentLength = {
  MIN: 50,
  MAX: 300,
};

const PropertyNewComment = ({id}) => {

  const dispatch = useDispatch();
  const formRef = useRef();

  const [comment, setComment] = useState(``);
  const [rating, setRating] = useState(null);

  const handleCommentInput = (evt) => setComment(evt.target.value);
  const handleCommentRating = (evt) => setRating(evt.target.value);
  const handleCommentSubmit = (evt) => {
    evt.preventDefault();
    dispatch(uploadComments(id, {comment, rating}));
    dispatch(fetchComments(id));
    formRef.current.reset();
    setComment(``);
    setRating(null);
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleCommentSubmit} ref={formRef}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {ratingStars.map((element) =>
          <RatingStars key={element.defaultValue} ratingScale={element} handleCommentRating={handleCommentRating}/>
        )}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        defaultValue={``}
        onChange={handleCommentInput} />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit"
          disabled={
            comment.length < CommentLength.MIN || comment.length > CommentLength.MAX || rating === null
          }>Submit</button>
      </div>
    </form>
  );
};

PropertyNewComment.propTypes = {
  id: propTypes.string.isRequired,
};

export default PropertyNewComment;
