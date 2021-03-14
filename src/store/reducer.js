import {ActionType} from "./action";

const initialState = {
  city: `Paris`,
  offers: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        city: ``,
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
