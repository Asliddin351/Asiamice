import axios from "axios";
import {
  GET_HOTEL_ID,
  GET_HOTELS,
  GET_HOTELS_FAILURE,
  GET_HOTELS_SUCCESS,
} from "./actionType";

export const getHotelID = (id) => ({
  type: GET_HOTEL_ID,
  payload: id,
});

export const getHotels = (cityId) => async (dispatch) => {
  dispatch({
    type: GET_HOTELS,
  });
  try {
    const { data } = await axios.get(
      `${process.env.HOTELS_URL}?hotel_city=${cityId}`
    );
    dispatch({
      type: GET_HOTELS_SUCCESS,
      payload: data.results,
    });
  } catch (e) {
    dispatch({
      type: GET_HOTELS_FAILURE,
    });
    alert(e);
  }
};
