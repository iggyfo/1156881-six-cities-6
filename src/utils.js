import {Offer} from "./const";


const getRandomInteger = (a = 1, b = 0) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const getOfferNum = () => getRandomInteger(Offer.MIN_OFFERS, Offer.MAX_OFFERS);

export const getOffersLocation = (offers) => offers.map(({location}) => location);
