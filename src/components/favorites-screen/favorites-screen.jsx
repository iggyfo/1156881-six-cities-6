import React from "react";
import FavoriteCard from "../favorite-card/favorite-card";
import propTypes from "prop-types";
import {offerPropsTypes} from "../../props-types";
import Header from "../header/header";


const FavoritesScreen = ({offers, userAuth}) => {

  return (
    <div className="page">
      <Header userAuth={userAuth} />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Amsterdam</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  {offers.map((offer) =>
                    <FavoriteCard
                      key={offer.id}
                      offer={offer}
                    />)}
                </div>
              </li>
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
  offers: propTypes.arrayOf(
      propTypes.shape(offerPropsTypes).isRequired
  ),
  userAuth: propTypes.string,
};

export default FavoritesScreen;
