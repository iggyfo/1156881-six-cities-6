import {citiesLocation, Offer, SortType} from "./const";


const getRandomInteger = (a = 1, b = 0) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const getOfferNum = () => getRandomInteger(Offer.MIN_OFFERS, Offer.MAX_OFFERS);

const getCurrentCityOffers = (currentCity, offers) => offers.filter((offer) => offer.city.name === currentCity);

const getSortedOffers = (currentSort, offers) => {
  let sortedOffers = [];
  switch (currentSort) {
    case SortType.LOW_TO_HIGH:
      sortedOffers = offers.sort((a, b) => a.price - b.price);
      break;
    case SortType.HIGH_TO_LOW:
      sortedOffers = offers.sort((a, b) => b.price - a.price);
      break;
    case SortType.TOP_RATED:
      sortedOffers = offers.sort((a, b) => b.rating - a.rating);
      break;
    default:
      sortedOffers = offers;
  }
  return sortedOffers;
};

const getCitiesCoords = (currentCity) => {
  return [citiesLocation[currentCity.toLowerCase()].latitude, citiesLocation[currentCity.toLowerCase()].longitude];
};

export {getOfferNum, getCurrentCityOffers, getSortedOffers, getCitiesCoords};
