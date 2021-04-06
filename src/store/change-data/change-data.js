import {createReducer} from '@reduxjs/toolkit';
import {changeCity, changeSortType, changeActiveOfferId} from '../action';
import {citiesNames, SortType} from "../../const";


const initialState = {
  citiesList: [
    citiesNames.paris,
    citiesNames.cologne,
    citiesNames.brussels,
    citiesNames.amsterdam,
    citiesNames.hamburg,
    citiesNames.dusseldorf
  ],
  currentCity: citiesNames.paris,
  currentSort: SortType.LOW_TO_HIGH,
  activeOfferId: null,
};

const changeData = createReducer(initialState, (builder) => {
  builder.addCase(changeCity, (state, action) => {
    state.currentCity = action.payload;
  });
  builder.addCase(changeSortType, (state, action) => {
    state.currentSort = action.payload;
  });
  builder.addCase(changeActiveOfferId, (state, action) => {
    state.activeOfferId = action.payload;
  });
});

export {changeData};
