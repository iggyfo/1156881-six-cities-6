import React, {useEffect} from "react";
import {useSelector, useDispatch} from 'react-redux';
import OfferList from "../offer-list/offer-list";
import Header from "../header/header";
import {getCurrentCityOffers, getSortedOffers} from "../../utils";
import CitiesList from "../cities-list/cities-list";
import LoadingScreen from '../loading-screen/loading-screen';
import OfferListEmpty from "../offer-list-empty/offer-list-empty";
import {fetchOffers} from "../../store/api-actions";

const MainScreen = () => {

  const {offers} = useSelector((state) => state.DATA);
  const {currentCity, currentSort} = useSelector((state) => state.CHANGE);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!offers) {
      dispatch(fetchOffers());
    }
  }, [offers]);

  if (offers === null) {
    return (
      <LoadingScreen />
    );
  }

  const currentCityOffers = getCurrentCityOffers(currentCity, offers);

  return (
    <div className={`page page--gray page--main`}>
      <Header />
      <main className={`page__main page__main--index ${!currentCityOffers
        ? `page__main--index-empty`
        : ``
      }`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList />
          </section>
        </div>
        <div className="cities">
          {!currentCityOffers
            ? <OfferListEmpty currentCity={currentCity}/>
            : <OfferList
              offers={getSortedOffers(currentSort, currentCityOffers)}
              currentCity={currentCity}
            />
          }
        </div>
      </main>
    </div>
  );
};

export default MainScreen;
