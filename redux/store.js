import { createStore, applyMiddleware, compose } from "redux";
import {HYDRATE, createWrapper}  from 'next-redux-wrapper'
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";

import { rootReducer } from "./rootReducer";
import thunk from "redux-thunk";

const composedEnhancer =  composeWithDevTools(applyMiddleware(thunkMiddleware))



const reducer = (state, action) => {
  if(action.type == HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload
    }
    return nextState
  }else {
    return reducer(state, action)
  }
}

export const initStore = () => createStore(
  rootReducer,
  composedEnhancer
);

export const store = createStore(
  rootReducer,
  composedEnhancer
)
export const wrapper = createWrapper(initStore);
