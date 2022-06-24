
import React, {useState} from 'react'
import Layout from '../../hoc/Layout';

import AccordionList from '../../components/accordion/AccordionList';
import translationEn from '../../locales/en/translationEn.json'

import {useTranslation} from 'react-i18next'
const Faq = () => {

    const {t} = useTranslation()

    const [faq, setFaq] = useState(translationEn.faq.sections)


 
 

    return (
        <Layout title={'FAQ'}>

            {faq.map((el, index)=> {
                return <div key={index} className='faqs container'>
                    <h2 className='faq-title'>{t(`${el.title}`)}</h2>
                    
                    <AccordionList items={el} />
                </div>
            })}

        </Layout>
    )
}

export default Faq;