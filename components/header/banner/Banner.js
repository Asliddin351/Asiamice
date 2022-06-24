import styles from "./banner.module.css";

import { useRouter } from "next/router";

import { useTranslation } from "react-i18next";

const Banner = () => {
  const { t } = useTranslation();

  const router = useRouter();
  const url = router.pathname;

  return (
    <div className={styles.banner}>
      {/* url === '/mice' ? 
                <h1 className={styles.banner__title_mice}>{t("links.mice")}</h1> : 
                url === '/tours' ? 
                <h1 className={styles.banner__title_tours}>{t("links.tours")}</h1> : 
                url === "/about" ? 
                <h1 className={styles.banner__title_about}>{t("links.about")}</h1> :
                url === '/contact' ?
                <h1 className={styles.banner__title_contact}>{t("links.contacts")}</h1> :
                url === '/memo' ?
                <h1 className={styles.banner__title_memo}>{t("links.memo")}</h1> :
                url === '/faq' ? null :   */}
      {url === "/" ? (
        <h1 className={styles.banner__title}>
          {t("banner.title.part1")}{" "}
          <span className={styles.red}>
            <br /> {t("banner.title.part2")} <br />
            {t("banner.title.part3")}
          </span>
        </h1>
      ) : null}
    </div>
  );
};

// {t("banner.title")}

export default Banner;
