import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import doc1 from '../../../assets/images/doctor/dr1.jpg'
import doc2 from '../../../assets/images/doctor/dr2.jpg'
import doc3 from '../../../assets/images/doctor/dr3.jpg'


const Doctor = () => {
    return (
        <div className='fixed md:mr-4 rounded-md'>
            <Carousel autoPlay infiniteLoop showThumbs={false}>
                <div>
                    <img src={doc1} className='rounded-md'/>

                </div>
                <div>
                    <img src={doc2} className='rounded-md'/>

                </div>
                <div>
                    <img src={doc3} className='rounded-md'/>
                </div>
            </Carousel>
        </div>
    );
}
export default Doctor;