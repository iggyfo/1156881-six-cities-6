import React from "react";
import propTypes from "prop-types";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {offerPropsTypes} from "../../props-types";
import {AppRoute} from "../../const";
import MainScreen from "../main-screen/main-screen";
import LoginScreen from "../login-screen/login-screen";
import FavoritesScreen from "../favorites-screen/favorites-screen";
import PropertyScreen from "../property-screen/property-screen";
import PropertyNotLoggedScreen from "../property-not-logged-screen/property-not-logged-screen";
import NotFoundScreen from "../not-found-screen/not-found-screen";
import FavoritesEmptyScreen from "../favorites-empty-screen/favorites-empty-screen";


const App = ({offers, userAuth}) => {
  const favoriteOffers = offers.filter((offer) => offer.isFavorite);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MAIN_SCREEN}>
          <MainScreen userAuth={userAuth}/>
        </Route>
        <Route exact path={AppRoute.LOGIN_SCREEN}>
          <LoginScreen />
        </Route>
        <Route exact path={AppRoute.FAVORITES_SCREEN}>
          <FavoritesScreen
            offers={favoriteOffers}
            userAuth={userAuth}
          />
        </Route>
        <Route exact path="/dev-favorites-empty">
          <FavoritesEmptyScreen userAuth={userAuth} />
        </Route>
        <Route exact path={AppRoute.OFFER_SCREEN} component={PropertyScreen} />
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
  cities: propTypes.arrayOf(propTypes.string),
};

export default App;
