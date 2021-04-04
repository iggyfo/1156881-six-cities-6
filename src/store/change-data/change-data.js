import {ActionType} from '../action';
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

const changeData = (state = initialState, action) => {
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
    case ActionType.CHANGE_ACTIVE_OFFER_ID:
      return {
        ...state,
        activeOfferId: action.payload
      };
  }

  return state;
};

export {changeData};
