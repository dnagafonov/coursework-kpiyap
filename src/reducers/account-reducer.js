const { type } = require('../actions/constants');

const initialState = {
    username: "someuser",
    email: "someemail@mail.com",
    cart: null
};

const account = (state = initialState, action) => {
    switch (action.type) {
        case type.LOG_IN:
            return {
            }
        case type.LOG_OUT: 
        return {}
        
        default:
            return state;
    }
}

export default account;