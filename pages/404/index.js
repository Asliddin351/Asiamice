import Link from "next/link";
import styles from "./error.module.css";



const ErrorPage = () => {
  return (
    <div className={styles.errorPage}>
      <img
          src="/404.png"
          alt="404"
          className={styles.errorImg}
      />
      <h1 className={styles.errorDiscription}>Page not found</h1>
      <Link href="/">
        <button className={styles.errorBtn}>
          {" "}
          <span className={styles.btnIcon}>
            <i className="fas fa-long-arrow-alt-left"></i>
          </span>{" "}
          Назад
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
