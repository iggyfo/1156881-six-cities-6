import {ActionCreator} from "./action";
import {ApiRoute, AuthorizationStatus} from "../const";


export const fetchOffers = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => {
      dispatch(ActionCreator.loadOffers(data));
    })
);

export const fetchOffer = (id) => (dispatch, _getState, api) => (
  api
    .get(`${ApiRoute.OFFERS}/${id}`)
    .then(({data}) => dispatch(ActionCreator.loadOffer(data)))
);

export const fetchComments = (id) => (dispatch, _getState, api) => (
  api
    .get(`${ApiRoute.COMMENTS}/${id}`)
    .then(({data}) => dispatch(ActionCreator.loadComments(data)))
);

export const fetchNearOffers = (id) => (dispatch, _getState, api) => (
  api
    .get(`${ApiRoute.OFFERS}/${id}/nearby`)
    .then(({data}) => dispatch(ActionCreator.loadNearOffers(data)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);
//
export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
);
