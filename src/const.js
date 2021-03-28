const Offer = {
  MIN_OFFERS: 10,
  MAX_OFFERS: 478,
};

const Rating = [
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

const offerMarkTypes = {
  property: `property`,
  placeCard: `place-card`
};

const cityLocation = {
  latitude: 48.85661,
  longitude: 2.351499,
  zoom: 12
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

const citiesNames = {
  paris: `Paris`,
  cologne: `Cologne`,
  brussels: `Brussels`,
  amsterdam: `Amsterdam`,
  hamburg: `Hamburg`,
  dusseldorf: `Dusseldorf`,
};

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

const AuthorizationData = {
  USER: `simplepeople@gmail.com`,
  PASS: `12345678`,
};

const AppRoute = {
  MAIN_SCREEN: `/`,
  LOGIN_SCREEN: `/login`,
  FAVORITES_SCREEN: `/favorites`,
  OFFER_SCREEN: `/offer/:id`,
  NOT_FOUND: `/404`
};

const ApiRoute = {
  LOGIN: `/login`,
  LOGOUT: `/logout`,
  OFFERS: `/hotels`,
  COMMENTS: `/comments`,
  FAVORITES: `/favorite`
};

export {Offer, classNameTypes, cityLocation, Rating, offerMarkTypes, SortType, citiesNames, citiesLocation, AuthorizationStatus, AppRoute, ApiRoute};
