import React from "react";
import propTypes from "prop-types";
import Cities from "../cities/cities";
import {ActionCreator} from "../../store/action";
import {connect} from "react-redux";


const CitiesList = ({citiesList, onChangeCity}) => {

  return (
    <ul className="locations__list tabs__list">
      {citiesList.map((city, index) =>
        <Cities
          key={index}
          city={city}
          changeCity={onChangeCity}
        />)}
    </ul>
  );
};

CitiesList.propTypes = {
  citiesList: propTypes.arrayOf(propTypes.string),
  onChangeCity: propTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  citiesList: state.citiesList,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeCity(city) {
    dispatch(ActionCreator.changeCity(city));
  },
});

export {CitiesList};
export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
