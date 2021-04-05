import React from "react";
import Cities from "../cities/cities";
import {changeCity} from "../../store/action";
import {useDispatch, useSelector} from "react-redux";


const CitiesList = () => {

  const {citiesList} = useSelector((state) => state.CHANGE);
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
