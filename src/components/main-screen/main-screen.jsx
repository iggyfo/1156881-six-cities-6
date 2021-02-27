import React from "react";
import propTypes from "prop-types";
import Cities from "../cities/cities";
import Map from "../map/map";
import OfferList from "../offer-list/offer-list";
import Header from "../header/header";
import {nanoid} from "nanoid";
import {getOffersLocation} from "../../utils";

const MainScreen = ({offers, offerNum, userAuth, cities}) => {

  const offersLocation = getOffersLocation(offers);

  return (
    <React.Fragment>
      <Header userAuth={userAuth} />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              {cities.map((city) =>
                <Cities
                  key={nanoid()}
                  city={city}
                />)}
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <OfferList
              offerNum={offerNum}
              offers={offers}
            />
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map
                  offersLocation={offersLocation}
                />
              </section>
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

MainScreen.propTypes = {
  offers: propTypes.arrayOf(
      propTypes.shape({})
  ),
  offerNum: propTypes.number.isRequired,
  userAuth: propTypes.string,
  cities: propTypes.arrayOf(propTypes.string),
};

export default MainScreen;
