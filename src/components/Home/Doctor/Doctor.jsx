import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import doc1 from '../../../assets/images/doctor/dr1.jpg'
import doc2 from '../../../assets/images/doctor/dr2.jpg'
import doc3 from '../../../assets/images/doctor/dr3.jpg'


const Doctor = () => {
    return (
        <div className='fixed md:mr-4 rounded-md w-3/12'>
            <Carousel autoPlay infiniteLoop showThumbs={false}>
                <div style={{width:'100%',height:'400px'}}>
                    <img src={doc1} className='rounded-md' />
                    <p className='text-blue-600 text-lg font-bold'>Doctor 1</p>
                    <div className='text-left'>
                        <p><span className='font-bold'>Specialist: </span>Medicine</p>
                        <p><span className='font-bold'>Email: </span>doc@gmail.com</p>
                        <p><span className='font-bold'>Phone: </span>+88017..</p>
                    </div>
                    <button className='btn btn-sm btn-outline'>Appoitment</button>
                </div>
                <div style={{width:'100%',height:'400px'}}>
                    <img src={doc2} className='rounded-md' />
                    <p className='text-blue-600 text-lg font-bold'>Doctor 1</p>
                    <div className='text-left'>
                        <p><span className='font-bold'>Specialist: </span>Medicine</p>
                        <p><span className='font-bold'>Email: </span>doc@gmail.com</p>
                        <p><span className='font-bold'>Phone: </span>+88017..</p>
                    </div>
                    <button className='btn btn-sm btn-outline'>Appoitment</button>
                </div>
                <div style={{width:'100%',height:'400px'}}>
                    <img src={doc3} className='rounded-md' />
                    <p className='text-blue-600 text-lg font-bold'>Doctor 1</p>
                    <div className='text-left'>
                        <p><span className='font-bold'>Specialist: </span>Medicine</p>
                        <p><span className='font-bold'>Email: </span>doc@gmail.com</p>
                        <p><span className='font-bold'>Phone: </span>+88017..</p>
                    </div>
                    <button className='btn btn-sm btn-outline'>Appoitment</button>
                </div>
            </Carousel>
        </div>
    );
}
export default Doctor;