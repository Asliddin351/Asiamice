import React from 'react'

import { useTranslation } from 'react-i18next'


const Form = () => {

    const {t} = useTranslation()

    return (
        <>
            <form className="row g-3 needs-validation">
                <div className="col-md-4 position-relative">
                    <label htmlFor="exampleFormControlInput1" className="form-label">{t("mice-form.email")}</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                    <div className="valid-tooltip">
                    Looks good!
                    </div>
                </div>
                <div className="col-md-4 position-relative">
                    <label htmlFor="formGroupExampleInput" className="form-label">{t("mice-form.name")}</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder={`${t("mice-form.name")}*`} required/>
                    <div className="valid-tooltip">
                    Looks good!
                    </div>
                </div>
                <div className="col-md-4 position-relative">
                    <label htmlFor="formGroupExampleInput" className="form-label">{t("mice-form.contact")}</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder={`${t("mice-form.contact")}*`} required/>
                    <div className="invalid-tooltip">
                        Please choose a unique and valid username.
                    </div>
                </div>
                <div className="col-md-6 position-relative">
                    <label htmlFor="validationTooltip03" className="form-label">{t("mice-form.city")}</label>
                    <input type="text" className="form-control" id="validationTooltip03" placeholder={`${t("mice-form.city")}`} required/>
                    <div className="invalid-tooltip">
                    Please provide a valid city.
                    </div>
                </div>
                <div className="col-md-6 position-relative">
                    <label htmlFor="validationTooltip04" className="form-label">{t("mice-form.company")}</label>
                    <input type="text" className="form-control" id="validationTooltip03" placeholder={`${t("mice-form.company")}`} required/>
                    <div className="invalid-tooltip">
                        Please select a valid state.
                    </div>
                </div>
                <div className='radios-content'>
                    <div>
                        <label htmlFor="radioNoLabel1" className='mx-3'>{t("mice.meeting.title")}</label>
                        <input className="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel1" value="" aria-label="..."/>
                    </div>

                    <div>
                        <label htmlFor="radioNoLabel2" className='mx-3'>{t("mice.incentives.title")}</label>
                        <input className="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel2" value="" aria-label="..."/>
                    </div>

                    <div>
                        <label htmlFor="radioNoLabel3" className='mx-3'>{t("mice.conferencing.title")}</label>
                        <input className="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel3" value="" aria-label="..."/>
                    </div>

                    <div>
                        <label htmlFor="radioNoLabel4" className='mx-3'>{t("mice.exhibitions.title")}</label>
                        <input className="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel4" value="" aria-label="..."/>
                    </div>
                </div>


                <div className="col-12">
                    <button className="mice-form__btn" type="submit">{t("mice-form.submit")}</button>
                </div>
            </form>
        </>
    )
}


export default Form