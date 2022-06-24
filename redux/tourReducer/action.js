import {
  GET_TOURS,
  ALL_TOURS_FAIL,
  FILTER_TOUR,
  IS_SHOW,
  GET_SUSTENCE_NAME,
  GET_ROOM_TYPES,
} from "./actionTypes";
import axios from "axios";
export const getTours =
  (page, toCountry, start, end, room, sustence) => async (dispatch) => {
    try {
      let locale = localStorage.getItem("lang")
      const { data } = await axios.get(
        `${process.env.TOUR_URL}?page=${page ?? ""}&tour_country=${
          toCountry ?? ""
        }${room != "" ? "&room_type=" + room : ""}${
          sustence != "" ? "&sustence_name=" + sustence : ""
        }`, {
          headers: {
            "Accept-Language": locale
          }
        }
      );

      // const {data} = await axios.get(`http://127.0.0.1:8000/api/v1/tours/?page${page ?? ""}`, {
      //   headers: {
      //     "Accept-Language": locale
      //   }
      // })

      dispatch({
        type: GET_TOURS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ALL_TOURS_FAIL,
        payload: error,
      });
    }
  };

export const getSustenceName = () => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `${process.env.SUSTENCE_URL}`
    );
    dispatch({
      type: GET_SUSTENCE_NAME,
      payload: data,
    });
  } catch (err) {
    alert(err);
  }
};

export const getRoomTypes = () => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `${process.env.ROOM_TYPES_URL}`
    );
    dispatch({
      type: GET_ROOM_TYPES,
      payload: data,
    });
  } catch (err) {
    alert(err);
  }
};

export const isShowToggler = (isShow) => {
  return {
    type: IS_SHOW,
    payload: isShow,
  };
};

export const filteredTours = (data) => {
  return {
    type: FILTER_TOUR,
    payload: data,
  };
};
