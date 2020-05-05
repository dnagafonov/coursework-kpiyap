const { type } = require('../actions/constants');

const initialState = {
    account: null
};

const account = (state = initialState, action) => {
    switch (action.type) {
        case type.LOG_IN:
            return {
            }
        default:
            return state;
    }
}

export default account;