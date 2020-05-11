const { type } = require('../actions/constants');

const initialState = {
    username: "someuser",
    email: "someemail@mail.com",
    cart: [
        {
            "name": "Mirrors",
            "price": 600,
            currentPrice: {
                price: 200,
                symbol: "$"
            }
        },
        {
            "name": "Air filter",
            "price": 300,
            currentPrice: {
                price: 300,
                symbol: "$"
            }
        },
        {
            "name": "Mirrors",
            "price": 600,
            currentPrice: {
                price: 200,
                symbol: "$"
            }
        },
        {
            "name": "Air filter",
            "price": 300,
            currentPrice: {
                price: 300,
                symbol: "$"
            }
        },
        {
            "name": "Mirrors",
            "price": 600,
            currentPrice: {
                price: 200,
                symbol: "$"
            }
        },
        {
            "name": "Air filter",
            "price": 300,
            currentPrice: {
                price: 300,
                symbol: "$"
            }
        },
        {
            "name": "Mirrors",
            "price": 600,
            currentPrice: {
                price: 200,
                symbol: "$"
            }
        },
        {
            "name": "Air filter",
            "price": 300,
            currentPrice: {
                price: 300,
                symbol: "$"
            }
        },
    ]
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