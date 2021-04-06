import {createReducer} from '@reduxjs/toolkit';
import {requireAuthorization, setAuthInfo} from '../action';
import {AuthorizationStatus} from '../../const';


const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  authInfo: null,
};

const user = createReducer(initialState, (builder) => {
  builder.addCase(requireAuthorization, (state, action) => {
    state.authorizationStatus = action.payload;
  });
  builder.addCase(setAuthInfo, (state, action) => {
    state.authInfo = action.payload;
  });
});

export {user};
