import React, { useEffect } from "react";
import axios from "axios";
import Layout from "../../hoc/Layout";
import styles from "./tour.module.css";

import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

const Tour = ({ tour }) => {
  const router = useRouter();

  const {
    name,
    image,
    price_dollar,
    price_sum,
    id,
    about,
    days,
    nights,
    services,
    without_services,
    notes,
    price_descriptions
  } = tour;

  const { t } = useTranslation();

  console.log(about)

  return (
    <Layout title={name} metaDiscription={about[0].text} metaKeyWord={name}>
      {tour ? (
        <>
          <div className='container py-4'>
            <h1 className={styles.title}>{name}</h1>
          </div>
          <main className={styles.bgColor}>
            <div className={`${styles.nav_tour}`}>
              <div className='container'>
                <a className={styles.link} href='#main-info'>
                  {t("tour.mainInfo")}
                </a>
                <a className={styles.link} href='#itinerary'>
                  {t("tour.itinerary")}
                </a>
                <a className={styles.link} href='#'>
                  {t("tour.reviews")}
                </a>
              </div>
            </div>
            <div className={`container ${styles.f_direction} my-2`}>
              <div className={styles.content}>
                <img src={image} width='100%' alt='img' />
                <div className='d-flex gap-4 mt-4 mb-5'>
                  <div className={styles.tour_item}>
                    <img
                      src={
                        "https://globalholidays.us/wp-content/themes/globalholidays/images/day.png"
                      }
                      alt='img'
                    />
                    <span className={styles.tour_item__text}>
                      {days} {t("tour.days")}
                    </span>
                  </div>
                  <div className={styles.tour_item}>
                    <img
                      src={
                        "https://globalholidays.us/wp-content/themes/globalholidays/images/night.png"
                      }
                      alt='img'
                    />
                    <span className={styles.tour_item__text}>
                      {nights} {t("tour.nights")}
                    </span>
                  </div>
                </div>

                <section id='main-info'>
                  <h2>{t("tour.mainInfo")}</h2>
                  <div style={{ marginBottom: "30px" }}>
                    <div className='accordion' id='accordionExample'>
                      {about?.map((el, index) => {
                        const { text, title } = el;

                        return (
                          <div key={el.id} className='accordion-item'>
                            <h2
                              className='accordion-header'
                              id={`heading-${index}`}>
                              <button
                                className='accordion-button collapsed'
                                type='button'
                                data-bs-toggle='collapse'
                                data-bs-target={`#collapse-${index}`}
                                aria-expanded='true'
                                aria-controls={`collapse-${index}`}>
                                <span
                                  style={{
                                    color: "#4c6ef5",
                                    marginRight: "10px",
                                  }}>
                                  <i className='fas fa-dot-circle'></i>
                                </span>{" "}
                                {`${index + 1} ${t("tour.day")}`}
                              </button>
                            </h2>
                            <div
                              id={`collapse-${index}`}
                              className='accordion-collapse collapse'
                              aria-labelledby={`heading-${index}`}
                              data-bs-parent='#accordionExample'>
                              <div className='accordion-body'>
                                <strong>{title}</strong> <br />
                                {text}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </section>

                <section id='itinerary' className='bg-white p-5'>
                  <div>
                    <h3>{t("tour.services")}</h3>
                    <ol>
                      {services?.map((el, index) => {
                        const { title } = el;

                        return <li key={index}>{title}</li>;
                      })}
                    </ol>
                  </div>

                  <div>
                    <h3>{t("tour.services_notIncluded")}</h3>
                    <ol>
                      {without_services.map((el, index) => {
                        const { title } = el;
                        return <li key={index}>{title}</li>;
                      })}
                    </ol>
                  </div>
                  <hr />
                  <div>
                    <p>
                      {" "}
                      <b>{t("tour.notes")}:</b> {notes}
                    </p>
                  </div>
                </section>
              </div>

              <aside className={styles.tourSidebar}>
                <div className={styles.price_box}>
                  <span style={{ color: "grey", fontSize: "21px" }}>
                    <i className='fas fa-tags'></i>
                    {t("tour.price")}:
                  </span>{" "}
                  <h4
                    style={{
                      color: "gray",
                      fontSize: "18px",
                      marginBottom: "0",
                    }}>
                    <span className={styles.price}>
                      {router.locale == "uz"
                        ? `${price_sum} sum dan`
                        : `$ ${price_dollar}`}
                    </span>
                  </h4>
                </div>
                <div className={styles.promotions}>
                  <ul className={styles.promotions_list}>
                    {/* <li className={styles.item}>{t("tour.bonus1")}</li>
                    <li className={styles.item}>{t("tour.bonus2")}</li> */}
                    {price_descriptions?.map(el => {
                        return <li key={el.id}>{el.title}</li>
                    })}
                  </ul>
                </div>
                <div className={styles.booking_box}>
                  <button
                    className={styles.bookingLink}
                    onClick={() => router.push("/payment")}>
                    {t("tour.book")}
                  </button>
                  <a href='tel:+998338375577' className={styles.bookCall}>
                    {t("tour.call")}
                  </a>
                </div>
              </aside>
            </div>
          </main>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </Layout>
  );
};



export const getServerSideProps = async ({ params, locale }) => {
  try {
    const res = await axios.get(`${process.env.TOUR_URL}${params.id}`, {
      headers: {
        "Accept-Language": locale,
      },
    });

    const tour = await res.data;

    return { props: { tour } };
  } catch (e) {
    console.log(e);
  }
};




export default Tour;
