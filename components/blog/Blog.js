import {useState} from 'react'
import {useTranslation} from 'react-i18next'
import Link from 'next/link'
import TourCard from '../tourCard/TourCard'

import { useSelector } from 'react-redux'

const Blog = () => {
    const [isActive, setIsActive] = useState(false)
    const {t} = useTranslation()
    const tours = useSelector(state => state.tour.tours)

    const handleActive = () => {
      setIsActive(!isActive)
    }


 
    return (
        <section className="blog">
            <h2 className="blog-title text-center">{t("blog.title.t1")}</h2>
            <div className="container">
                <div id="carouselExampleControlsNoTouching" className="carousel slide"  touch='true' data-bs-touch="true" data-bs-interval="3000">
                    <div className="carousel-inner">

						
                      <div className={`carousel-item  ${!isActive ? "active" : ''}`}>
                          <div className="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-lg-1 row-cols-xl-2">

                          </div>
                      </div>

                      <div className={`carousel-item ${isActive ? "active" : ''}`}>
                          <div className="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-lg-1 row-cols-xl-2">
                              <div className="col-md-12 col-lg-6">
                                {tours.results.map(el=>{
                                  if(el.id == 1) {
                                    return <TourCard key={el.id} item={el}/>
                                  }else{
                                    return null
                                  }
                                })}
                              </div>
                              <div className='col-lg-6'>
                                {tours.map(el=>{
                                    if(el.id == 3) {
                                      return <TourCard key={el.id} item={el}/>
                                    }else{
                                      return null
                                    }
                                  })}
                              </div>
                          </div>
                      </div>
                                    
                                     
                    
                    
                    </div>


                    <button className="carousel-control-prev" type="button"   onClick={handleActive} data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                        <span className="corousel-icon"><i className="fas fa-arrow-left"></i></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" onClick={handleActive}  data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                        <span className="corousel-icon"><i className="fas fa-arrow-right"></i></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                  
                  
                  
                  
                  
                  <div className="btn-conteiner">
                    <Link href="/tours"><button className="blog-btn">{t("blog.btn-text")}</button></Link>
                  </div>
                  
            </div>
        </section>
    )
}

export default Blog