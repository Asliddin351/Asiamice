import {
  GET_TOURS,
  FILTER_TOUR,
  IS_SHOW,
  GET_SUSTENCE_NAME,
  GET_ROOM_TYPES
} from "./actionTypes";

const initialState = {
  tours: [],
  filteredTours: [],
  sustenceNames: null,
  roomTypes: null,
  isShow: false,
};

const tours = (state = initialState, action) => {
  switch (action.type) {
    case GET_TOURS:
      return { ...state, tours: action.payload };
    case FILTER_TOUR:
      return { ...state, filteredTours: action.payload };
    case IS_SHOW:
      return { ...state, isShow: action.payload };
    case GET_SUSTENCE_NAME:
      return { ...state, sustenceNames: action.payload };
    case GET_ROOM_TYPES:
      return {...state, roomTypes: action.payload}
    default:
      return state;
  }
};

export default tours;
