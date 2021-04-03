import React from "react";
import propTypes from "prop-types";
import {offerPropsTypes} from "../../props-types";
import Header from "../header/header";
import FavoriteList from "../favorite-list/favorite-list";
import FavoritesEmptyScreen from "../favorites-empty-screen/favorites-empty-screen";
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
        <section className={`favorites ${
          !favoritesOffers
            ? `favorites--empty`
            : ``}`}>
          <div className="page__favorites-container container">
            {!favoritesOffers
              ? <FavoritesEmptyScreen />
              : citiesList.map((city, index) =>
                <FavoriteList
                  key={index}
                  offers={favoritesOffers}
                  currentCity={city}
                />
              )
            }
          </div>
        </section>
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
