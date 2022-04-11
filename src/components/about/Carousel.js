import React from 'react'
import "./Carousel.css"
import img2 from "../../images/unnamed (2).png"
import img3 from "../../images/unnamed (3).png"
import img4 from "../../images/unnamed (24).png"
import img7 from "../../images/unnamed (28).png"
import img6 from "../../images/unnamed (26).png"
import img8 from "../../images/unnamed (27).png"
import img9 from "../../images/unnamed (29).png"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";

import { Pagination,Navigation,Autoplay,EffectCards } from "swiper";

const Carousel = () => {
  return (
    <div className='carousel'>
        <Swiper
          autoplay={{
              delay:300,
              disableOnInteraction:false
          }}
          
         
        effect={"cards"}
        navigation={true}
        modules={[EffectCards,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><img src={img2} alt=""/></SwiperSlide>
        <SwiperSlide><img src={img3} alt=""/></SwiperSlide>
        <SwiperSlide><img src={img7} alt=""/></SwiperSlide>
        <SwiperSlide><img src={img4} alt=""/></SwiperSlide>
        <SwiperSlide><img src={img6} alt=""/></SwiperSlide>
        <SwiperSlide><img src={img9} alt=""/></SwiperSlide>
        <SwiperSlide><img src={img8} alt=""/></SwiperSlide>
      </Swiper>




    </div>
  )
}

export default Carousel