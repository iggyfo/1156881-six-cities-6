import React, {Component} from "react";
import propTypes from "prop-types";
import RatingStars from "../rating-stars/rating-stars";
import {Rating} from "../../const";


class PropertyNewComment extends Component {
  constructor(props) {
    super(props);
    this.state = null;
    this.handelCommentInput = this.handelCommentInput.bind(this);
  }

  handelCommentInput(evt) {
    const comment = evt.target.value;
    this.setState({comment});
  }

  render() {
    return (
      <form className="reviews__form form" action="#" method="post">
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div className="reviews__rating-form form__rating">
          <input className="form__rating-input visually-hidden" name="rating" defaultValue={5} id={Rating.five.id} type="radio" />
          <RatingStars rating={Rating.five} />
          <input className="form__rating-input visually-hidden" name="rating" defaultValue={5} id={Rating.four.id} type="radio" />
          <RatingStars rating={Rating.four} />
          <input className="form__rating-input visually-hidden" name="rating" defaultValue={5} id={Rating.three.id} type="radio" />
          <RatingStars rating={Rating.three} />
          <input className="form__rating-input visually-hidden" name="rating" defaultValue={5} id={Rating.two.id} type="radio" />
          <RatingStars rating={Rating.two} />
          <input className="form__rating-input visually-hidden" name="rating" defaultValue={5} id={Rating.one.id} type="radio" />
          <RatingStars rating={Rating.one} />
        </div>
        <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" defaultValue={``} onChange={this.handelCommentInput} />
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
        </div>
      </form>
    );
  }
}

PropertyNewComment.propTypes = {
  image: propTypes.string,
};

export default PropertyNewComment;
