import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade'
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectFade, Autoplay } from 'swiper/modules';
import img1 from '../assets/carousel/img1.jpg'
import img2 from '../assets/carousel/img2.jpg'
import img3 from '../assets/carousel/img3.jpg'
import img4 from '../assets/carousel/img4.jpg'
import img5 from '../assets/carousel/img5.jpg'
import img6 from '../assets/carousel/img6.jpg'
import img7 from '../assets/carousel/img7.jpg'
import img8 from '../assets/carousel/img8.jpg'
import img9 from '../assets/carousel/img9.jpg'

const Carousel = () => {
  return (
    <div>
         <Swiper
        className=' opacity-30'
        effect={'fade'}
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        speed={900}
        modules={[
          Autoplay,
          EffectFade]}
      >
        <SwiperSlide><img className=' h-screen object-cover md:w-screen w-auto m-auto' src={img1} alt="" /></SwiperSlide>
        <SwiperSlide><img className=' h-screen object-cover md:w-screen w-auto m-auto' src={img2} alt="" /></SwiperSlide>
        <SwiperSlide><img className=' h-screen object-cover md:w-screen w-auto m-auto' src={img3} alt="" /></SwiperSlide>
        <SwiperSlide><img className=' h-screen object-cover md:w-screen w-auto m-auto' src={img4} alt="" /></SwiperSlide>
        <SwiperSlide><img className=' h-screen object-cover md:w-screen w-auto m-auto' src={img5} alt="" /></SwiperSlide>
        <SwiperSlide><img className=' h-screen object-cover md:w-screen w-auto m-auto' src={img6} alt="" /></SwiperSlide>
        <SwiperSlide><img className=' h-screen object-cover md:w-screen w-auto m-auto' src={img7} alt="" /></SwiperSlide>
        <SwiperSlide><img className=' h-screen object-cover md:w-screen w-auto m-auto' src={img8} alt="" /></SwiperSlide>
        <SwiperSlide><img className=' h-screen object-cover md:w-screen w-auto m-auto' src={img9} alt="" /></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Carousel