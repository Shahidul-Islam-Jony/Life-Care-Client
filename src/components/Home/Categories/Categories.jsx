
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Navigation } from 'swiper/modules';

import img1 from '../../../assets/images/categories/dental.png'
import img2 from '../../../assets/images/categories/diabetic.png'
import img3 from '../../../assets/images/categories/health.png'
import img4 from '../../../assets/images/categories/dental.png'
import img5 from '../../../assets/images/categories/OTC-Medicine.png'
import img6 from '../../../assets/images/categories/Prescription medicine.png'
import { Link } from 'react-router-dom';

const Categories = () => {

    return (
        <div className='mt-10'>
            <h2 className='text-3xl font-bold font-serif my-10 text-center text-blue-600 textShadow border-b-4 border-double border-blue-500 w-fit mx-auto'>Categories</h2>
            <Swiper
                slidesPerView={5}
                spaceBetween={30}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper md:w-[1000px] h-70"
            >
                <SwiperSlide><Link className=''><img src={img1}></img></Link></SwiperSlide>
                <SwiperSlide><Link className=''><img src={img2}></img></Link></SwiperSlide>
                <SwiperSlide><Link className=''><img src={img3}></img></Link></SwiperSlide>
                <SwiperSlide><Link className=''><img src={img4}></img></Link></SwiperSlide>
                <SwiperSlide><Link className=''><img src={img5}></img></Link></SwiperSlide>
                <SwiperSlide><Link className=''><img src={img6}></img></Link></SwiperSlide>
            </Swiper>

        </div>
    );
};

export default Categories;