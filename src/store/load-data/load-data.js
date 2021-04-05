import {createReducer} from "@reduxjs/toolkit";
import {loadOffer, loadOffers, loadNearOffers, loadComments} from '../action';


const initialState = {
  offers: null,
  comments: null,
  nearPlaces: null,
  offer: null,
};

const loadData = createReducer(initialState, (builder) => {
  builder.addCase(loadOffers, (state, action) => {
    state.offers = action.payload;
  });
  builder.addCase(loadOffer, (state, action) => {
    state.offer = action.payload;
  });
  builder.addCase(loadComments, (state, action) => {
    state.comments = action.payload;
  });
  builder.addCase(loadNearOffers, (state, action) => {
    state.nearPlaces = action.payload;
  });
});

export {loadData};
