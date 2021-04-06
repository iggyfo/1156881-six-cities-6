import {combineReducers} from 'redux';
import {user} from "./user/user";
import {changeData} from "./change-data/change-data";
import {loadData} from "./load-data/load-data";

export const NameSpace = {
  DATA: `DATA`,
  CHANGE: `CHANGE`,
  USER: `USER`
};

export default combineReducers({
  [NameSpace.DATA]: loadData,
  [NameSpace.CHANGE]: changeData,
  [NameSpace.USER]: user,
});

