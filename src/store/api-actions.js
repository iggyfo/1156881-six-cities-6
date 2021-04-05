import {loadOffers, loadOffer, redirectToRoute, loadComments, loadNearOffers, setAuthInfo, requireAuthorization} from "./action";
import {ApiRoute, AppRoute, AuthorizationStatus} from "../const";
import {getErrorNotify} from "../utils";
import {HttpCode} from "../services/api";


const ERROR_MESSAGE = `Неправильный запрос. Проверьте данные.`;

export const fetchOffers = () => (dispatch, _getState, api) => (
  api.get(ApiRoute.OFFERS)
    .then(({data}) => dispatch(loadOffers(data)))
    .catch(() => {})
);

export const fetchOffer = (id) => (dispatch, _getState, api) => (
  api.get(`${ApiRoute.OFFERS}/${id}`)
    .then(({data}) => dispatch(loadOffer(data)))
    .catch(() => dispatch(redirectToRoute(AppRoute.NOT_FOUND)))
);

export const fetchComments = (id) => (dispatch, _getState, api) => (
  api.get(`${ApiRoute.COMMENTS}/${id}`)
    .then(({data}) => dispatch(loadComments(data)))
    .catch(() => getErrorNotify(ERROR_MESSAGE))
);

export const uploadComments = (id, comment) => (dispatch, _getState, api) => (
  api.post(`${ApiRoute.COMMENTS}/${id}`, comment)
    .then(() => api.get(`${ApiRoute.COMMENTS}/${id}`)
    .then(({data}) => dispatch(loadComments(data))))
    .catch(() => getErrorNotify(ERROR_MESSAGE))
);

export const setFavorite = (id, status) => (dispatch, _getState, api) => (
  api.post(`${ApiRoute.FAVORITES}/${id}/${status}`)
    .catch(() => dispatch(redirectToRoute(AppRoute.AUTH_SCREEN)))
);

export const fetchNearOffers = (id) => (dispatch, _getState, api) => (
  api.get(`${ApiRoute.OFFERS}/${id}${AppRoute.NEAR_BY}`)
    .then(({data}) => dispatch(loadNearOffers(data)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(AppRoute.AUTH_SCREEN)
    .then(({data}) => dispatch(setAuthInfo(data)))
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(AppRoute.AUTH_SCREEN, {email, password})
    .then(({data}) => dispatch(setAuthInfo(data)))
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(AppRoute.MAIN_SCREEN)))
    .catch(({response}) => {
      if (response.status === HttpCode.BAD_REQUEST) {
        getErrorNotify(ERROR_MESSAGE);
      }
    })
);

export const logout = () => (dispatch, _getState, api) => (
  api.get(ApiRoute.LOGOUT)
    .then(() => dispatch(setAuthInfo(null)))
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH)))
    .then(() => dispatch(redirectToRoute(ApiRoute.LOGIN)))
);


