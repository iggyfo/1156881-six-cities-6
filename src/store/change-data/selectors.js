import {NameSpace} from '../root-reducer';

const getCitiesList = (state) => state[NameSpace.CHANGE].citiesList;
const getCurrentCity = (state) => state[NameSpace.CHANGE].currentCity;
const getCurrentSort = (state) => state[NameSpace.CHANGE].currentSort;
const getActiveOfferId = (state) => state[NameSpace.CHANGE].activeOfferId;

export {getCitiesList, getCurrentCity, getCurrentSort, getActiveOfferId};

