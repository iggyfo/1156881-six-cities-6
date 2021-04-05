import React from "react";
import propTypes from "prop-types";
import Cities from "../cities/cities";
import {changeCity} from "../../store/action";
import {connect} from "react-redux";
import {getCitiesList} from "../../store/change-data/selectors";


const CitiesList = ({citiesList, handleChangeCity}) => {

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

CitiesList.propTypes = {
  citiesList: propTypes.arrayOf(propTypes.string),
  handleChangeCity: propTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  citiesList: getCitiesList(state),
});

const mapDispatchToProps = (dispatch) => ({
  handleChangeCity(city) {
    dispatch(changeCity(city));
  },
});

export {CitiesList};
export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
