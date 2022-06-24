
import styles from './holiday.module.css'

import { useTranslation } from 'react-i18next'

const Holiday = () => {

    const {t} = useTranslation()

    return (
        <div className={styles.holiday}>
            <div className='container'>
                <div className={styles.holiday__header}>
                    <h2 className={styles.title}>{t("choose.title")}</h2>
                    <p className={styles.discription}>{t("choose.discription")}</p>
                </div>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3">
                    <div className="col">
                        <div className={styles.holiday__card}>
                            <img src="/bonded1.png" className={styles.icon} alt="icon1" />
                            <div className={styles.holiday__text}>
                                <h5 className={styles.holiday__text_title}>{t("choose.bonded.title")}</h5>
                                <p className={styles.holiday__text_description}>{t("choose.bonded.text")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className={styles.holiday__card}>
                            <img src="/Group-discuss1.png" className={styles.icon} alt="icon2" />
                            <div className={styles.holiday__text}>
                                <h5 className={styles.holiday__text_title}>{t("choose.discounts.title")}</h5>
                                <p className={styles.holiday__text_description}>{t("choose.discounts.text")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className={styles.holiday__card}>
                            <img src="/Icon-6-01.png" className={styles.icon} alt="icon3" />
                            <div className={styles.holiday__text}>
                                <h5 className={styles.holiday__text_title}>{t("choose.finest.title")}</h5>
                                <p className={styles.holiday__text_description}>{t("choose.finest.text")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className={styles.holiday__card}>
                            <img src="Icon-3-01.png" className={styles.icon} alt="icon4" />
                            <div className={styles.holiday__text}>
                                <h5 className={styles.holiday__text_title}>{t("choose.departure.title")}</h5>
                                <p className={styles.holiday__text_description}>{t("choose.departure.text")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className={styles.holiday__card}>
                            <img src="/Icon-4-01.png" className={styles.icon} alt="icon5" />
                            <div className={styles.holiday__text}>
                                <h5 className={styles.holiday__text_title}>{t("choose.handpicked.title")}</h5>
                                <p className={styles.holiday__text_description}>{t("choose.handpicked.text")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className={styles.holiday__card}>
                            <img src="/Icon-2-01.png" className={styles.icon} alt="icon6" />
                            <div className={styles.holiday__text}>
                                <h5 className={styles.holiday__text_title}>{t("choose.luxurious.title")}</h5>
                                <p className={styles.holiday__text_description}>{t("choose.luxurious.text")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Holiday