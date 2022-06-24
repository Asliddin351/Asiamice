import React from 'react'
import Layout from '../../hoc/Layout'

import {useTranslation} from "react-i18next"


const Memo = () => {

    const {t} = useTranslation()

    return (
        <Layout title={t("links.memo")}>
            <div className="container memo">
                <h1 className={'mt-5'}>{t("memo.title")}</h1>
                <br/>
                <br/>
                <h5>{t("memo.covid19")}</h5>

                <p>{t("memo.top-text.part1")}
                        <br/>
                        <br/>
                        {t("memo.top-text.part2")}
                        <br/>
                        <br/>

                        <div className='memo-item d-flex gap-3'>
                            <img src="/uzbekistan.jpg"  alt="uz" />
                                <div>
                                    <b>{t("memo.generalinformation.title")}</b>
                                    {t("memo.generalinformation.text")}
                                </div>
                        </div>

                        <br/>
                        <br/>

                        <div className='memo-item d-flex gap-3 flex-row-reverse'>
                            <img src="/squire.jpg" alt='squire'/>
                            <div>
                                <b>{t("memo.area.title")}</b> 
                                {t("memo.area.text")}
                            </div>
                        </div>
                       
                        <br/>
                        <br/>

                        <div className='memo-item d-flex gap-3'>
                            <img src="/naselenie.jpg"  alt="naselenie"/>
                            <div>
                                <b>{t("memo.population.title")}</b> 
                                {t("memo.population.text")}
                            </div>
                        </div>
                        
                        <br/>
                        <br/>
                        
                        <div className="memo-item d-flex flex-row-reverse">
                            <img src="/polstruct.jpg"  alt="polstruct" />
                            <div>
                                <b>{t("memo.politicalstructure.title")}</b> 
                                {t("memo.politicalstructure.text")}
                            </div>
                        </div>
                            
                        <br/>
                        <br/>

                        <div className="memo-item d-flex gap-3">
                            <img  src="/tashkent.jpg" alt='tashkent' />
                            <div>
                                <b>{t("memo.capital.title")}</b>
                                {t("memo.capital.text")}
                            </div>
                        </div>

                        <br/>
                        <br/>
                        
                        <div className="memo-item d-flex flex-row-reverse gap-3">
                            <img  src="/valuta.jpg" alt='valuta'/>
                            <div>
                                <b>{t("memo.currencyunit.title")}</b> 
                                {t("memo.currencyunit.text")}
                            </div>
                        </div>

                        <br/>
                        <br/>

                        <div className="memo-item d-flex gap-3">
                            <img  src="/climat.jpg" alt='climat'/>
                            <div>
                                <b>{t("memo.climateinuzbekistan.title")}</b>
                                {t("memo.climateinuzbekistan.text")}
                            </div>
                        </div>

                        <br/>
                        <br/>

                        <div className='memo-item d-flex flex-row-reverse gap-3'>
                            <img  src="/dress.jpg" alt='dress' />
                            <div>
                                <b>{t("memo.dress.title")}</b>
                                {t("memo.dress.text")}
                            </div>
                        </div>

                        <br/>
                        <br/>
                        
                        <div className='memo-item d-flex gap-3'>
                            <img  src="/kitchen.jpg" alt='kitchen' />  
                            <div>
                                <b>{t("memo.kitchen.title")}</b>
                                {t("memo.kitchen.text")}
                            </div> 
                        </div>

                        <br/>
                        <br/>

                        <div className="memo-item d-flex flex-row-reverse gap-3">
                            <img  src="/visadocument.jpg" alt='visadocument' />
                            <div>
                                <b>{t("memo.visadocument.title")}</b>
                                {t("memo.visadocument.text")}
                            </div>
                        </div>

                        <br/>
                        <br/>

                        <div className="memo-item d-flex gap-3">
                            <img  src="/tamojni.jpg" alt='tamojni' />
                            <div>
                                <b>{t("memo.customs.title")}</b>
                                {t("memo.customs.text")}
                            </div>
                        </div>

                        <br/>
                        <br/>

                        <div className="memo-item d-flex flex-row-reverse gap-3">
                            <img  src="/valuta.jpg" alt='valuta' />
                            <div>
                                <b>{t("memo.currencyofuzbekistan.title")}</b>
                                {t("memo.currencyofuzbekistan.text")}
                            </div>
                        </div>
                        <br/>

                        <br/>
                        <br/>

                        <div className='memo-item d-flex gap-3'>
                            <img  src="/photography.jpg" alt='photography' />
                            <div>
                                <b>{t("memo.photography.title")}</b>
                                {t("memo.photography.text")}
                            </div>
                        </div>

                        <br/>
                        <br/>

                        <div className="memo-item d-flex flex-row-reverse gap-3">
                            <img  src="/chaevie.jpg" alt='chaevie'/>
                            <div>
                                <b>{t("memo.tipping.title")}</b>
                                {t("memo.tipping.text")}
                            </div>
                        </div>

                        <br/>
                        <br/>

                        <div className="memo-item d-flex gap-3">
                            <img  src="/suvenir.jpg" alt='suvenir'/>
                            <div>
                                <b>{t("memo.souvenirs.title")}</b>
                                {t("memo.souvenirs.text")}
                            </div>
                        </div>

                        <br/>
                        <br/>

                        <div className="memo-item d-flex flex-row-reverse gap-3">
                            <img  src="/nationalholiday.jpg" alt='nationalholiday' />
                            <div>
                                <b>{t("memo.nationalholidays.title")}</b>
                                {t("memo.nationalholidays.text")}
                                <br />
                                <b>{t("memo.relHoliday.title")}</b>
                            </div>
                        </div>

                        <br />
                        <br />

                        <div className='memo-item d-flex gap-3'>
                            <img  src="/gerbFlag.jpg" alt='gerbFlag'/>
                            <div>
                                <b>{t("memo.statesymbols.title")}</b>
                                {t("memo.statesymbols.text")}
                            </div>
                        </div>

                        <br/>
                        <br/>

                        <div className="memo-item d-flex flex-row-reverse gap-3">
                            <img  src="/operators.jpg" alt='operators' />
                            <div>
                                <b>{t("memo.mobileoperators.title")}</b>
                                {t("memo.mobileoperators.text.ucell")}
                                <br />
                                <br />
                                {t("memo.mobileoperators.text.beeline")}
                                <br />
                                <br />
                                {t("memo.mobileoperators.text.uzmobile")}
                                <br />
                                <br />
                                {t("memo.mobileoperators.text.perfectum")}
                                <br />
                                <br />
                                {t("memo.embassies.text1")}
                                <br />
                                <br />
                                {t("memo.embassies.text2")}
                            </div>
                        </div>
             
                        
                    </p>
            </div>
            
        </Layout>
    )
}

export default Memo