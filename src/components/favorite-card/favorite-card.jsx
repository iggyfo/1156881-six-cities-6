import React from "react";
import {offerPropsTypes} from "../../props-types";
import propTypes from "prop-types";
import {classNameTypes} from "../../const";
import Rating from "../rating/rating";
import {fetchOffers, setFavorite} from "../../store/api-actions";
import {connect} from "react-redux";
import {Link} from "react-router-dom";


const FavoriteCard = ({offer, onOfferFavorite}) => {

  const {previewImage, title, type, price, rating, id, isFavorite} = offer;
  const handleFavoriteClick = (evt) => {
    evt.currentTarget.classList.toggle(`place-card__bookmark-button--active`);
    onOfferFavorite(id, Number(!isFavorite));
  };
  return (
    <article className="favorites__card place-card">
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={previewImage} width={150} height={110} alt="Place image" />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button" onClick={handleFavoriteClick}>
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <Rating
          rating={rating}
          className={classNameTypes.placeCard}
        />
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

FavoriteCard.propTypes = {
  offer: propTypes.shape(offerPropsTypes).isRequired,
  onOfferFavorite: propTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onOfferFavorite(id, favoriteStatus) {
    dispatch(setFavorite(id, favoriteStatus));
    dispatch(fetchOffers());
  }
});

export {FavoriteCard};
export default connect(null, mapDispatchToProps)(FavoriteCard);
