import React from "react";
import propTypes from "prop-types";
import {Link} from 'react-router-dom';
import {offerPropsTypes} from "../../props-types";
import {classNameTypes, OfferType} from "../../const";
import OfferMark from "../offer-mark/offer-mark";
import {setFavorite, fetchOffers} from "../../store/api-actions";
import {useDispatch} from "react-redux";


const OfferCard = ({offer, handleInActiveOfferId, handleOutActiveOfferId}) => {

  const dispatch = useDispatch();
  const {previewImage, title, type, price, isFavorite, isPremium, id} = offer;

  const handleFavoriteClick = (evt) => {
    evt.currentTarget.classList.toggle(`place-card__bookmark-button--active`);
    dispatch(setFavorite(id, Number(!isFavorite)));
    dispatch(fetchOffers());
  };

  return (
    <article className="cities__place-card place-card"
      onMouseEnter={() => {
        handleInActiveOfferId(offer.id);
      }}
      onMouseOut={() => {
        handleOutActiveOfferId();
      }}>
      {isPremium
        ? <OfferMark className={classNameTypes.placeCard} />
        : null}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={previewImage} width={260} height={200} alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button onClick={handleFavoriteClick} className={`place-card__bookmark-button ${isFavorite
            ? `place-card__bookmark-button--active`
            : ``} button`} type="button">
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `80%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{OfferType[type.toUpperCase()]}</p>
      </div>
    </article>
  );
};


OfferCard.propTypes = {
  offer: propTypes.shape(offerPropsTypes).isRequired,
  handleInActiveOfferId: propTypes.func.isRequired,
  handleOutActiveOfferId: propTypes.func.isRequired,
};

export default OfferCard;
