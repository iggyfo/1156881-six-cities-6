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
  latitude: 52.37454,
  longitude: 4.897976,
  zoom: 12
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

export {Offer, classNameTypes, cityLocation, Rating, offerMarkTypes, SortType, citiesNames};
