import React from "react";
import propTypes from "prop-types";
import {offerPropsTypes} from "../../props-types";
import OfferCard from "../offer-card/offer-card";


const NearPlacesList = ({offers}) => {

  return (
    offers.map((offer) =>
      <OfferCard
        key={offer.id}
        offer={offer}
        handleInActiveOfferId={() => {}}
        handleOutActiveOfferId={() => {}}
      />)
  );
};

NearPlacesList.propTypes = {
  offers: propTypes.arrayOf(propTypes.shape(offerPropsTypes).isRequired),
};

export default NearPlacesList;

