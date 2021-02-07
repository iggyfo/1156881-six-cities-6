import React from "react";
import propTypes from "prop-types";
import Page from "./page";

const App = ({hotels, offerNum, userAuth, cities}) => {
  return (
    <Page
      hotels={hotels}
      offerNum={offerNum}
      userAuth={userAuth}
      cities={cities}
    />
  );
};

App.propTypes = {
  hotels: propTypes.arrayOf(
      propTypes.shape({})
  ),
  offerNum: propTypes.number.isRequired,
  userAuth: propTypes.string,
  cities: propTypes.arrayOf(propTypes.string),
};

export default App;
