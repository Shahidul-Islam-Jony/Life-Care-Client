
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import './categoriesStyle.css';

const Categories = () => {

    const categories = [
        {
            id: 1,
            img: '/categories/dental.png',
            title: 'Dental Care'
        },
        {
            id: 2,
            img: '/categories/health.png',
            title: 'Personal Care'
        },
        {
            id: 3,
            img: '/categories/diabetic.png',
            title: 'Diabetic Care'
        },
        {
            id: 4,
            img: '/categories/OTC-Medicine.png',
            title: 'OTC Medicine'
        },
        {
            id: 5,
            img: '/categories/baby.jpg',
            title: 'Baby Care'
        },
        {
            id: 6,
            img: '/categories/women.png',
            title: 'For Women'
        },
        {
            id: 7,
            img: '/categories/herbal.png',
            title: 'Herbal Medicine'
        },
        {
            id: 8,
            img: '/categories/Phermacy.jpg',
            title: 'Phermacy Medicine'
        },
        {
            id: 9,
            img: '/categories/Prescription medicine.png',
            title: 'Prescription Medicine'
        }
    ]

    return (
        <div className='mt-10'>
            <h2 className='text-3xl font-bold font-serif my-10 text-center text-blue-600 textShadow border-b-4 border-double border-blue-500 w-fit mx-auto'>Categories</h2>
            <Swiper
                slidesPerView={5}
                spaceBetween={30}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
                breakpoints={{
                    //    Mobile view
                    375: {
                        slidesPerView: 2
                    },
                    // Tablet view
                    768: {
                        slidesPerView: 3
                    },
                    // Desktop view
                    1024: {
                        slidesPerView: 4
                    }
                }}
            >
                {
                    categories.map(category =>
                        <SwiperSlide className='card2 border-2 border-blue-500 p-4 rounded-md hover:border-green-600' style={{width:'300px',height:'150px'}} key={category.id}><Link><div className='card-info'>
                            <img src={category?.img} className='w-24 h-20 mx-auto hover:opacity-70' alt={category?.title}></img>
                            <p className='title'>{category?.title}</p>
                        </div></Link></SwiperSlide>
                    )
                }
            </Swiper>

        </div>
    );
};

export default Categories;