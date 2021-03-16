import React from "react";
import propTypes from "prop-types";


const Cities = ({city, changeCity}) => {
  return (
    <li className="locations__item" onClick={() => {
      changeCity(city);
    }}>
      <a className="locations__item-link tabs__item" href="#">
        <span>{city}</span>
      </a>
    </li>
  );
};

Cities.propTypes = {
  city: propTypes.string.isRequired,
  changeCity: propTypes.func.isRequired,
};

export default Cities;

