import { Link } from 'react-router-dom';
import { MdArticle } from "react-icons/md";
import { FaHandHoldingMedical,FaCalendarAlt } from "react-icons/fa";
import './CardLinkStyle.css';

const CardLink = () => {
    return (
        <div className='mt-10 flex gap-2'>
            <div className="card1">
                <Link className='flex items-center gap-2 z-10 text-blue-500 font-medium text-sm md:text-xl hover:text-green-500  w-full h-full justify-center'><MdArticle /> Read Articles</Link>
            </div>
            <div className="card1">
                <Link className='flex items-center gap-2 z-10 text-blue-500 font-medium text-sm md:text-xl hover:text-green-500 w-full h-full justify-center'><FaHandHoldingMedical /> Take Advices</Link>
            </div>
            <div className="card1">
                <Link className='flex items-center gap-2 z-10 text-blue-500 font-medium text-sm md:text-xl hover:text-green-500  w-full h-full justify-center'><FaCalendarAlt /> Get Appoitment</Link>
            </div>
        </div>
    );
};

export default CardLink;