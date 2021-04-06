import {citiesLocation, SortType} from "./const";
import dayjs from "dayjs";
import {toast} from 'react-toastify';

const getErrorNotify = (message) => {
  toast.error(message, {
    position: `top-center`,
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

const getCurrentCityOffers = (currentCity, offers) => {
  if (!offers) {
    return null;
  } else {
    return offers.filter((offer) => offer.city.name === currentCity);
  }
};

const getCitiesWithFavoriteOffers = (favoriteOffers) => {
  let cities = new Set();
  favoriteOffers.forEach((offer) => cities.add(offer.city.name));
  return Array.from(cities);
};

const getFavoritesOffers = (offers) => {
  const favoriteOffers = offers.filter((offer) => offer.isFavorite);
  return favoriteOffers.length !== 0 ? favoriteOffers : null;
};

const getSortedOffers = (currentSort, offers) => {
  let sortedOffers;
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

const getSortedComments = (a, b) => {
  dayjs(b.date).diff(dayjs(a.date));
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

const adaptCommentsToClient = (comment) => {
  const adaptedComment = Object.assign(
      {},
      comment,
      {
        user: {
          id: comment.user.id,
          name: comment.user.name,
          isPro: comment.user[`is_pro`],
          avatarUrl: comment.user[`avatar_url`]
        },
      },
  );

  delete adaptedComment.user[`is_pro`];
  delete adaptedComment.user[`avatar_url`];

  return adaptedComment;
};

export {getErrorNotify, getCitiesWithFavoriteOffers, getCurrentCityOffers, getSortedOffers, getCitiesCoords, adaptToClient, adaptCommentsToClient, getFavoritesOffers, getSortedComments};
