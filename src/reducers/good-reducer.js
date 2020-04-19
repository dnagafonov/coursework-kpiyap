const {type} = require('../actions/constants');

const initialState = {
    good: null
};

const goodReducer = (state = initialState, action) => {
    switch (action.type) {
        case type.OPEN_GOOD:
            return {
                good: action.good 
            }
        default:
            return state;
    }
}

export default goodReducer;