import {ActionCreator} from "./action";
import {ApiRoute, AppRoute, AuthorizationStatus} from "../const";


export const fetchOffers = () => (dispatch, _getState, api) => (
  api.get(ApiRoute.OFFERS)
    .then(({data}) => dispatch(ActionCreator.loadOffers(data)))
);

export const fetchOffer = (id) => (dispatch, _getState, api) => (
  api.get(`${ApiRoute.OFFERS}/${id}`)
    .then(({data}) => dispatch(ActionCreator.loadOffer(data)))
    .catch(() => dispatch(ActionCreator.redirectToRoute(AppRoute.NOT_FOUND)))
);

export const fetchComments = (id) => (dispatch, _getState, api) => (
  api.get(`${ApiRoute.COMMENTS}/${id}`)
    .then(({data}) => dispatch(ActionCreator.loadComments(data)))
);

export const fetchNearOffers = (id) => (dispatch, _getState, api) => (
  api.get(`${ApiRoute.OFFERS}/${id}/nearby`)
    .then(({data}) => dispatch(ActionCreator.loadNearOffers(data)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(({data}) => dispatch(ActionCreator.setAuthInfo(data)))
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(ActionCreator.redirectToRoute(AppRoute.MAIN_SCREEN)))
);


