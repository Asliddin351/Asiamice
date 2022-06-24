import { useEffect, useState } from "react";
import Hotel from "../../components/hotel_main";
import Layout from "../../hoc/Layout";
import styles from "./hotels.module.css";

import { useDispatch, useSelector } from "react-redux";

import { useTranslation } from "react-i18next";
import { getHotels } from "../../redux/hotelReducer/action";
import axios from "axios";
import { useRouter } from "next/router";

import Link from 'next/link'

function Hotels({ cities }) {
  const dispatch = useDispatch();
  
  const router = useRouter()
  const { hotels } = useSelector((state) => state.hotel);

  const { t } = useTranslation();

  const [btnId, setBtnId] = useState(1);

  const [isActive, setIsActive] = useState(false);

  const [selectedHotel, setSelectedHotel] = useState(null);
  useEffect(() => {
    if (cities != null && cities.length > 0) {
      dispatch(getHotels(cities[0].id));
    }
  }, []);

  return hotels ? (
    <Layout title={t("links.hotels")}>
      <div className={styles.hotels}>
        <div className='container'>
          <h1 className={styles.title}>{t("hotels.title")}</h1>
          <section className={`${styles.content}`}>
            {hotels != null && hotels.length > 0 ? (
              <aside className={`${styles.content_left} `}>
                <h3>{t("hotels.cities")}</h3>
                <div
                  className='btn-group-vertical w-100'
                  role='group'
                  aria-label='Basic radio toggle button group'>
                  {cities?.map((el, index) => {
                    const { name, id } = el;

                    const handleClicked = () => {
                      setBtnId(id);
                      dispatch(getHotels(id));
                    };

                    return (
                      <button
                        key={el.id}
                        className={`${styles.btnFilter} ${
                          isActive ? `${styles.active}` : ""
                        }`}
                        onClick={handleClicked}>
                        {name}
                      </button>
                    );
                  })}
                </div>
              </aside>
            ) : null}

            {hotels != null && hotels.length > 0 ? (
              <Hotel
                hotel={selectedHotel != null ? selectedHotel : hotels[0]}
              />
            ) : (
              <div style={{backgroundColor: "orange", width: "100%", height: "40px", color: "#fff", lineHeight: "40px", paddingLeft: "15px"}}>{t("hotels.404")}</div>
            )}

            {hotels != null && hotels.length > 0 ? (
              <aside className={styles.content_right}>
                <h3>{t("hotels.title")}</h3>
                <div
                  className='btn-group-vertical w-100'
                  role='group'
                  aria-label='Basic radio toggle button group'>
                  {hotels?.map((el, index) => {
                    const handleClicked = () => {
                      setSelectedHotel(el);
                    };
                  
                    if (el.city?.id == btnId) {
                      return (
                        <Link
                          href={{
                            query: {
                              name: `${el.name}`
                            }
                          }} 
                          scroll={false} 
                          key={el.id}
                          
                          onClick={()=>handleClicked()}
                          disabled={isActive}>
                         <a className={
                            !isActive
                              ? `${styles.btnFilter}`
                              : `${styles.active}`
                          }>{el.name}</a>
                        </Link>
                      );
                    } else {
                      return null;
                    }
                  })}
                </div>
              </aside>
            ) : null}
          </section>
        </div>
      </div>
    </Layout>
  ) : (
    <div>Loading ...</div>
  );
}

Hotels.getInitialProps = async (ctx) => {
  const { data } = await axios.get(`${process.env.CITIES_URL}`);
  return { cities: data.results };
};

export default Hotels;
