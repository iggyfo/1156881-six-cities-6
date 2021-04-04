import PropertyImage from "../property-image/property-image";
import PropertyNewComment from "../property-new-comment/property-new-comment";
import PropertyGoods from "../property-goods/property-goods";
import PropertyHost from "../property-host/property-host";
import PropertyReviewsList from "../property-reviews-list/property-reviews-list";
import LoadingScreen from "../loading-screen/loading-screen";
import React, {useEffect} from "react";
import {connect} from "react-redux";
import {useParams} from "react-router-dom";
import {fetchOffer, fetchNearOffers, fetchComments, setFavorite} from "../../store/api-actions";
import propTypes from "prop-types";
import {offerPropsTypes, commentPropsTypes} from "../../props-types";
import {AuthorizationStatus, classNameTypes, OfferType} from "../../const";
import Header from "../header/header";
import OfferMark from "../offer-mark/offer-mark";
import Map from "../map/map";
import NearPlacesList from "../near-places-list/near-places-list";
import {ActionCreator} from "../../store/action";


const MAX_OFFER_PHOTO_IN_GALLERY = 6;

const PropertyScreen = ({
  offer,
  nearPlaces,
  comments,
  authorizationStatus,
  onLoadData,
  onOfferFavorite,
  handleInActiveOfferId,
  handleOutActiveOfferId,
  handleChangeCity,
}) => {

  const {id} = useParams();
  useEffect(() => {
    if (!offer || !nearPlaces || !comments || offer.id !== +id) {
      onLoadData(id);
    }
    if (offer) {
      handleInActiveOfferId(+id);
      handleChangeCity(offer.city.name);
    }
    return () => {
      handleOutActiveOfferId();
    };
  }, [id, offer, nearPlaces, comments]);

  if (!offer || !nearPlaces || !comments) {
    return (
      <LoadingScreen />
    );
  }
  const {images, title, rating, type, bedrooms, maxAdults, price, goods, host, description, isFavorite, isPremium} = offer;
  const handleFavoriteClick = (evt) => {
    evt.currentTarget.classList.toggle(`property__bookmark-button--active`);
    onOfferFavorite(id, Number(!isFavorite));
  };

  const getOffersForMap = () => {
    return [
      ...nearPlaces,
      offer
    ];
  };

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images.slice(0, MAX_OFFER_PHOTO_IN_GALLERY).map((image, index) =>
                <PropertyImage
                  key={index}
                  image={image}
                />)}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium
                ? <OfferMark className={classNameTypes.property} />
                : null}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button className={`property__bookmark-button ${isFavorite
                  ? `property__bookmark-button--active`
                  : ``} button`}
                onClick={handleFavoriteClick}
                type="button">
                  <svg className="property__bookmark-icon" width={31} height={33}>
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `80%`}} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {OfferType[type.toUpperCase()]}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                    Max {maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">€{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {goods.map((item, index) =>
                    <PropertyGoods
                      key={index}
                      item={item}
                    />)}
                </ul>
              </div>
              <PropertyHost
                host={host}
                description={description}
              />
              <section className="property__reviews reviews">
                <PropertyReviewsList />
                {authorizationStatus === AuthorizationStatus.AUTH
                  ? <PropertyNewComment id={id} />
                  : ``}
              </section>
            </div>
          </div>
          <section className="property__map map">
            <Map
              offers={getOffersForMap()}
              activeOfferId={offer.id}
            />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <NearPlacesList offers={nearPlaces}/>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

PropertyScreen.propTypes = {
  offer: propTypes.shape(offerPropsTypes),
  nearPlaces: propTypes.arrayOf(propTypes.shape(offerPropsTypes)),
  comments: propTypes.arrayOf(propTypes.shape(commentPropsTypes)),
  authorizationStatus: propTypes.string.isRequired,
  onLoadData: propTypes.func.isRequired,
  onOfferFavorite: propTypes.func.isRequired,
  handleInActiveOfferId: propTypes.func.isRequired,
  handleOutActiveOfferId: propTypes.func.isRequired,
  handleChangeCity: propTypes.func.isRequired,
};

const mapStateToProps = ({offer, comments, nearPlaces, authorizationStatus, activeOfferId}) => ({
  offer,
  comments,
  nearPlaces,
  authorizationStatus,
  activeOfferId,
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData(id) {
    dispatch(fetchOffer(id));
    dispatch(fetchNearOffers(id));
    dispatch(fetchComments(id));
  },
  onOfferFavorite(id, favoriteStatus) {
    dispatch(setFavorite(id, favoriteStatus));
  },
  handleInActiveOfferId(offerId) {
    dispatch(ActionCreator.changeActiveOfferId(offerId));
  },
  handleOutActiveOfferId() {
    dispatch(ActionCreator.changeActiveOfferId(null));
  },
  handleChangeCity(city) {
    dispatch(ActionCreator.changeCity(city));
  },
});

export {PropertyScreen};
export default connect(mapStateToProps, mapDispatchToProps)(PropertyScreen);
