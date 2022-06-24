import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Option from "./input";
import styles from "./tour-form.module.css";
import { useTranslation } from "react-i18next";
import { Formik } from "formik";
import { isShowToggler } from "../../redux/tourReducer/action";
import Sidebar from "../sidebar/Sidebar";
import { useRouter } from "next/router";

const TourForm = ({ setFilters, filters, currentPage }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const isShow = useSelector((state) => state.tours.isShow);

  const router = useRouter();

  const [show, setShow] = useState(isShow);

  const filterHandler = () => {
    setShow(!show);
    dispatch(isShowToggler(show));
    router.replace(
      `tours/?page=${currentPage ? currentPage : ""}&tour_country=${
        filters.toCountry ?? ""
      }&room_type=${filters.roomTypes?.join(",") ?? ""}&sustence_name=${
        filters.sustenceNames?.join(",") ?? ""
      }`,
      ``,
      { scroll: false }
    );
  };

  return (
    <Formik
      initialValues={filters}
      onSubmit={(values) => {
        setFilters(values);
      }}>
      {({ values, handleChange, handleSubmit }) => (
        <form
          className={!show ? `${styles.tour_form}` : `${styles.formHeight}`}
          id='tourForm'
          onSubmit={handleSubmit}>
          <h2 className='text-center mb-5'>{t("tours.title")}</h2>
          <div className='container'>
            <div
              className={`row row-cols-2 row-cols-sm-2 row-cols-md-2 row-cols-lg-5 justify-content-center align-items-center mb-5 gy-1 ${styles.form_container}`}>
              <div className='col'>
                <Option
                  defText={t("tours.form.input1")}
                  name='fromCountry'
                  value={values.fromCountry}
                  onChange={handleChange}
                />
              </div>
              <div className='col'>
                <Option
                  defText={t("tours.form.input2")}
                  name='toCountry'
                  value={values.toCountry}
                  onChange={handleChange}
                />
              </div>
              <div className='col'>
                <div>
                  <input
                    type='date'
                    className={styles.inputDate}
                    name='start'
                    value={values.start}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className='col'>
                <input
                  type='date'
                  className={styles.inputDate}
                  name='end'
                  value={values.end}
                  onChange={handleChange}
                />
              </div>

              <div className='col-12 d-flex gap-2'>
                <button
                  type={"button"}
                  className={`${styles.btn_filter} ${
                    !show ? `${styles.active}` : ""
                  }`}
                  onClick={filterHandler}>
                  <svg
                    fill='white'
                    height='22px'
                    viewBox='0 0 16 16'
                    width='22px'
                    xmlns='http://www.w3.org/2000/svg'
                    xmlSpace='preserve'>
                    <path
                      className={styles.path}
                      d='M0,2.5C0,2.22382,0.22388,2,0.5,2h5.57074C6.29376,1.13892,7.06915,0.5,8,0.5S9.70624,1.13892,9.92926,2H15.5C15.77612,2,16,2.22382,16,2.5C16,2.77612,15.77612,3,15.5,3H9.92926C9.70624,3.86115,8.93085,4.5,8,4.5S6.29376,3.86115,6.07074,3H0.5C0.22388,3,0,2.77612,0,2.5z M15.5,13H3.92926C3.70624,12.13892,2.93085,11.5,2,11.5c-1.10455,0-2,0.89539-2,2c0,1.10455,0.89545,2,2,2c0.93085,0,1.70624-0.63885,1.92926-1.5H15.5c0.27612,0,0.5-0.22388,0.5-0.5C16,13.22382,15.77612,13,15.5,13z M14,6c-0.93085,0-1.70624,0.63892-1.92926,1.5H0.5C0.22388,7.5,0,7.72382,0,8c0,0.27612,0.22388,0.5,0.5,0.5h11.57074C12.29376,9.36115,13.06915,10,14,10c1.10455,0,2-0.89545,2-2C16,6.89539,15.10455,6,14,6z'
                      stroke='currentColor'></path>
                  </svg>
                </button>
                <button
                  type='submit'
                  form='tourForm'
                  className={styles.form_btn}>
                  {t("tours.form.btn")}
                </button>
              </div>
            </div>
            {show ? (
              <>
                <Sidebar
                  handleChange={handleChange}
                  roomTypes={values.roomTypes}
                  sustenceNames={values.sustenceNames}
                />
              </>
            ) : null}
          </div>
        </form>
      )}
    </Formik>
  );
};

export default TourForm;
