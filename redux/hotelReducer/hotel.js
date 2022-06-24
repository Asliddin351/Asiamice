import {GET_HOTEL, GET_HOTEL_ID, GET_HOTELS, GET_HOTELS_FAILURE, GET_HOTELS_SUCCESS} from './actionType'


const initialState = {
    hotels: [],
    hotelId: null,
    loading: false,
}


const hotel = (state = initialState, action) => {

    switch (action.type) {
        case GET_HOTEL_ID:
            return {...state, hotelId: action.payload}
        case GET_HOTELS:
            return {...state, loading: true}
        case GET_HOTELS_FAILURE:
            return {...state, loading: false}
        case GET_HOTELS_SUCCESS:
            return {...state, hotels: action.payload, loading: false}
        case GET_HOTEL:
            return {...state, hotel: action.payload}
        default:
            return {...state};
    }
}


export default hotel






