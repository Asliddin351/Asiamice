import { useState } from "react";
import styles from './buttonGroup.module.css'

import { connect } from 'react-redux'
import { getHotelID } from "../../redux/hotelReducer/action";



function ButtonsGroup({children, name, id}) {
  



 

 

  return (
    <>
      <input
        type="radio"
        className="btn-check"
        name={name}
        id={`${name}${id}`}
        autoComplete="off"
        defaultValue={id}
      />
      <label className={"btn btn-outline-primary"}  htmlFor={`${name}${id}`}>
        {children}
      </label>
    </>
  );
}
export default ButtonsGroup;







