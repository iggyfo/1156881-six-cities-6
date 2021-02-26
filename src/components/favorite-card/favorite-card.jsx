import React from "react";
import {offerPropsTypes} from "../../props-types";
import propTypes from "prop-types";
import {ratingTypes} from "../../const";
import Rating from "../rating/rating";


const FavoriteCard = ({offer}) => {

  const {previewImage, title, type, price, rating} = offer;
  return (
    <article className="favorites__card place-card">
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={previewImage} width={150} height={110} alt="Place image" />
        </a>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <Rating
          rating={rating}
          className={ratingTypes.placeCard}
        />
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

FavoriteCard.propTypes = {
  offer: propTypes.shape(offerPropsTypes).isRequired,
};

export default FavoriteCard;
