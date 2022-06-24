

import {GET_MODAL_STATUS, GET_STATUS} from './actionTypes'


const initialState = {
    isSend: false,
    modalStatus: false
}


const form = (state = initialState, action) => {

    switch (action.type) {
        case GET_STATUS:
            return {...state, isSend: action.payload}
        case GET_MODAL_STATUS: 
            return {...state, modalStatus: action.payload}
        default:
            return {...state};
    }
}


export default form;






