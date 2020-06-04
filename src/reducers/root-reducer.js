import goodReducer from './good-reducer';
import account from './account-reducer';
import other from './other-reducer';
import { combineReducers } from 'redux';

export default combineReducers({
    goodReducer,
    account,
    other
});