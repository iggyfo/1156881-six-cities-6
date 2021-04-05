import React from "react";
import propTypes from "prop-types";
import {offerPropsTypes} from "../../props-types";
import OfferCard from "../offer-card/offer-card";
import {ActionCreator} from "../../store/action";
import {connect} from "react-redux";
import Sorting from "../sorting/sorting";
import Map from "../map/map";
import {getActiveOfferId} from "../../store/change-data/selectors";


const OfferList = ({offers, currentCity, handleInActiveOfferId, handleOutActiveOfferId}) => {

  return (
    <div className="cities__places-container container" style={{height: `700px`}}>
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{offers.length} places to stay in {currentCity}</b>
        <Sorting />
        <div className="cities__places-list places__list tabs__content">
          {offers.map((offer) =>
            <OfferCard
              key={offer.id}
              offer={offer}
              handleInActiveOfferId={handleInActiveOfferId}
              handleOutActiveOfferId={handleOutActiveOfferId}
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
  handleOutActiveOfferId: propTypes.func.isRequired,
  handleInActiveOfferId: propTypes.func.isRequired,
};


const mapStateToProps = (state) => ({
  activeOffer: getActiveOfferId(state),
});

const mapDispatchToProps = (dispatch) => ({
  handleInActiveOfferId(offerId) {
    dispatch(ActionCreator.changeActiveOfferId(offerId));
  },
  handleOutActiveOfferId() {
    dispatch(ActionCreator.changeActiveOfferId(null));
  },
});

export {OfferList};
export default connect(mapStateToProps, mapDispatchToProps)(OfferList);

