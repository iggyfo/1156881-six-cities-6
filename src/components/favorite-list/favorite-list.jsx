import React from "react";
import propTypes from "prop-types";
import {offerPropsTypes} from "../../props-types";
import {getCitiesWithFavoriteOffers} from "../../utils";
import FavoriteItem from "../favorite-item/favorite-item";
import {nanoid} from "@reduxjs/toolkit";


const FavoriteList = ({favoriteOffers}) => {

  const citiesList = getCitiesWithFavoriteOffers(favoriteOffers);
  return (
    <>
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {citiesList.map((city) =>
          <FavoriteItem
            key={nanoid()}
            offers={favoriteOffers}
            currentCity={city}
          />)}
      </ul>
    </>
  );
};

FavoriteList.propTypes = {
  favoriteOffers: propTypes.arrayOf(propTypes.shape(offerPropsTypes).isRequired),
};

export default FavoriteList;
