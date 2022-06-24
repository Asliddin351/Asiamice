import { combineReducers } from "redux"
import tours from "./tourReducer/tours"
import navbar from "./navbarReducer/navbar"
import hotel from "./hotelReducer/hotel"
import blog from './blogReducer/blog'
import countries from './countries/countries'
import form from "./form/formReducer"

export const rootReducer = combineReducers({
    navbar,
    tours,
    hotel,
    blog,
    countries,
    form
})