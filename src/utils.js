import {citiesLocation, SortType} from "./const";


const getCurrentCityOffers = (currentCity, offers) => {
  if (!offers) {
    return null;
  } else {
    return offers.filter((offer) => offer.city.name === currentCity);
  }
};

const getFavoritesOffers = (offers) => {
  let favoriteOffers = offers.filter((offer) => {
    return offer.isFavorite;
  });
  if (favoriteOffers.length !== 0) {
    return favoriteOffers;
  }
  return null;
};

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

const adaptToServer = (offer) => {
  const adaptedOffer = Object.assign(
      {},
      offer,
      {
        "is_favorite": offer.isFavorite,
        "is_premium": offer.isPremium,
        "host": {
          "id": offer.host.id,
          "name": offer.host.name,
          "is_pro": offer.host.isPro,
          "avatar_url": offer.host.avatarUrl,
        },
        "max_adults": offer.maxAdults,
        "preview_image": offer.previewImage,
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

const adaptAuthDataToClient = (data) => {
  const adaptedAuthInfo = Object.assign(
      {},
      data,
      {
        isPro: data[`is_pro`],
        avatarUrl: data[`avatar_url`]
      },
  );

  delete adaptedAuthInfo[`is_pro`];
  delete adaptedAuthInfo[`avatar_url`];

  return adaptedAuthInfo;
};

export {getCurrentCityOffers, getSortedOffers, getCitiesCoords, adaptToClient, adaptToServer, adaptCommentsToClient, adaptAuthDataToClient, getFavoritesOffers};
