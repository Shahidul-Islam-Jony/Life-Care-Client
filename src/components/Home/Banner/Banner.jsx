import docAvatar from '../../../assets/images/docAvatar1.jpg'
import docCheck from '../../../assets/images/docCheck.jpg'
import healthCheckup from '../../../assets/images/healthCheckup.jpg'


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
        className="mySwiper"
      >
        <SwiperSlide><img src={docAvatar} className='w-40 h-40'/></SwiperSlide>
        <SwiperSlide><img src={docCheck} className='w-40 h-40'/></SwiperSlide>
        <SwiperSlide><img src={healthCheckup} className='w-40 h-40'/></SwiperSlide>
      </Swiper>
    </>
  );
}
export default Banner;