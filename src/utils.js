import {Offer} from "./const";


export const random = (a = 1, b = 0) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const getOfferNum = () => random(Offer.MIN_OFFERS, Offer.MAX_OFFERS);