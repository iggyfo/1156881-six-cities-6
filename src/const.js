const citiesList = [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`];

const citiesNames = {
  paris: `Paris`,
  cologne: `Cologne`,
  brussels: `Brussels`,
  amsterdam: `Amsterdam`,
  hamburg: `Hamburg`,
  dusseldorf: `Dusseldorf`,
};

const ratingStars = [
  {
    id: `5-star`,
    defaultValue: 5,
    title: `perfect`
  },
  {
    id: `4-star`,
    defaultValue: 4,
    title: `good`
  },
  {
    id: `3-star`,
    defaultValue: 3,
    title: `not bad`
  },
  {
    id: `2-star`,
    defaultValue: 2,
    title: `badly`
  },
  {
    id: `1-star`,
    defaultValue: 1,
    title: `terribly`
  },
];

const classNameTypes = {
  reviews: `reviews`,
  placeCard: `place-card`,
  property: `property`,
};

const citiesLocation = {
  paris: {
    latitude: 48.85661,
    longitude: 2.351499,
  },
  cologne: {
    latitude: 50.938361,
    longitude: 6.959974,
  },
  brussels: {
    latitude: 50.846557,
    longitude: 4.351697,
  },
  amsterdam: {
    latitude: 52.37454,
    longitude: 4.897976,
  },
  hamburg: {
    latitude: 53.550341,
    longitude: 10.000654,
  },
  dusseldorf: {
    latitude: 51.225402,
    longitude: 6.776314,
  },
};

const SortType = {
  DEFAULT: `Popular`,
  LOW_TO_HIGH: `Price: low to high`,
  HIGH_TO_LOW: `Price: high to low`,
  TOP_RATED: `Top rated first`,
};

const sortTypes = [`Popular`, `Price: low to high`, `Price: high to low`, `Top rated first`];

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

const AppRoute = {
  MAIN_SCREEN: `/`,
  AUTH_SCREEN: `/login`,
  FAVORITES_SCREEN: `/favorites`,
  OFFER_SCREEN: `/offer/:id`,
  NEAR_BY: `/nearby`,
  NOT_FOUND: `/404`
};

export const OfferType = {
  ROOM: `Private Room`,
  APARTMENT: `Apartment`,
  HOTEL: `Hotel`,
  HOUSE: `House`
};

const ApiRoute = {
  LOGIN: `/login`,
  LOGOUT: `/logout`,
  OFFERS: `/hotels`,
  COMMENTS: `/comments`,
  FAVORITES: `/favorite`
};

export {classNameTypes, ratingStars, SortType, citiesList, citiesNames, citiesLocation, AuthorizationStatus, AppRoute, ApiRoute, sortTypes};
