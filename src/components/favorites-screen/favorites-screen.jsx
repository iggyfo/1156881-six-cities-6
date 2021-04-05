import React from "react";
import Header from "../header/header";
import FavoriteList from "../favorite-list/favorite-list";
import FavoritesEmptyScreen from "../favorites-empty-screen/favorites-empty-screen";
import {useSelector} from "react-redux";
import {getFavoritesOffers} from "../../utils";


const FavoritesScreen = () => {

  const {offers} = useSelector((state) => state.DATA);
  const {citiesList} = useSelector((state) => state.CHANGE);
  const favoritesOffers = getFavoritesOffers(offers);

  return (
    <div className="page">
      <Header />
      <main className={`page__main page__main--favorites ${
        favoritesOffers
          ? ``
          : `page__main--favorites-empty`
      }`}>
        <section className={`favorites ${
          favoritesOffers
            ? `favorites--empty`
            : ``}`}>
          <div className="page__favorites-container container">
            {favoritesOffers
              ? <FavoriteList favoriteOffers={favoritesOffers} currentCity={citiesList}/>
              : <FavoritesEmptyScreen />
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

export default FavoritesScreen;
