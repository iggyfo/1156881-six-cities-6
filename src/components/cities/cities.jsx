import React from "react";
import propTypes from "prop-types";


const Cities = ({city}) => {
  return (
    <li className="locations__item">
      <a className="locations__item-link tabs__item" href="#">
        <span>{city}</span>
      </a>
    </li>
  );
};

Cities.propTypes = {
  city: propTypes.string.isRequired,
};

export default Cities;

