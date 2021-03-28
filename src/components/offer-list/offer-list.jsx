import React from "react";
import propTypes from "prop-types";
import {offerPropsTypes} from "../../props-types";
import OfferCard from "../offer-card/offer-card";
import {ActionCreator} from "../../store/action";
import {connect} from "react-redux";


const OfferList = ({offers, handleInActiveOfferId, handleOutActiveOfferId}) => {

  return (
    offers.map((offer) =>
      <OfferCard
        key={offer.id}
        offer={offer}
        handleInActiveOfferId={handleInActiveOfferId}
        handleOutActiveOfferId={handleOutActiveOfferId}
      />)
  );
};

OfferList.propTypes = {
  offers: propTypes.arrayOf(propTypes.shape(offerPropsTypes).isRequired),
  handleOutActiveOfferId: propTypes.func.isRequired,
  handleInActiveOfferId: propTypes.func.isRequired,
};


const mapStateToProps = ({activeOffer}) => ({
  activeOffer,
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

