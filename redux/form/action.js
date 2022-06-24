import { GET_MODAL_STATUS, GET_STATUS } from "./actionTypes";

export const getStatus = (status) => ({
  type: GET_STATUS,
  payload: status,
});

export const getModalStatus = (bol) => ({
    type: GET_MODAL_STATUS,
    payload: bol
});
