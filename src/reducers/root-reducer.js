import goodReducer from './good-reducer';
import account from './account-reducer';
import { combineReducers } from 'redux';

export default combineReducers({
    goodReducer,
    account
});