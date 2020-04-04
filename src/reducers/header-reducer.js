const {type} = require('../actions/constants');

const initialState = {
    activePage: 'home'
};

const headerReducer = (state = initialState, action) => {
    switch (action.type) {
        case type.SWITCH_ACTIVE_PAGE:
            return {
                activePage: action.activePage 
            }
        default:
            return state;
    }
}

export default headerReducer;