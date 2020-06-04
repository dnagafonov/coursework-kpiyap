const { type } = require('../actions/constants');

const init = {};

const other = (state = init, action) => {
    switch (action.type) {
        case type.OPEN_MODAL:
            return {
                ...state,
                modalChild: action.child
            }
        case type.CLOSE_MODAL:
            return {
                ...state,
                modalChild: null
            }
        default:
            return state;
    }
}

export default other;