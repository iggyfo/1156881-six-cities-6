import {adaptToClient, adaptCommentsToClient} from "../utils";
import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  LOAD_OFFERS: `LOAD_OFFERS`,
  LOAD_OFFER: `LOAD_OFFER`,
  LOAD_COMMENTS: `LOAD_COMMENTS`,
  UPLOAD_COMMENTS: `UPLOAD_COMMENTS`,
  LOAD_NEAR_OFFERS: `LOAD_NEAR_OFFERS`,
  CHANGE_SORT_TYPE: `CHANGE_SORT_TYPE`,
  CHANGE_ACTIVE_OFFER_ID: `CHANGE_ACTIVE_OFFER_ID`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION:`,
  SET_AUTHORIZATION_INFO: `SET_AUTHORIZATION_INFO`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
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
