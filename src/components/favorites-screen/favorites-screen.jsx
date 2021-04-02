import React from "react";
import propTypes from "prop-types";
import {offerPropsTypes} from "../../props-types";
import Header from "../header/header";
import FavoriteItem from "../favorite-item/favorite-item";
import {connect} from "react-redux";
import {getFavoritesOffers} from "../../utils";


const FavoritesScreen = ({offers, citiesList}) => {

  const favoritesOffers = getFavoritesOffers(offers);
  return (
    <div className="page">
      <Header />
      <main className={`page__main page__main--favorites ${
        !favoritesOffers
          ? `page__main--favorites-empty`
          : ``
      }`}>
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {citiesList.map((city, index) =>
                <FavoriteItem
                  key={index}
                  offers={favoritesOffers}
                  currentCity={city}
                />
              )}
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width={64} height={33} />
        </a>
      </footer>
    </div>
  );
};

FavoritesScreen.propTypes = {
  offers: propTypes.arrayOf(propTypes.shape(offerPropsTypes).isRequired),
  currentCity: propTypes.string.isRequired,
  citiesList: propTypes.arrayOf(propTypes.string).isRequired
};

const mapStateToProps = ({offers, currentCity, citiesList}) => ({
  offers,
  currentCity,
  citiesList,
});

export {FavoritesScreen};
export default connect(mapStateToProps, null)(FavoritesScreen);
