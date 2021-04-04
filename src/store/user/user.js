import {ActionType} from '../action';
import {AuthorizationStatus} from '../../const';


const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  authInfo: null,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionType.SET_AUTHORIZATION_INFO:
      return {
        ...state,
        authInfo: action.payload,
      };
  }

  return state;
};

export {user};
