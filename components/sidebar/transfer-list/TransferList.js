import { useState } from "react";

import styles from "./transfer-list.module.css";
import Item from "./Item";
import { useSelector } from "react-redux";

const TransferList = (props) => {
  const filterInfo = useSelector((state) => state.tours.tours);


  return (
    <ul className={styles.transfer_list}>
      <hr />
      {props.data.map((e, index) => {
        return (
          <li className={styles.item} key={e.id}>
            <input
              type='checkbox'
              name={props.name}
              id={e.id}
              value={e.id}
              className={"form-check-input"}
              onChange={props.handleChange}
            />
            <label htmlFor={e.id} className='form-check-label'>
              {e.name}
            </label>
          </li>
        );
      })}
    </ul>
  );
};
export default TransferList;
