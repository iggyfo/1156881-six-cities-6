import {ActionType} from "./action";
import {offers} from "./mock/offers";

const initialState = {
  city: `Paris`,
  citiesList: [
    `Paris`,
    `Cologne`,
    `Brussels`,
    `Amsterdam`,
    `Hamburg`,
    `Dusseldorf`
  ],
  offers,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        city: action.payload,
      };

    case ActionType.LOAD_OFFERS:
      return {
        ...state,
        offers: [],
      };
  }

  return state;
};


export {reducer};
