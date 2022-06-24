import Modal from "../modal/Modal";
import styles from "./card.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const TourCard = ({ tour }) => {
  const { image, country, name, id, slug } = tour;

  const router = useRouter()

  const {query, locale} = router;




  return (
    <Link href={{
      pathname: `/tours/${id}`,
      query: {
        name: `${slug}`
      }
    }} replace={true} shallow={false}>
      <a className={`card ${styles.card}`}>


        {tour ? (
          <div
            style={{ backgroundImage: `url(${image})` }}
            className={`card-img-top ${styles.header}`}
          ></div>
        ) : (
          <div>Loading...</div>
        )}

        <div className="card-body" style={{ overflowY: "hidden" }}>
          <h5 className="card-title">
            <i
              className="fas fa-map-marker-alt"
              style={{ color: "#2387F5" }}
            ></i>{" "}
            {name}
          </h5>
          <p className={styles.text}>{country.name}</p>
        </div>
        <div
          className={`card-footer p-0 ${styles.card_btn_container}`}
          style={{ backgroundColor: "transparent" }}
        >
        </div>
      </a>
    </Link>
  );
};

export default TourCard;
