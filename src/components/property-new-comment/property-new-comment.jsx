import React, {useState} from "react";
import RatingStars from "../rating-stars/rating-stars";
import {Rating} from "../../const";


const PropertyNewComment = () => {

  const [, setComment] = useState({
    comment: null,
  });

  const handleCommentInput = (evt) => {
    setComment({
      comment: evt.target.value
    });
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {Rating.map((element) =>
          <RatingStars key={element.defaultValue} rating={element} />
        )}
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" defaultValue={``} onChange={handleCommentInput} />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
      </div>
    </form>
  );
};

export default PropertyNewComment;
