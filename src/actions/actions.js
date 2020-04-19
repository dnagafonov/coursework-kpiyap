const {type} = require('./constants');

export const switchActivePage = page => ({
    type: type.SWITCH_ACTIVE_PAGE,
    activePage: page
});

export const openGood = good => ({
    type: type.OPEN_GOOD,
    good
})