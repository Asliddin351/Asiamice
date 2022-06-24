
import Slider from 'react-slick'

import {useTranslation} from 'react-i18next'

import Review from '../review'; 
import { useSelector } from 'react-redux'
import ReviewModal from '../reviewModal/ReviewModal';


const CenterMode = () => {

    const {t} = useTranslation()

    const tours = useSelector(state => state.tour.tours)

    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "50px",
      slidesToShow: 3,
      autoplay: true,
      autoplaySpeed: 4000,
      speed: 800,
      pauseOnFocus: true,
      focusOnSelect: true,
      initialSlide: 3,
      slide: '.slider-el',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            pauseOnFocus: true,
          }
        },
        {
          breakpoint: 750,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            pauseOnFocus: true,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            pauseOnFocus: true,
          }
        },
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 3,
            infinite: true,
            pauseOnFocus: true,
            centerPadding: "20px",
          }
        }
      ]
    };

 
    return (
      <div className='slider'>
        <h2 className="slider-title text-center">{t("feedback-title")}</h2>
        {/* <button className='rounded'><i class="fas fa-plus-circle"></i></button> */}
        <ReviewModal/>
        <Slider {...settings}>
            {tours.map((el, index)=>{
              return <Review key={index} item={el.posts}/>
            })}
        </Slider>
       
      </div>
      
    );
  
};

export default CenterMode