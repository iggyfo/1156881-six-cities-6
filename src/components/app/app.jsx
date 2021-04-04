import React from "react";
import propTypes from "prop-types";
import {Router as BrowserRouter, Switch, Route} from "react-router-dom";
import {offerPropsTypes} from "../../props-types";
import {AppRoute} from "../../const";
import MainScreen from "../main-screen/main-screen";
import AuthScreen from "../auth-screen/auth-screen";
import FavoritesScreen from "../favorites-screen/favorites-screen";
import PropertyScreen from "../property-screen/property-screen";
import PropertyNotLoggedScreen from "../property-not-logged-screen/property-not-logged-screen";
import NotFoundScreen from "../not-found-screen/not-found-screen";
import FavoritesEmptyScreen from "../favorites-empty-screen/favorites-empty-screen";
import PrivateRoute from "../private-route/private-route";
import browserHistory from "../../browser-history";


const App = () => {

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.MAIN_SCREEN}>
          <MainScreen />
        </Route>
        <Route exact path={AppRoute.AUTH_SCREEN}>
          <AuthScreen />
        </Route>
        <PrivateRoute exact
          path={AppRoute.FAVORITES_SCREEN}
          render={() => <FavoritesScreen />}
        >
        </PrivateRoute>
        <Route exact path="/dev-favorites-empty">
          <FavoritesEmptyScreen />
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
