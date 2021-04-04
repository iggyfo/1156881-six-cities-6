import {ActionType} from '../action';


const initialState = {
  offers: null,
  comments: null,
  nearPlaces: null,
  offer: null,
};

const loadData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return {
        ...state,
        offers: action.payload,
      };
    case ActionType.LOAD_OFFER:
      return {
        ...state,
        offer: action.payload,
      };
    case ActionType.LOAD_COMMENTS:
      return {
        ...state,
        comments: action.payload,
      };
    case ActionType.LOAD_NEAR_OFFERS:
      return {
        ...state,
        nearPlaces: action.payload,
      };
  }

  return state;
};

export {loadData};
