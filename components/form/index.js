import React, { useState, useEffect } from "react";
import styles from "./form-modal.module.css";
import { useTranslation } from "react-i18next";

import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useRouter } from "next/router";
import {getStatus} from '../../redux/form/action'
import { getCountries } from "../../redux/countries/action";

const Form = ({setOpen}) => {
  const { t } = useTranslation();
  const router = useRouter();

  const countries = useSelector((state) => state.countries.countries);

  const dispatch = useDispatch()
 
  useEffect(() => {
    dispatch(getCountries())
  }, [])

  console.log(setOpen)


  const { data } = countries;


  const [formData, setFormData] = useState({
    url: "",
    name: "",
    email: "",
    phone: "",
    number_of_people: "",
    visit: "",
    _from: "",
    _To: "",
    start: "",
    finish: "",
    star: "",
    text: "",
  });



  const [statusForm, setStatusForm] = useState(false);

  const handleChange = (e) => {
    const newData = { ...formData };

    newData[e.target.id] = e.target.value;

    setFormData(newData);
  };




  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      axios
        .post(
          `https://api.asiamice.uz/api/v1/contact-us/`,
          {

            url: router.pathname !== '/' ? `https://www.asiamice/${router.pathname}.uz` : `https://www.asiamice.uz`,
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            number_of_people: formData.number_of_people,
            visit: formData.visit,
            _from: formData._from,
            _To: formData._To,
            start: formData.start,
            finish: formData.finish,
            star: formData.star,
            text: formData.text,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
            auth: {
              username: "admin",
              password: "19Maximus97",
            },
          }
        ).then((res) => {
          if (res.status === 201) {
            
            setFormData({
                url: "",
                name: "",
                email: "",
                phone: "",
                number_of_people: "",
                visit: "",
                _from: "",
                _To: "",
                start: "",
                finish: "",
                star: "",
                text: "",
              });
              setStatusForm(true);

              if(!setOpen == undefined) {
                setOpen(false)
              }
          }else {
            setStatusForm(false)
          }
        });
    } catch (e) {
        if(e.status == 401) {
          return <div>WRONG POST</div>
        }else {
          console.log(e.status)
        }
    }
  };

  

  return (
    <>
      <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
        <div>
          <div>
            <input
              type='text'
              className='form-control'
              id='name'
              placeholder={t("mice-form.fullName")}
              value={formData.name}
              onChange={(e) => handleChange(e)}
              required
            />
            <div className='valid-feedback'>Looks good!</div>
          </div>
          <div>
            <input
              type='email'
              className='form-control'
              id='email'
              placeholder={t("mice-form.email")}
              value={formData.email}
              onChange={(e) => handleChange(e)}
              required
            />
            <div className='valid-feedback'>Looks good!</div>
          </div>
          <div>
            <input
              type='text'
              className='form-control'
              id='phone'
              placeholder={t("mice-form.contact")}
              value={formData.phone}
              onChange={(e) => handleChange(e)}
              required
            />
          </div>
          <div>
            <input
              type='text'
              placeholder={t("mice-form.numPeople")}
              className='form-control'
              id='number_of_people'
              value={formData.number_of_people}
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div>
            <input
              type='text'
              className='form-control'
              id='visit'
              placeholder={t("mice-form.purpose")}
              value={formData.visit}
              onChange={(e) => handleChange(e)}
              required
            />
            <div className='valid-feedback'>Looks good!</div>
          </div>
        </div>

        <div>
          <div className='d-flex gap-2'>
            <select
              name='countrues'
              id='_from'
              value={formData._from}
              onChange={(e) => handleChange(e)}
              className='form-select form-select-lg'
              aria-label='.form-select-lg example'
              >
              <option value={t("tours.form.input1")}>{t("tours.form.input1")}</option>
              {data?.map((el, index) => {
                return (
                  <option
                    key={index}
                    value={el.country}
                    name={"fromCountry"}
                    form={"tourForm"}
                    className={styles.option}>
                    {el.country}
                  </option>
                );
              })}
            </select>

            <select
              name='countrues'
              id='_To'
              value={formData._To}
              onChange={(e) => handleChange(e)}
              className='form-select form-select-lg'
              aria-label='.form-select-lg example'
              >
              <option value={t("tours.form.input2")}>{t("tours.form.input2")}</option>
              {data?.map((el, index) => {
                return (
                  <option
                    key={index}
                    value={el.country}
                    name={"fromCountry"}
                    form={"tourForm"}
                    className={styles.option}>
                    {el.country}
                  </option>
                );
              })}
            </select>
          </div>
          <div className='calendar-box d-flex'>
            <div className='d-flex w-100 gap-2'>
              <input
                type='date'
                id='start'
                className={styles.inputDate}
                value={formData.start}
                onChange={(e) => handleChange(e)}
              />
              <input
                type='date'
                id='finish'
                className={styles.inputDate}
                value={formData.finish}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          <div>
            <select
              className='form-select'
            
              id='star'
              value={formData.star}
              onChange={(e) => handleChange(e)}
              aria-label='Default select example'>
              <option value='0'>{t("stars")}</option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
              <option value='6'>6</option>
            </select>
          </div>

          <textarea
            minrows={1}
            mincols={4}
            id='text'
            className={`${styles.textArea} form-control`}
            placeholder='Empty'
            value={formData.text}
            onChange={(e) => handleChange(e)}
          />

          <div className='mb-3'>
            <button className={styles.formBtn} type='submit'>
              {t("mice-form.submit")}
            </button>
          </div>
        </div>
      </form>
      {statusForm == true ? <div className={styles.welldone} onClick={()=>setOpen(false)}> WELLDONE! </div> : null}
    </>
  );
};

export default Form;
