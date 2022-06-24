import axios from "axios";
import { useRouter } from "next/router";
import {useEffect} from "react";
import {useTranslation} from 'react-i18next'

import {connect} from 'react-redux'

import styles from './hotel.module.css'


function Hotel({hotel, ln}) {
  console.log(hotel);

  const {t} = useTranslation()



  const router = useRouter()




  const {image, name,  address,  pets, about, to_the_airport, to_the_railroad, to_the_center, to_the_metro, nearby_attractions, types, comforts} = hotel



  return (
    <>
    <main className={styles.contentMain}>
      <div className={styles.hotelSlider}>
        <div
          id={`carouselExampleControls1`}
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={image}
                className="d-block w-100"
                height="350px"
                alt="image"
              />
            </div>
            {/* <div className="carousel-item">
              <img
                src={"/climat.jpg"}
                className="d-block w-100"
                height="350px"
                alt="image"
              />
            </div>
            <div className="carousel-item">
              <img
                src={"/london-skyline-night-other-health.jpg"}
                height="350px"
                className="d-block w-100"
                alt="image"
              />
            </div> */}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target={`#carouselExampleControls1`}
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden={"true"}
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target={`#carouselExampleControls1`}
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden={"true"}
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <h2>{name}</h2>

      <ul>
        <li>
          <b>{t("hotels.address")}</b> {address}{" "}
        </li>
        <li>
          <b>{t("hotels.to_the_airport")}</b> {to_the_airport}{" "}
        </li>
        <li>
          <b>{t("hotels.to_the_station")}</b> {to_the_railroad}
        </li>
        <li>
          <b>{t("hotels.city_center")}</b> {to_the_center}
        </li>
        <li>
          <b>{t("hotels.metro")}</b> {to_the_metro}
        </li>
        <li>
          <b>{t("hotels.attractions")}</b> {nearby_attractions}
        </li>
      </ul>

      <p>
      {about}
      </p>


      <p>
        <b>{t("hotels.fund")}</b> {"text"}
      </p>

      <ul>
        {types.map((el, index)=> {
          const {name} = el
          return <li key={index}>{name}</li>
        })}
      </ul>

      <p>
        <b>{t("hotels.services")}</b>
      </p>

      <ul>
        {comforts.map((el, index)=>{
          const {name} = el
          return <li key={index}>{name}</li>
        })}
      </ul>

      <p>
        <b>{t("hotels.booking_rules")}</b>
      </p>

      <p>
        <b>{t("hotels.check-in_time")}: 13:00</b>
      </p>
      <p>
        <b>{t("hotels.check-out_time")}: 13:00</b>
      </p>
      <p>
        <b>{t("hotels.accommodation_for_children")}:</b> 1 ребенок до 12 лет на имеющихся кроватях –
        бесплатно; детям до 2 лет -1 детская кроватка выдается бесплатно.
      </p>
      <p>
        <b>{t("hotels.pets")}:</b> {pets ?  "допускается" : "не допускается"}
      </p>
    </main>
    </>
  );
}




export const getServerSideProps = async ({ params }) => {
  // const res = await axios.get(`http://127.0.0.1:8000/api/v1/hotels/${params.id}`);
  // const res2 = await axios.get(`http://127.0.0.1:8000/api/v1/cities_filter/`)
  const res = await axios.get(`${process.env.HOTELS_URL}/${params.id}`)
  const res2 = await axios.get(`${process.env.CITIES_URL}`)
  const hotel = await res.data;
  const city = await res2.data

  return { props: { hotel, city } };
};




const mapStateToProps = (state) => {
  return ({
    ln: state.navbar.ln
  })
}

export default connect(mapStateToProps)(Hotel);
