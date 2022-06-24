import React from 'react'
import styles from './transfer-list.module.css'


export default function Item({item, checked, setChecked}) {


    return (
        <>
            {item.map((el,index)=>{
                return(

                    <li key={index}>
                        {/* {Object.keys(checked).map((e,index) => {
                            return  <input key={index} id="item" type='checkbox' checked={e} onChange={handleChecked} />
                        })} */}
                        <input  id={el.id} type='checkbox' checked={"false"} onChange={handleChecked} />

                         {el.sustence_hotel.map(e=>{
                             return <label key={e.id} htmlFor={el.id} className={styles.text}>{e.sustenance_name_ru}</label>
                         })}
                    </li>
                )
            })}
        </>
        // <li className={styles.item}>
        //     <input type='checkbox' checked={"true"}  />
        //     <label  className={styles.text}>{"sd"}</label>
        // </li>
    )
}


