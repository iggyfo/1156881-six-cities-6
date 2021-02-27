import React, {useState} from "react";
import OfferCard from "../offer-card/offer-card";
import propTypes from "prop-types";
import {offerPropsTypes} from "../../props-types";


const NearPlacesList = ({nearby}) => {
  const [, setActiveOfferId] = useState(null);

  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {nearby.map((nearbyOffer) =>
          <OfferCard
            key={nearbyOffer.id}
            offer={nearbyOffer}
            onMouseEnter={setActiveOfferId}
          />)}
      </div>
    </section>
  );
};

NearPlacesList.propTypes = {
  nearby: propTypes.arrayOf(propTypes.shape(offerPropsTypes)),
};

export default NearPlacesList;
