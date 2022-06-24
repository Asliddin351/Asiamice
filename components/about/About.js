import {useTranslation} from 'react-i18next'

const About = () => {

  const {t} = useTranslation()

  return (
        <section className="about position-relative">

          {/* <div className="bg-cloud">
            <img src="/cloud_PNG4.png" alt="" />
            <img src="/cloud_PNG4 (1).png" alt="" />
            <img src="/cloud_PNG4 (2).png" alt="" />
            <img src="/cloud_PNG4 (3).png" alt="" />
            <img src="/cloud_PNG4 (4).png" alt="" />
          </div> */}

          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-12 col-md-12 col-lg-6 mb-3">
                <div className="about-text-1">
                  <h2>{t("about.title")}</h2>
                  <p>{t("about.text-1")}
                    <br/>
                    <br/>
                    {t("about.text-2")}</p>
                </div>
                <div className="about-text-2">
                  <h2>{t("about.history.title")}</h2>
                  <p>{t("about.history.text")}</p>
                </div>
                <button className="btn btn-light">{t("about.history.btn")}</button>
              </div>
              <div className="col-12 col-md-12 col-lg-6 ">
                <img src="https://turvopros.com/wp-content/uploads/2021/03/poezdka-v-uzbekistan.jpg" alt="bridge" width="100%" height="100%"/>
              </div>
            </div>
          </div> 
        </section>
    )
}

export default About