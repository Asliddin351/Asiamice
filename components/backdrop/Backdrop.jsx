import React from 'react'
import styles from './backdrop.module.css'


function Backdrop(props) {
    return(
        <div onClick={props.hide} className={styles.backdrop} />
    )
}

export default Backdrop;