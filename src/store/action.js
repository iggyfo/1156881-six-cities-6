export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  LOAD_OFFERS: `LOAD_OFFERS`,
  CHANGE_SORT_TYPE: `CHANGE_SORT_TYPE`,
  CHANGE_ACTIVE_OFFER_ID: `CHANGE_ACTIVE_OFFER_ID`,
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

  changeActiveOfferId: (offerId) => ({
    type: ActionType.CHANGE_ACTIVE_OFFER_ID,
    payload: offerId,
  })
};
