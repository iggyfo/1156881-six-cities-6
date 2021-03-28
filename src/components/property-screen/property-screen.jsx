import PropertyImage from "../property-image/property-image";
import PropertyNewComment from "../property-new-comment/property-new-comment";
import PropertyGoods from "../property-goods/property-goods";
import PropertyHost from "../property-host/property-host";
import PropertyReviewsList from "../property-reviews-list/property-reviews-list";
import LoadingScreen from "../loading-screen/loading-screen";
import React, {useEffect} from "react";
import {connect} from "react-redux";
import {fetchOffer, fetchNearOffers, fetchComments} from "../../store/api-actions";
import propTypes from "prop-types";
import {offerPropsTypes, commentPropsTypes} from "../../props-types";
import {classNameTypes} from "../../const";
import Header from "../header/header";
import OfferMark from "../offer-mark/offer-mark";
import Map from "../map/map";
import OfferList from "../offer-list/offer-list";
const MAX_OFFER_PHOTO_IN_GALLERY = 6;

const PropertyScreen = ({id, offer, nearPlaces, comments, userAuth, isNearPlacesLoaded, isOfferLoaded, isCommentsLoaded, onLoadData}) => {

  useEffect(() => {
    if (!isOfferLoaded && !isCommentsLoaded && !isNearPlacesLoaded) {
      onLoadData(id);
    }
  }, [id, isOfferLoaded, isCommentsLoaded, isNearPlacesLoaded]);

  if (!isOfferLoaded && !isCommentsLoaded && !isNearPlacesLoaded) {
    return (
      <LoadingScreen />
    );
  }


  const {images, title, rating, type, bedrooms, maxAdults, price, goods, host, description, isFavorite, isPremium} = offer;

  return (
    <div className="page">
      <Header userAuth={userAuth} />
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
                <button className={`property__bookmark-button ${isFavorite ? `property__bookmark-button--active` : ``} button`} type="button">
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
                  {type}
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
                <PropertyReviewsList comments={comments}/>
                <PropertyNewComment />
              </section>
            </div>
          </div>
          <section className="property__map map">
            <Map
              offers={nearPlaces}
            />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <OfferList offers={nearPlaces} />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

PropertyScreen.propTypes = {
  offer: propTypes.shape(offerPropsTypes).isRequired,
  nearPlaces: propTypes.arrayOf(propTypes.shape(offerPropsTypes)),
  comments: propTypes.arrayOf(propTypes.shape(commentPropsTypes)),
  userAuth: propTypes.string,
  id: propTypes.string.isRequired,
  isNearPlacesLoaded: propTypes.bool.isRequired,
  isOfferLoaded: propTypes.bool.isRequired,
  isCommentsLoaded: propTypes.bool.isRequired,
  onLoadData: propTypes.func.isRequired,
};

const mapStateToProps = ({offer, comments, nearPlaces, isNearPlacesLoaded, isOfferLoaded, isCommentsLoaded}, {match}) => ({
  offer,
  comments,
  nearPlaces,
  isNearPlacesLoaded,
  isOfferLoaded,
  isCommentsLoaded,
  id: match.params.id,
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData(id) {
    dispatch(fetchOffer(id));
    dispatch(fetchNearOffers(id));
    dispatch(fetchComments(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PropertyScreen);
