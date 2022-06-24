import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./payment.module.css";
import Axios from "axios";

import InputMask from "react-input-mask";
// import { useForm, Controller} from "react-hook-form";

import {
  TextField,
  FormControl,
  Checkbox,
  FormControlLabel,
  Button,
  OutlinedInput,
  InputLabel,
  Input
} from "@material-ui/core";
import Layout from "../../hoc/Layout";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200,
    },
  },
  formBox: {
    width: "700px",
    margin: "0 auto",
    backgroundColor: "white",
    padding: "15px 25px",
    borderRadius: "6px",
    [theme.breakpoints.down("sm")]: {
      width: 500,
    },
    [theme.breakpoints.down("xs")]: {
      width: 345,
    },
  },
  textFildStyle: {
    marginBottom: "25px",
  },
  wrapper: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const Payment = ({id}) => {

  const classes = useStyles();

  const {t} = useTranslation()

 
  const [checked, setChecked] = useState(false);

  const [isCheckout, setIsCheckout] = useState(false);

  const [paymentDate, setPaymentDate] = useState({
    fullname: "",
    first_address: "",
    second_address: "",
    country: "",
    city: "",
    state: "",
    street: "",
    postcode: "",
    cardNum: "",
    cardDate: "",
    cardCvv: "",
  });

  const handleChange = (e) => {
    const newData = { ...paymentDate };

   newData[e.target.id] = e.target.value;

  //  if(newDate[e.target.id] == false) {
  //    console.log("ERROR REQUIRE")
  //  }

    setPaymentDate(newData);
  };

  const Submit = async (e) => {
    e.preventDefault();



    await Axios.post(
      process.env.PAYMENT,
      {
        fullname: paymentDate.fullname,
        first_address: paymentDate.first_address,
        second_address: paymentDate.second_address,
        country: paymentDate.country,
        city: paymentDate.city,
        state: paymentDate.state,
        street: paymentDate.street,
        postcode: paymentDate.postcode,
        card_number: paymentDate.cardNum.replaceAll(" ", ""),
        date: paymentDate.cardDate.replaceAll("/", ""),
        cvv: paymentDate.cardCvv,
        
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        auth: {
          username: "admin",
          password: "admin",
        },
      }
    ).then((res) => {
      console.log(res.data);
    });

    setIsCheckout(true);
  };

  return (
    <Layout title={t("links.payment")}>
      <div className={styles.pageBg}>
        {!isCheckout ? (
          <form
            className={`${classes.formBox}`}
            onSubmit={(e) => Submit(e)}
          >
            <FormControl className={`${classes.wrapper}`} fullWidth>
              <h1>Address</h1>
              <InputMask
                id="fullname"
                className={`${styles.inputField}`}
                placeholder="Full Name"
                value={paymentDate.fullname}
                onChange={(e) => {
                  handleChange(e);
                }}
                variant="outlined"
                required

              />
              <InputMask
                id="first_address"
                className={`${styles.inputField}`}
                placeholder="Address 1"
                value={paymentDate.first_address}
                onChange={(e) => {
                  handleChange(e);
                }}
                variant="outlined"
                required
              />
              <InputMask
                id="second_address"
                className={`${styles.inputField}`}
                placeholder="Address 2"
                value={paymentDate.second_address}
                onChange={(e) => {
                  handleChange(e);
                }}
                variant="outlined"
                required
              />
              <InputMask
                id="street"
                className={`${styles.inputField}`}
                placeholder="Street"
                value={paymentDate.street}
                onChange={(e) => {
                  handleChange(e);
                }}
                variant="outlined"
                required

              />
              <InputMask
                id="city"
                className={`${styles.inputField}`}
                placeholder="City"
                value={paymentDate.city}
                onChange={(e) => {
                  handleChange(e);
                }}
                variant="outlined"
                required
 
              />
              <InputMask
                id="state"
                className={`${styles.inputField}`}
                placeholder="State"
                value={paymentDate.state}
                onChange={(e) => {
                  handleChange(e);
                }}
                variant="outlined"
                required
          
              />
              <InputMask
                id="country"
                className={`${styles.inputField}`}
                placeholder="Country"
                value={paymentDate.country}
                onChange={(e) => {
                  handleChange(e);
                }}
                variant="outlined"
                required
           
              />
              <InputMask
                id="postcode"
                className={`${styles.inputField}`}
                placeholder="Post code"
                value={paymentDate.postcode}
                onChange={(e) => {
                  handleChange(e);
                }}
                variant="outlined"
                required
          
              />
            </FormControl>

            <FormControl className={`${classes.wrapper}`} fullWidth>
              <h1>Billing Address</h1>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checked}
                    onChange={(e) => setChecked(e.target.checked)}
                    color={"primary"}
                  />
                }
                label="same with address"
              />
              {!checked ? (
                <>
                  <InputMask
                    id="fullname"
                    className={`${styles.inputField}`}
                    placeholder="Full Name"
                    value={paymentDate.fullname}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    variant="outlined"
                    required
                 
                  />
                  <InputMask
                    id="first_address"
                    className={`${styles.inputField}`}
                    placeholder="Address 1"
                    value={paymentDate.first_address}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    variant="outlined"
                    required
                
                  />
                  <InputMask
                    id="second_address"
                    className={`${styles.inputField}`}
                    placeholder="Address 2"
                    value={paymentDate.second_address}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    variant="outlined"
                    required
                
                  />
                  <InputMask
                    id="street"
                    className={`${styles.inputField}`}
                    placeholder="Street"
                    value={paymentDate.street}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    variant="outlined"
                    required
              
                  />
                  <InputMask
                    id="city"
                    className={`${styles.inputField}`}
                    placeholder="City"
                    value={paymentDate.city}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    variant="outlined"
                    required
                   
                  />
                  <InputMask
                    id="state"
                    className={`${styles.inputField}`}
                    placeholder="State"
                    value={paymentDate.state}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    variant="outlined"
                    required
                   
                  />
                  <InputMask
                    id="country"
                    className={`${styles.inputField}`}
                    placeholder="Country"
                    value={paymentDate.country}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    variant="outlined"
                    required
                  
                  />
                  <InputMask
                    id="postcode"
                    className={`${styles.inputField}`}
                    placeholder="Post code"
                    value={paymentDate.postcode}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    variant="outlined"
                    required
                    
                  />
                </>
              ) : null}
            </FormControl>

            <div className={styles.cardDate}>
              <label className="mb-2">Card Number</label>
              <InputMask
                mask="9999 9999 9999 9999"
                id="cardNum"
                value={paymentDate.cardNum}
                onChange={(e) => handleChange(e)}
                autoComplete={"true"}
                placeholder="0000 0000 0000 0000"
                className={styles.cardNum}
                required
              />
              <InputMask
                mask="99/99"
                id="cardDate"
                value={paymentDate.cardDate}
                onChange={(e) => handleChange(e)}
                type={"text"}
                autoComplete={"true"}
                placeholder="01/14"
                className={styles.cardTerm}
                required
              />

              <InputMask
                mask="999"
                id="cardCvv"
                value={paymentDate.cardCvv}
                onChange={(e) => handleChange(e)}
                type={"text"}
                autoComplete={"true"}
                placeholder="CVV"
                required
                className={styles.cardCvv}
              />
            </div>

            <Button
              type={"submit"}
              fullWidth
              variant="contained"
              color={"primary"}
            >
              Checkout
            </Button>
          </form>
        ) : (
          <div className={styles.complit}>
            <div className={styles.box}>
              <span style={{ marginRight: "15px" }}>
                <i className="fas fa-check-circle"></i>
              </span>{" "}
              This is a success message!
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Payment;
