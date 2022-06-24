import { FILTER_TOUR, CHANGE_LN } from "./actionName";


const initialState = {
  visible: false,
  open: false,
  active: false,
  ln: "ru",
  tour_show: true
};

const navbar = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_TOUR:
      return { ...state, tour_show: action.payload}
    case CHANGE_LN:
      return { ...state, ln: action.payload }

    default:
      return state;
  }
};

export default navbar;
