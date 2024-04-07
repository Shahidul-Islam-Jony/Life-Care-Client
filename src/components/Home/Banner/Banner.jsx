import slide1 from '../../../assets/images/slide1.png';
import slide2 from '../../../assets/images/slide2.png';
import slide3 from '../../../assets/images/slide3.png';
import slide4 from '../../../assets/images/slide 4.png';


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';


// import required modules
import { Autoplay } from 'swiper/modules';

const Banner=()=> {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3600,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper rounded-lg"
      >
        <SwiperSlide><img src={slide1} className='w-full h-full rounded-lg'/></SwiperSlide>
        <SwiperSlide><img src={slide2} className='w-full h-full rounded-lg'/></SwiperSlide>
        <SwiperSlide><img src={slide3} className='w-full h-full rounded-lg'/></SwiperSlide>
        <SwiperSlide><img src={slide4} className='w-full h-full rounded-lg'/></SwiperSlide>
      </Swiper>
    </>
  );
}
export default Banner;