import React from "react";
import propTypes from "prop-types";


const Cities = (props) => {
  const {city} = props;

  return (
    <React.Fragment>
      <li className="locations__item">
        <a className="locations__item-link tabs__item" href="#">
          <span>{city}</span>
        </a>
      </li>
    </React.Fragment>
  );
};

Cities.propTypes = {
  city: propTypes.string,
};

export default Cities;

