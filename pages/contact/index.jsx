
import Layout from "../../hoc/Layout"
// import ContactForm from "../../components/contact-form/ContactForm"
import {useTranslation} from "react-i18next"
import Form from "../../components/form"


const ContactPage = () => {

    const {t} = useTranslation()

    return (
        <Layout title={t("links.contacts")}>
                <div className="locations">
                    <div className="container">
                        <h4 className='location__title'>{t("contacts.title")}</h4>
                        <div className="row row-cols-1 row-cols-md-1 row-cols-lg-2 align-items-center">
                            <div className="col">
                                <div className='location-box'>
                                    <h5>{t("contacts.registrate")}</h5>
                                    <ul className='location-menu'>
                                        <li className='item'>
                                            <span><i className="fas fa-map-marker-alt"></i></span>
                                            <p>{t("contacts.adres.part1")} <br/> {t("contacts.adres.part2")}</p>
                                        </li>
                                        <li className='item'>
                                            <span><i className="fas fa-envelope"></i></span>
                                            <a href="mailto:asiamiceuz@gmail.com"  title="asiamiceuz@gmail.com">asiamiceuz@gmail.com</a>
                                        </li>
                                        <li className='item'>
                                            <span><i className="fas fa-phone-alt"></i></span> 
                                            <a href='tel:+998338375577'>+998 33 837-55-77</a>
                                        </li>    
                                    </ul>
                                </div>
                            </div>
                            <div className="col">
                                <div className="elementor-custom-embed">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1117.997571998195!2d66.9225497079379!3d39.64625523066049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4d19312a689ce9%3A0x45f0bafb5b149754!2sIT%20PARK%20SAMARKAND!5e0!3m2!1sru!2s!4v1628605843306!5m2!1sru!2s" width="100%" height="350"  loading="lazy"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="container">
                    <h2 className='contact-form__title mb-3'>{t("contacts.contact-form.title")}</h2>
                    <p className='contact-form__description mb-5'>{t("contacts.contact-form.description")}</p>
                    <Form/>
                </div>
        </Layout>
    )
}

export default ContactPage