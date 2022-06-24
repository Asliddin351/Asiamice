import React from 'react'
import styles from './tour-tabs.module.css'
import Post from '../post/Post'
import TourSlider from '../tourSlider/TourSlider'

const TourTabs = ({findeCard}) => {


  return (
      <div className='container'>
        <div className={styles.tour_tabs}>
                <h2 className='my-3'>{findeCard.title}{" "}{findeCard.adres}</h2>
                <ul className="nav nav-pills  tabs-control d-flex" id="pills-tab" role="tablist">
                    <li className="nav-item flex-fill" role="presentation">
                        <button className="nav-link w-100 rounded-top active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Services</button>
                    </li>
                    <li className="nav-item flex-fill" role="presentation">
                        <button className="nav-link  w-100" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">About Hotel</button>
                    </li>
                    <li className="nav-item flex-fill" role="presentation">
                        <button className="nav-link w-100" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Map</button>
                    </li>
                    <li className="nav-item flex-fill" role="presentation">
                        <button className="nav-link w-100" id="pills-exhibitions-tab" data-bs-toggle="pill" data-bs-target="#pills-exhibitions" type="button" role="tab" aria-controls="pills-exhibitions" aria-selected="false">Feedbacks</button>
                    </li>
                </ul>
            <div className={`tab-content ${styles.tab__tour}`} id="pills-tabContent">

                <div className="tab-pane  fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                        <div className='container'>
                                <div className='row'>
                                    {findeCard?.options.map((op, index)=>{
                                        return <div key={index} className='d-flex col align-items-center '>
                                            <img  className={`mx-3 ${styles.icon}`} src={op.icon} alt={'something'} width='52px'/>
                                            <div className={styles.icon_content}>
                                                <p className='p-0 m-0'><b>{op.title}</b></p>
                                                <p className='p-0 m-0'>{op.text}</p>
                                            </div>
                                        </div>
                                    })}
                                </div>
                        </div>
                </div>

                <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                <div className={styles.about_hotel}>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-lg-6 col-md-12'>
                                    <div className={styles.about_hotel__text}>
                                        <h2>О отеле</h2>
                                        <h6> <i className="fas fa-map-marker-alt" style={{color: "#2387F5"}}></i> {findeCard.title}</h6>
                                        <br/>
                                        <p>В целом, конечно, разбавленное изрядной долей эмпатии, рациональное мышление создаёт предпосылки для благоприятных перспектив. С учётом сложившейся международной обстановки, сплочённость команды профессионалов выявляет срочную потребность кластеризации усилий.</p>
                                        <br/>
                                        <p>Учитывая ключевые сценарии поведения, постоянное информационно-пропагандистское обеспечение нашей деятельности требует анализа системы массового участия! А также некоторые особенности внутренней политики, вне зависимости от их уровня, должны быть подвергнуты целой серии независимых исследований.</p>
                                        <br/>
                                        <p>Ясность нашей позиции очевидна: начало повседневной работы по формированию позиции способствует повышению качества соответствующих условий активизации. В целом, конечно, высокотехнологичная концепция общественного уклада</p>
                                    </div>
                                </div>
                                <div className='col-lg-6 col-md-12'>
                                    <TourSlider title={findeCard.title} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    <div className="tab-pane fade w-100" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 p-0 m-0">
                                <div className="elementor-custom-embed">
                                    <iframe width={'100%'} height={'350px'} frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?q=2470%20Windy%20Hill%20Rd%20SE%2C%20Smyrna%2C%20GA%2030080%2C%20USA&amp;t=m&amp;z=10&amp;output=embed&amp;iwloc=near" aria-label="2470 Windy Hill Rd SE, Smyrna, GA 30080, USA"></iframe>
                                </div>
                            </div>
                        </div>

                    </div>            
                    </div>

                    <div className="tab-pane fade" id="pills-exhibitions" role="tabpanel" aria-labelledby="pills-exhibitions-tab">
                        <div className={styles.testimonials}>
                            <div className='container'>
                                <div className='row row-cols-1 row-cols-md-1 row-cols-lg-1 gy-4'>
                                        {findeCard.posts.map((el, index)=>{
                                            return <div key={index} className="col">
                                                <Post image={el.image} name={el.name} post={el.post}/>
                                            </div>
                                        })}
                                </div>
                                </div>
                            </div>
                        </div>            
                    </div>
            </div>
      </div>
   
  ) 
}

export default TourTabs