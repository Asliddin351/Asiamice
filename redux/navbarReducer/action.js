import {FILTER_TOUR, NAV_TOGGLE, CHANGE_LN} from './actionName'


export const fitlterTour = (something) => ({
    type: FILTER_TOUR,
    payload: something
})


export const navToggler = (something) => ({
    type: NAV_TOGGLE,
    payload: something
})

export const changeLn = (lang) => ({
    type: CHANGE_LN,
    payload: lang
})

