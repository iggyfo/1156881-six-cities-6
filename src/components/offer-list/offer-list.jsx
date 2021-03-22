import React from "react";
import propTypes from "prop-types";
import {offerPropsTypes} from "../../props-types";
import OfferCard from "../offer-card/offer-card";
import {ActionCreator} from "../../store/action";
import {connect} from "react-redux";


const OfferList = ({offers, handleActiveOfferId}) => {

  return (
    offers.map((offer) =>
      <OfferCard
        key={offer.id}
        offer={offer}
        handleActiveOfferId={handleActiveOfferId}
      />)
  );
};

OfferList.propTypes = {
  offers: propTypes.arrayOf(propTypes.shape(offerPropsTypes).isRequired)};


const mapStateToProps = ({activeOffer}) => ({
  activeOffer,
});

const mapDispatchToProps = (dispatch) => ({
  handleActiveOfferId(offerCoords) {
    dispatch(ActionCreator.changeActiveOfferId(offerCoords));
  },
});

export {OfferList};
export default connect(mapStateToProps, mapDispatchToProps)(OfferList);

