import React from 'react'

import Layout from '../../hoc/Layout'
import Form from '../../components/form'

import { useTranslation } from 'react-i18next'


const Mice = () => {

    const {t} = useTranslation()

    return (
        <Layout title={'MICE'}>

            <div className="container my-5">

                <div className='business-travel-content-text'>
                    <h1 className='business-travel-content-text__title'>{t("mice-page.business.title")}</h1>
                    <p>
                        {t("mice-page.business.text.part1")}
                        <br/>
                        <br/>
                        {t("mice-page.business.text.part2")}
                        <br/>
                        <br/>
                        {t("mice-page.business.text.part3")}
                    </p>
                </div>

                <div className='mice-content-text'>
                    <h1 className='mice-content-text__title'>{t("mice-page.title")}</h1>
                    <p>
                        {t("mice-page.text.part1")}
                        <br/>
                        <br/>
                        {t("mice-page.text.part2")}
                        <br/>
                        <br/>
                        {t("mice-page.text.part3")}
                        <br/>
                        <br/>
                        {t("mice-page.text.part4")}
                        <br/>
                        <br/>
                        {t("mice-page.text.part5")}
                        <br/>
                        <br/>

                    </p>
                </div>
            </div>

            
            
            <div className="container">
                <div className='mice-form'>
                    <h1 className='text-center mice-form__title'>{t("mice-form.title")}</h1>
                    <Form/>
                </div>
            </div>
            
        </Layout>
    )
}

export default Mice;