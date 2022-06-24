import Holiday from "../../components/holidays/Holiday"
import Layout from "../../hoc/Layout"

import {useTranslation} from "react-i18next"


const AboutPage = () => {

    const {t} = useTranslation()
    
    return (
        <Layout title={t("links.about")}>
            <div className='container'>
                <h1 className='about__title'>{t("about.title")}</h1>
                <p className='about__content'>
                    {t("about.text.part1")}
                    <br/>
                    <br/>
                    {t("about.text.part2")}
                    <br/>
                    <br/>
                    {t("about.text.part3")}
                    <br/>
                    <br/>
                    {t("about.text.part4")}
                    <br/>
                    <br/>
                    {t("about.text.part5")}
                    <br/>
                    <br/>
                    {t("about.text.part6")}
                    <br/>
                    <br/>
                    {t("about.text.part7")}
                    <br/>
                    <br/>
                    {t("about.text.part8")}
                    <br/>
                    <br/>
                    {t("about.text.part9")}
                    <br/>
                    <br/>
                    {t("about.text.part10")}
                </p>
            </div>
            <Holiday/>

            
        </Layout>
    )
}

export default AboutPage