import {adaptToClient, adaptCommentsToClient} from "../utils";

export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  LOAD_OFFERS: `LOAD_OFFERS`,
  LOAD_OFFER: `LOAD_OFFER`,
  LOAD_COMMENTS: `LOAD_COMMENTS`,
  LOAD_NEAR_OFFERS: `LOAD_NEAR_OFFERS`,
  CHANGE_SORT_TYPE: `CHANGE_SORT_TYPE`,
  CHANGE_ACTIVE_OFFER_ID: `CHANGE_ACTIVE_OFFER_ID`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION:`,
  SET_AUTHORIZATION_INFO: `SET_AUTHORIZATION_INFO`,
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),

  changeSortType: (sortType) => ({
    type: ActionType.CHANGE_SORT_TYPE,
    payload: sortType,
  }),

  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers.map((offer) => adaptToClient(offer)),
  }),

  loadOffer: (offer) => ({
    type: ActionType.LOAD_OFFER,
    payload: adaptToClient(offer),
  }),

  loadComments: (comments) => ({
    type: ActionType.LOAD_COMMENTS,
    payload: comments.map((comment) => adaptCommentsToClient(comment)),
  }),

  loadNearOffers: (offers) => ({
    type: ActionType.LOAD_NEAR_OFFERS,
    payload: offers.map((offer) => adaptToClient(offer)),
  }),

  changeActiveOfferId: (offerId) => ({
    type: ActionType.CHANGE_ACTIVE_OFFER_ID,
    payload: offerId,
  }),

  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),

  setAuthInfo: (data) => ({
    type: ActionType.SET_AUTHORIZATION_INFO,
    payload: data,
  })
};
