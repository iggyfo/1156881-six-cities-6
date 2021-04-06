import React from "react";
import OfferCard from "../offer-card/offer-card";
import Sorting from "../sorting/sorting";
import Map from "../map/map";
import propTypes from "prop-types";
import {SORT_TYPES} from "../../const";
import {changeActiveOfferId} from "../../store/action";
import {useDispatch} from "react-redux";
import {offerPropsTypes} from "../../props-types";


const OfferList = ({offers, currentCity}) => {

  const dispatch = useDispatch();
  const handleInActiveOfferId = (offerId) => dispatch(changeActiveOfferId(offerId));

  return (
    <div className="cities__places-container container" style={{height: `700px`}}>
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{offers.length} places to stay in {currentCity}</b>
        <Sorting sortTypes={SORT_TYPES}/>
        <div className="cities__places-list places__list tabs__content">
          {offers.map((offer) =>
            <OfferCard
              key={offer.id}
              offer={offer}
              handleInActiveOfferId={handleInActiveOfferId}
            />)}
        </div>
      </section>
      <div className="cities__right-section">
        <section className="cities__map map">
          <Map
            offers={offers}
          />
        </section>
      </div>
    </div>
  );
};

OfferList.propTypes = {
  offers: propTypes.arrayOf(propTypes.shape(offerPropsTypes).isRequired),
  currentCity: propTypes.string.isRequired,
};

export default OfferList;

