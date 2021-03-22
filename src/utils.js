import {citiesLocation, citiesNames, Offer, SortType} from "./const";


const getRandomInteger = (a = 1, b = 0) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const getOfferNum = () => getRandomInteger(Offer.MIN_OFFERS, Offer.MAX_OFFERS);

const getOffersLocation = (offers) => offers.map(({location}) => location);

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
  let cityCoords = [];
  switch (currentCity) {
    case citiesNames.cologne:
      cityCoords = [citiesLocation.cologne.latitude, citiesLocation.cologne.longitude];
      break;
    case citiesNames.brussels:
      cityCoords = [citiesLocation.brussels.latitude, citiesLocation.brussels.longitude];
      break;
    case citiesNames.amsterdam:
      cityCoords = [citiesLocation.amsterdam.latitude, citiesLocation.amsterdam.longitude];
      break;
    case citiesNames.hamburg:
      cityCoords = [citiesLocation.hamburg.latitude, citiesLocation.hamburg.longitude];
      break;
    case citiesNames.dusseldorf:
      cityCoords = [citiesLocation.dusseldorf.latitude, citiesLocation.dusseldorf.longitude];
      break;
    default:
      cityCoords = [citiesLocation.paris.latitude, citiesLocation.paris.longitude];
  }
  return cityCoords;
};

export {getOfferNum, getOffersLocation, getCurrentCityOffers, getSortedOffers, getCitiesCoords};
