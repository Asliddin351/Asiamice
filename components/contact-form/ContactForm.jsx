import React from 'react'
import {useTranslation} from "react-i18next"

const ContactForm = () => {

    const {t} = useTranslation()

    return (
        <>
            <form className="row g-3">
                <div className="col">
                    <input type="email" placeholder={`${t("contacts.contact-form.email")}*`} className="form-control" id="inputEmail4"/>
                </div>
                <div className="col">
                    <input type="text" placeholder={`${t("contacts.contact-form.name")}*`} className="form-control" id="inputName4"/>
                </div>
                <div className="col">
                    <input type="text" placeholder={`${t("contacts.contact-form.contact")}*`} className="form-control" id="inputContact" />
                </div>

                <div className="col-12">
                    <input type="text" placeholder={`${t("contacts.contact-form.subject")}*`} className="form-control" id="inputSubject"/>
                </div>

                <div className="col-12 form-floating">
                    <textarea className="form-control" placeholder="comments" id="floatingTextarea2"></textarea>
                    <label htmlFor="floatingTextarea2" className='mx-2'>{`${t("contacts.contact-form.comment")}*`}</label>
                </div>

                <div className='contact-form__btn'>
                    <button className="mice-form__btn" type="submit">{`${t("contacts.contact-form.submit")}*`}</button>
                </div>
                
            </form> 
        </>
    )
}

export default ContactForm