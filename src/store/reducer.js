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
    citiesNames.hamburg,
    citiesNames.dusseldorf
  ],
  offers,
  currentSort: SortType.LOW_TO_HIGH,
  activeOfferId: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        currentCity: action.payload,
      };
    case ActionType.LOAD_OFFERS:
      return {
        ...state,
        offers: action.payload,
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

export {reducer};
