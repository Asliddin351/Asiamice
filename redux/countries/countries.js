import {
    GET_CITIES,
    GET_CITIES_FAILURE,
    GET_CITIES_SUCCESS,
    GET_COUNTRIES,
    GET_COUNTRIES_FAILURE,
    GET_COUNTRIES_SUCCESS
} from './actionType'

const initialState = {
    countries: [],
    cities: [],
    loading: false,
}

const countries = (state = initialState, action) => {
    switch (action.type) {
        case GET_COUNTRIES:
            return {...state, loading: true}
        case GET_COUNTRIES_SUCCESS:
            return {...state, countries: action.payload, loading: false}
        case GET_COUNTRIES_FAILURE:
            return {...state, loading: false}
        case GET_CITIES:
            return {...state, loading: true}
        case GET_CITIES_SUCCESS:
            return {...state, cities: action.payload, loading: false}
        case GET_CITIES_FAILURE:
            return {...state, loading: false}
        default:
            return state;
    }
}

export default countries;
