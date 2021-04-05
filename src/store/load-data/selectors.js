import {NameSpace} from '../root-reducer';

const getOffers = (state) => state[NameSpace.DATA].offers;
const getComments = (state) => state[NameSpace.DATA].comments;
const getNearPlaces = (state) => state[NameSpace.DATA].nearPlaces;
const getOffer = (state) => state[NameSpace.DATA].offer;

export {getOffers, getComments, getNearPlaces, getOffer};

