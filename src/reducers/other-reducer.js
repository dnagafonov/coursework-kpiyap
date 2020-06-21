import produce from "immer";

const { type } = require('../actions/constants');

const other = produce((draft, action) => {
    switch (action.type) {
        case type.OPEN_MODAL:
            draft.modalChild = action.child
            return draft;
        case type.CLOSE_MODAL:
            draft.modalChild = null;
            return draft;
        case type.POST_NEW_OFFER:
            draft.offerList = action.list
            return draft;
        default:
            return draft;
    }
}, {});

export default other;