import React from "react";
import FavoriteCard from "../favorite-card/favorite-card";
import propTypes from "prop-types";
import {offerPropsTypes} from "../../props-types";
import {getCurrentCityOffers} from "../../utils";


const FavoriteItem = ({offers, currentCity}) => {

  const currentCityOffers = getCurrentCityOffers(offers, currentCity);

  return (
    <>
      <li className="favorites__locations-items">
        <div className="favorites__locations locations locations--current">
          <div className="locations__item">
            <a className="locations__item-link" href="#">
              <span>{currentCity}</span>
            </a>
          </div>
        </div>
        <div className="favorites__places">
          {currentCityOffers.map((offer) =>
            <FavoriteCard
              key={offer.id}
              offer={offer}
            />)}
        </div>
      </li>
    </>
  );
};

FavoriteItem.propTypes = {
  offers: propTypes.arrayOf(propTypes.shape(offerPropsTypes).isRequired),
  currentCity: propTypes.string.isRequired,
};

export default FavoriteItem;
