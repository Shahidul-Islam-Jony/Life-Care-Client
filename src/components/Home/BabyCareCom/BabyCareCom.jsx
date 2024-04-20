import { Link } from 'react-router-dom';
import detol from '../../../assets/images/babyCare/Savlon-Baby-Wips.webp'

const BabyCareCom = () => {

    return (
        <div data-aos="fade-up" data-aos-duration="2000" className=''>
            <h2 className='text-3xl font-bold font-serif text-center text-blue-600 textShadow border-b-4 border-double border-blue-500 my-10 w-fit mx-auto'>Baby Care</h2>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2'>
                <div className="p-2 rounded-md border-2 border-blue-500 shadow-xl">
                    <figure><img src={detol} className='w-full' alt="dtol" /></figure>
                    <div className="flex justify-between">
                        <h2 className="text-lg font-bold">Savlon</h2>
                        <p className='font-medium'>Quantity: 10 pcs</p>
                    </div>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="flex justify-between">
                        <p className='font-medium'>Price: 10$</p>
                        <button className="btn btn-sm btn-outline">Buy Now</button>
                    </div>
                </div>
                <div className="p-2 rounded-md border-2 border-blue-500 shadow-xl">
                    <figure><img src={detol} className='w-full' alt="dtol" /></figure>
                    <div className="flex justify-between">
                        <h2 className="text-lg font-bold">Savlon</h2>
                        <p className='font-medium'>Quantity: 10 pcs</p>
                    </div>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="flex justify-between">
                        <p className='font-medium'>Price: 10$</p>
                        <button className="btn btn-sm btn-outline">Buy Now</button>
                    </div>
                </div>
                <div className="p-2 rounded-md border-2 border-blue-500 shadow-xl">
                    <figure><img src={detol} className='w-full' alt="dtol" /></figure>
                    <div className="flex justify-between">
                        <h2 className="text-lg font-bold">Savlon</h2>
                        <p className='font-medium'>Quantity: 10 pcs</p>
                    </div>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="flex justify-between">
                        <p className='font-medium'>Price: 10$</p>
                        <button className="btn btn-sm btn-outline">Buy Now</button>
                    </div>
                </div>
                <div className="p-2 rounded-md border-2 border-blue-500 shadow-xl">
                    <figure><img src={detol} className='w-full' alt="dtol" /></figure>
                    <div className="flex justify-between">
                        <h2 className="text-lg font-bold">Savlon</h2>
                        <p className='font-medium'>Quantity: 10 pcs</p>
                    </div>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="flex justify-between">
                        <p className='font-medium'>Price: 10$</p>
                        <button className="btn btn-sm btn-outline">Buy Now</button>
                    </div>
                </div>
            </div>
            <div className='flex justify-center mt-10'>
                <Link to='allMedicine/babyCare' className='btn btn-sm btn-outline'>See All</Link>
            </div>
        </div>
    );
};

export default BabyCareCom;