import {ActionType} from "./action";
import {offers} from "../mock/offers";
import {SortType, citiesNames} from "../const";

const initialState = {
  currentCity: citiesNames.paris,
  citiesList: [
    citiesNames.paris,
    citiesNames.cologne,
    citiesNames.brussels,
    citiesNames.amsterdam,
    citiesNames.amsterdam,
    citiesNames.dusseldorf
  ],
  offers,
  currentSort: SortType.LOW_TO_HIGH
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        currentCity: action.payload,
      };

    case ActionType.CHANGE_SORT_TYPE:
      return {
        ...state,
        currentSort: action.payload
      };
  }

  return state;
};


export {reducer};
