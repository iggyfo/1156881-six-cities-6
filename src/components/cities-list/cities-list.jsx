import React from "react";
import Cities from "../cities/cities";
import {citiesList} from "../../const";
import {changeCity} from "../../store/action";
import {useDispatch} from "react-redux";


const CitiesList = () => {

  const dispatch = useDispatch();
  const handleChangeCity = (city) => {
    dispatch(changeCity(city));
  };

  return (
    <ul className="locations__list tabs__list">
      {citiesList.map((city, index) =>
        <Cities
          key={index}
          city={city}
          changeCity={handleChangeCity}
        />)}
    </ul>
  );
};

export default CitiesList;
