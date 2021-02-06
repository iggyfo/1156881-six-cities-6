import React from "react";
import propTypes from "prop-types";
import Page from "./page";

const App = (props) => {
  const {hotels, offerNum, userAuth, cities} = props;
  return (
    <Page hotels={hotels} offerNum={offerNum} userAuth={userAuth} cities={cities}/>
  );
};

App.propTypes = {
  hotels: propTypes.arrayOf(
      propTypes.shape({})
  ),
  offerNum: propTypes.number.isRequired,
  userAuth: propTypes.string,
  cities: propTypes.arrayOf(),
};

export default App;
