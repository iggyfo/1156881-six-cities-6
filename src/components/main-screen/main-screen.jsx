import React, {useEffect} from "react";
import propTypes from "prop-types";
import Map from "../map/map";
import OfferList from "../offer-list/offer-list";
import Header from "../header/header";
import Sorting from "../sorting/sorting";
import {getCurrentCityOffers, getSortedOffers} from "../../utils";
import {connect} from 'react-redux';
import CitiesList from "../cities-list/cities-list";
import LoadingScreen from '../loading-screen/loading-screen';
import {fetchOffers} from "../../store/api-actions";


const MainScreen = ({offers, userAuth, citiesList, currentCity, currentSort, onLoadData}) => {

  useEffect(() => {
    if (!offers) {
      onLoadData();
    }
  }, [offers]);

  if (offers === null) {
    return (
      <LoadingScreen />
    );
  }
  return (
    <React.Fragment>
      <Header userAuth={userAuth} />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList citiesList={citiesList} />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container" style={{height: `700px`}}>
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length} places to stay in {currentCity}</b>
              <Sorting />
              <div className="cities__places-list places__list tabs__content">
                <OfferList offers={getSortedOffers(currentSort, offers)}/>
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map
                  offers={offers}
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
  citiesList: propTypes.arrayOf(propTypes.string).isRequired,
  currentCity: propTypes.string.isRequired,
  currentSort: propTypes.string.isRequired,
  onLoadData: propTypes.func.isRequired,
  userAuth: propTypes.string,
};

const mapStateToProps = (state) => ({
  currentSort: state.currentSort,
  offers: getCurrentCityOffers(state.currentCity, state.offers),
  citiesList: state.citiesList,
  currentCity: state.currentCity,
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData() {
    dispatch(fetchOffers());
  },
});

export {MainScreen};
export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
