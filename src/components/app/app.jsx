import React from "react";
import propTypes from "prop-types";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import MainScreen from "../main-screen/main-screen";
import LoginScreen from "../login-screen/login-screen";
import FavoritesScreen from "../favorites-screen/favorites-screen";
import PropertyScreen from "../property-screen/property-screen";
import PropertyNotLoggedScreen from "../property-not-logged-screen/property-not-logged-screen";
import NotFoundScreen from "../not-found-screen/not-found-screen";
import FavoritesEmptyScreen from "../favorites-empty-screen/favorites-empty-screen";


const App = ({offers, offerNum, userAuth, cities}) => {
  const favoriteOffers = offers.filter((offer) => offer.isFavorite);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainScreen
            offers={offers}
            offerNum={offerNum}
            userAuth={userAuth}
            cities={cities}
          />
        </Route>
        <Route exact path="/login">
          <LoginScreen />
        </Route>
        <Route exact path="/favorites">
          <FavoritesScreen
            offers={favoriteOffers}
          />
        </Route>
        <Route exact path="/dev-favorites-empty">
          <FavoritesEmptyScreen />
        </Route>
        <Route exact path="/offer/:id"
          render={({match}) => {
            const currentOffer = offers[match.params.id];
            return <PropertyScreen offer={currentOffer}/>;
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
  offers: propTypes.arrayOf(
      propTypes.shape({})
  ),
  offerNum: propTypes.number.isRequired,
  userAuth: propTypes.string,
  cities: propTypes.arrayOf(propTypes.string),
};

export default App;
