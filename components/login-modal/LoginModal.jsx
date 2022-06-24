import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { useSpring, animated } from 'react-spring'; // web.cjs is required for IE 11 support

import { useTranslation } from 'react-i18next'

import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button'



import styles from './login.module.css'

// function rand() {
//     return Math.round(Math.random() * 10) - 10;
//   }
  
  function getModalStyle() {
    let top = 10; 
    let left = 82; 

    // top: ;
    // left: 
    // transform: translate(-82%, -7%);

    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${left}%, -${top}%)`,
    };
  }

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    position: 'absolute',
    top: "10%",
    left: "82%",
    transform: "translate(-82%, -10%)",
    width: 400,
    height: 300,
    display: "flex",
    backgroundColor: "#fff",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius: '6px',
    [theme.breakpoints.down('sm')]: {
      width: 350,
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    }
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

export default function LoginModal({setIsAuth}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const [modalStyle] = React.useState(getModalStyle);

  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };




  const {t} = useTranslation()

  return (
    <div>
      <button className={styles.top_link} type="button" onClick={handleOpen}>
       {t("login")}
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
                <form className={`${classes.root} row align-items-center`}  autoComplete="off">
                    <div className='col-12'>
                        <TextField type={'emain'} fullWidth  id="outlined-basic" placeholder={"Email"} variant="outlined" />
                    </div>
                    <div className='col-12'>
                        <FormControl className={clsx(classes.margin, classes.textField)} fullWidth   variant="outlined">
                            {/* <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel> */}
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={values.showPassword ? 'text' : 'password'}
                                value={values.password}
                                onChange={handleChange('password')}
                                placeholder={t("password")}
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                    >
                                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                                }
                                labelWidth={70}
                            />
                        </FormControl>               
                    </div>
                    <div className='col-12'>
                        <Button fullWidth variant="contained" className={styles.formbgbtn} onClick={()=>setIsAuth(true)}>
                            {t("login")}
                        </Button>
                    </div>
                </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}




