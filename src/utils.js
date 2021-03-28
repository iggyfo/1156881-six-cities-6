import {citiesLocation, SortType} from "./const";


const getRandomInteger = (a = 1, b = 0) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

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

const adaptToClient = (offer) => {
  const adaptedOffer = Object.assign(
      {},
      offer,
      {
        isFavorite: offer[`is_favorite`],
        isPremium: offer[`is_premium`],
        host: {
          id: offer.host.id,
          name: offer.host.name,
          isPro: offer.host[`is_pro`],
          avatarUrl: offer.host[`avatar_url`]
        },
        maxAdults: offer[`max_adults`],
        previewImage: offer[`preview_image`],
      },
  );

  delete adaptedOffer[`is_favorite`];
  delete adaptedOffer[`is_premium`];
  delete adaptedOffer[`max_adults`];
  delete adaptedOffer[`preview_image`];
  delete adaptedOffer.host[`is_pro`];
  delete adaptedOffer.host[`avatar_url`];

  return adaptedOffer;
};

export {getCurrentCityOffers, getSortedOffers, getCitiesCoords, adaptToClient};
