import React from "react";
import FavoriteCard from "../favorite-card/favorite-card";
import propTypes from "prop-types";
import {offerPropsTypes} from "../../props-types";
import {getCurrentCityOffers} from "../../utils";


const FavoriteList = ({offers, currentCity}) => {

  const currentCityOffers = getCurrentCityOffers(currentCity, offers);

  return (
    <>
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
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
      </ul>
    </>
  );
};

FavoriteList.propTypes = {
  offers: propTypes.arrayOf(propTypes.shape(offerPropsTypes).isRequired),
  currentCity: propTypes.string.isRequired,
};

export default FavoriteList;
