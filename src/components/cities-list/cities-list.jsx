import React from "react";
import propTypes from "prop-types";
import Cities from "../cities/cities";
import {ActionCreator} from "../../store/action";
import {connect} from "react-redux";


const CitiesList = ({cities, onChangeCity}) => {

  return (
    <ul className="locations__list tabs__list">
      {cities.map((city, index) =>
        <Cities
          key={index}
          city={city}
          changeCity={onChangeCity}
        />)}
    </ul>
  );
};

CitiesList.propTypes = {
  cities: propTypes.arrayOf(propTypes.string),
  onChangeCity: propTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  cities: state.citiesList,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeCity(city) {
    dispatch(ActionCreator.changeCity(city));
  },
});

export {CitiesList};
export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
