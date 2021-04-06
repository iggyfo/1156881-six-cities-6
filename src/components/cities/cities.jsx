import React from "react";
import propTypes from "prop-types";
import {useSelector} from "react-redux";


const Cities = ({city, changeCity}) => {

  const {currentCity} = useSelector((state) => state.CHANGE);

  return (
    <li className="locations__item" onClick={(evt) => {
      evt.preventDefault();
      changeCity(city);
    }}>
      <a className={`locations__item-link tabs__item ${currentCity === city
        ? `tabs__item--active`
        : ``}`} href="#">
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

