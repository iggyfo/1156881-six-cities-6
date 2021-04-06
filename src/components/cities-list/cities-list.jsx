import React from "react";
import Cities from "../cities/cities";
import {citiesList} from "../../const";
import {changeCity} from "../../store/action";
import {useDispatch} from "react-redux";
import {nanoid} from "@reduxjs/toolkit";


const CitiesList = () => {

  const dispatch = useDispatch();
  const handleChangeCity = (city) => {
    dispatch(changeCity(city));
  };

  return (
    <ul className="locations__list tabs__list">
      {citiesList.map((city) =>
        <Cities
          key={nanoid()}
          city={city}
          changeCity={handleChangeCity}
        />)}
    </ul>
  );
};

export default CitiesList;
