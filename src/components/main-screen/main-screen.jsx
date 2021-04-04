import React, {useEffect} from "react";
import propTypes from "prop-types";
import OfferList from "../offer-list/offer-list";
import Header from "../header/header";
import {getCurrentCityOffers, getSortedOffers} from "../../utils";
import {connect} from 'react-redux';
import CitiesList from "../cities-list/cities-list";
import LoadingScreen from '../loading-screen/loading-screen';
import OfferListEmpty from "../offer-list-empty/offer-list-empty";
import {fetchOffers} from "../../store/api-actions";


const MainScreen = ({offers, citiesList, currentCity, currentSort, onLoadData}) => {

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
    <div className={`page page--gray page--main`}>
      <Header />
      <main className={`page__main page__main--index ${!offers
        ? `page__main--index-empty`
        : ``
      }`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList citiesList={citiesList} />
          </section>
        </div>
        <div className="cities">
          {!offers
            ? <OfferListEmpty currentCity={currentCity}/>
            : <OfferList
              offers={getSortedOffers(currentSort, offers)}
              currentCity={currentCity}
            />
          }
        </div>
      </main>
    </div>
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
