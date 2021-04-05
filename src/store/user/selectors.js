import {NameSpace} from '../root-reducer';

const getAuthorizationStatus = (state) => state[NameSpace.USER].authorizationStatus;
const getAuthInfo = (state) => state[NameSpace.USER].authInfo;

export {getAuthInfo, getAuthorizationStatus};

