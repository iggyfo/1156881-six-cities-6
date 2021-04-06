import {adaptToClient, adaptCommentsToClient} from "../utils";
import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  CHANGE_CITY: `city/changeCity`,
  LOAD_OFFERS: `data/loadOffers`,
  LOAD_OFFER: `data/loadOffer`,
  LOAD_COMMENTS: `data/loadComments`,
  UPLOAD_COMMENTS: `data/uploadComments`,
  LOAD_NEAR_OFFERS: `data/loadNearbyOffers`,
  CHANGE_SORT_TYPE: `sort/changeSortType`,
  CHANGE_ACTIVE_OFFER_ID: `offer/changeActiveOfferId`,
  REQUIRED_AUTHORIZATION: `user/requiredAuth:`,
  SET_AUTHORIZATION_INFO: `user/setAuth`,
  REDIRECT_TO_ROUTE: `nav/redirectToRoute`,
};

const changeCity = createAction(ActionType.CHANGE_CITY, (city) => {
  return {
    payload: city,
  };
});

const changeSortType = createAction(ActionType.CHANGE_SORT_TYPE, (sortType) => {
  return {
    payload: sortType,
  };
});

const loadOffers = createAction(ActionType.LOAD_OFFERS, (offers) => {
  return {
    payload: offers.map((offer) => adaptToClient(offer)),
  };
});

const loadOffer = createAction(ActionType.LOAD_OFFER, (offer) => {
  return {
    payload: adaptToClient(offer),
  };
});

const loadComments = createAction(ActionType.LOAD_COMMENTS, (comments) => {
  return {
    payload: comments.map((comment) => adaptCommentsToClient(comment)),
  };
});

const loadNearOffers = createAction(ActionType.LOAD_NEAR_OFFERS, (offers) => {
  return {
    payload: offers.map((offer) => adaptToClient(offer)),
  };
});

const changeActiveOfferId = createAction(ActionType.CHANGE_ACTIVE_OFFER_ID, (offerId) => {
  return {
    payload: offerId,
  };
});

const requireAuthorization = createAction(ActionType.REQUIRED_AUTHORIZATION, (status) => {
  return {
    payload: status,
  };
});

const setAuthInfo = createAction(ActionType.SET_AUTHORIZATION_INFO, (data) => {
  return {
    payload: data,
  };
});

const redirectToRoute = createAction(ActionType.REDIRECT_TO_ROUTE, (url) => {
  return {
    payload: url,
  };
});

export {
  changeCity,
  changeSortType,
  loadOffer,
  loadOffers,
  loadComments,
  loadNearOffers,
  changeActiveOfferId,
  redirectToRoute,
  requireAuthorization,
  setAuthInfo
};
