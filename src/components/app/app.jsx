import React from "react";
import propTypes from "prop-types";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {offerPropsTypes, reviewsPropsTypes} from "../../props-types";
import {citiesNames} from "../../const";
import {getCurrentCityOffers} from "../../utils";
import MainScreen from "../main-screen/main-screen";
import LoginScreen from "../login-screen/login-screen";
import FavoritesScreen from "../favorites-screen/favorites-screen";
import PropertyScreen from "../property-screen/property-screen";
import PropertyNotLoggedScreen from "../property-not-logged-screen/property-not-logged-screen";
import NotFoundScreen from "../not-found-screen/not-found-screen";
import FavoritesEmptyScreen from "../favorites-empty-screen/favorites-empty-screen";


const App = ({offers, nearby, offerNum, userAuth, reviews}) => {
  const favoriteOffers = offers.filter((offer) => offer.isFavorite);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainScreen
            offers={offers}
            offerNum={offerNum}
            userAuth={userAuth}
          />
        </Route>
        <Route exact path="/login">
          <LoginScreen />
        </Route>
        <Route exact path="/favorites">
          <FavoritesScreen
            offers={favoriteOffers}
            userAuth={userAuth}
          />
        </Route>
        <Route exact path="/dev-favorites-empty">
          <FavoritesEmptyScreen userAuth={userAuth} />
        </Route>
        <Route exact path="/offer/:id"
          render={({match}) => {
            const currentOffer = offers[match.params.id];
            return <PropertyScreen
              offer={currentOffer}
              nearby={nearby}
              reviews={reviews}
              userAuth={userAuth}
            />;
          }}
        />
        <Route exact path="/dev-property-not-logged">
          <PropertyNotLoggedScreen />
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offers: propTypes.arrayOf(propTypes.shape(offerPropsTypes)),
  nearby: propTypes.arrayOf(propTypes.shape(offerPropsTypes)),

  offerNum: propTypes.number.isRequired,
  userAuth: propTypes.string.isRequired,
  cities: propTypes.arrayOf(propTypes.string),
  reviews: propTypes.arrayOf(propTypes.shape(reviewsPropsTypes))
};

export default App;
