import {ActionCreator} from "./action";
// import {AuthorizationStatus} from "../const";

export const fetchOffers = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
    .then(({offers}) => dispatch(ActionCreator.loadOffers(offers)))
);

// export const checkAuth = () => (dispatch, _getState, api) => (
//   api.get(`/login`)
//     .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
//     .catch(() => {})
// );
//
// export const login = ({login: email, password}) => (dispatch, _getState, api) => (
//   api.post(`/login`, {email, password})
//     .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
// );
