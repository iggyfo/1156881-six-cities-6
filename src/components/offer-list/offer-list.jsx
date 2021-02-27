import React, {useState} from "react";
import propTypes from "prop-types";
import {offerPropsTypes} from "../../props-types";
import OfferCard from "../offer-card/offer-card";


const OfferList = ({offers}) => {
  const [, setActiveOfferId] = useState(null);

  return (
    offers.map((offer) =>
      <OfferCard
        key={offer.id}
        offer={offer}
        onMouseEnter={setActiveOfferId}
      />)
  );
};

OfferList.propTypes = {
  offers: propTypes.arrayOf(propTypes.shape(offerPropsTypes).isRequired)};

export default OfferList;

