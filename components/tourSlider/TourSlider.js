import React from "react";
import Slider from "react-slick";


const TourSlider = ({title}) => {

    const settings = {
        // eslint-disable-next-line react/display-name
        customPaging: function(i) {
            return (
            <a>
                <img src={`/abstract0${i + 1}.jpg`} width={'100%'}/>
            </a>
            );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        rows: 1,

       

    };
    return (
      <div>
        <h2 className='text-center'>{title}</h2>
        <Slider {...settings}>
          <div >
            <img src={"/abstract01.jpg"} width={'100%'} height={'375px'} style={{borderRadius: '10px', marginBottom: "50px"}}/>
          </div>
          <div >
            <img src={"/abstract02.jpg"} width={'100%'} height={'375px'} style={{borderRadius: '10px', marginBottom: "50px"}}/>
          </div>
          <div >
            <img src={"/abstract03.jpg"} width={'100%'} height={'375px'} style={{borderRadius: '10px', marginBottom: "50px"}}/>
          </div>
          <div>
            <img src={"/abstract04.jpg"} width={'100%'} height={'375px'} style={{borderRadius: '10px', marginBottom: "50px"}}/>
          </div>
        </Slider>
      </div>
    );
}

export default TourSlider