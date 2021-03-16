import React from "react";
import propTypes from "prop-types";
import Cities from "../cities/cities";
import Map from "../map/map";
import OfferList from "../offer-list/offer-list";
import Header from "../header/header";
import Sorting from "../sorting/sorting";
import {nanoid} from "nanoid";
import {getOffersLocation} from "../../utils";
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';


const MainScreen = ({offers, offerNum, userAuth, cities, onChangeCity}) => {

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
                  changeCity={onChangeCity}
                  // () => {changeCity(city)}
                />)}
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offerNum} places to stay in Amsterdam</b>
              <Sorting/>
              <div className="cities__places-list places__list tabs__content">
                <OfferList offers={offers}/>
              </div>
            </section>
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
  onChangeCity: propTypes.func,
};

const mapStateToProps = (state) => ({
  offers: state.offers,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeCity(city) {
    dispatch(ActionCreator.changeCity(city));
  },
});

export {MainScreen};
export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
