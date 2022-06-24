import {
    GET_CITIES,
    GET_CITIES_FAILURE,
    GET_CITIES_SUCCESS,
    GET_COUNTRIES,
    GET_COUNTRIES_FAILURE,
    GET_COUNTRIES_SUCCESS
} from './actionType'


import axios from 'axios'


export const getCountries = () => async (dispatch) => {
    dispatch({
        type: GET_COUNTRIES,
    })
    try {
        // const {data} = await axios.get(`${process.env.COUNTRIES_URL}`);
        const {data} = await axios.get(`${process.env.FORM_COUNTRIES}`);

        dispatch({
            type: GET_COUNTRIES_SUCCESS,
            payload: data
        })
    } catch (e) {
        dispatch({
            type: GET_COUNTRIES_FAILURE,
        })
    }

}


export const getCities = () => async (dispatch) => {
    dispatch({
        type: GET_CITIES,
    })
    try {
        const {data} = await axios.get(`${process.env.CITIES_URL}`)

        dispatch({
            type: GET_CITIES_SUCCESS,
            payload: data
        })
    } catch (e) {
        dispatch({
            type: GET_CITIES_FAILURE,
        })
        alert(e)
    }

}


