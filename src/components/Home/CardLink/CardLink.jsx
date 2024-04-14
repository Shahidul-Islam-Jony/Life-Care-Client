import { Link } from 'react-router-dom';
import { MdArticle } from "react-icons/md";
import { FaHandHoldingMedical,FaCalendarAlt } from "react-icons/fa";
import './CardLinkStyle.css';

const CardLink = () => {
    return (
        <div className='mt-10 flex gap-2'>
            <div className="card">
                <Link className='flex items-center gap-2 z-10 text-blue-500 font-medium text-sm md:text-xl hover:text-green-500'><MdArticle /> Read Articles</Link>
            </div>
            <div className="card">
                <Link className='flex items-center gap-2 z-10 text-blue-500 font-medium text-sm md:text-xl hover:text-green-500'><FaHandHoldingMedical /> Take Advices</Link>
            </div>
            <div className="card">
                <Link className='flex items-center gap-2 z-10 text-blue-500 font-medium text-sm md:text-xl hover:text-green-500'><FaCalendarAlt /> Get Appoitment</Link>
            </div>
        </div>
    );
};

export default CardLink;