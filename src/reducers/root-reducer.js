import headerReducer from './header-reducer';
import goodReducer from './good-reducer';
import account from './account-reducer';
import { combineReducers } from 'redux';

export default combineReducers({
    headerReducer,
    goodReducer,
    account
});