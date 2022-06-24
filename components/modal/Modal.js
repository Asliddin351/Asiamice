import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { useSpring, animated } from 'react-spring';
import {useSelector} from 'react-redux'

import Link from 'next/link'
import {useRouter} from 'next/router'
import styles from './modal.module.css'
import axios from 'axios';


const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    overflowY: "scroll",
    maxHeight: "500px",
    maxWidth: "725px",
    borderRadius: "5px",
    border: 'none'
  },
}));

const Fade = React.forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element,
  in: PropTypes.bool.isRequired,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
};

export default function SpringModal({item, id, price_sum}) {

  
  
  // console.log(price_sum)

  // const id = data.results.find(e=>{el.id})





  const classes = useStyles();
  const [open, setOpen] = React.useState(false);



  const router = useRouter()

    //ID ROUTING TO CARD
    const s = router.query.id = id
    //-----------------------------------


  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



 return (
    <div>
      <button type="button" onClick={handleOpen} className={styles.coutn_tour}>
        от{"  "}{price_sum}{" "}<i className="fas fa-ruble-sign"></i>
      </button>

      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <ul className={styles.modal_container}>
              {item.hotel.map(el=> {
                return  (
                    <li key={el.id} className={styles.modal_item} >

                      <div className={styles.modal_date}>
                          <span className={styles.item__day}>7 ночей</span>
                          <br/>
                          <span className={styles.item__date}>с 20 июля</span>
                      </div>

                      <div className={styles.modal_meal}>
                          <span className={styles.item__food}>{el.sustenance}</span>
                          <br/>
                          <span className={styles.item__comfort}>{el.room_comfort}</span>
                      </div>
                      
                      <button className={styles.item__btn} onClick={() => router.push(`/tour/${s}`)}>{el.price_sum}</button>          

                    </li>
                )
              })}


            </ul>
          </div>
        </Fade>
        
      </Modal>
    </div>
  );
}



export async function getServerSideProps(context) {


  
  // Fetch data from external API
  const res = await axios.get(`http://127.0.0.1:8000/api/v1/tours/`)
  const data = await res.data

  // Pass data to the page via props
  return { props: { data } }
};
