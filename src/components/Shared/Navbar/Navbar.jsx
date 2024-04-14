import { Link, NavLink } from "react-router-dom";
import logo from '../../../assets/images/LifeCare.jpg'
import { IoMdCloseCircleOutline, IoMdLogIn, IoIosContact } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import './active.css'
import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <div className="navbar sticky top-0 z-50 md:px-6 text-blue-600 font-bold bg-white shadow-2xl border-2 border-b-blue-700 rounded-b-xl">
                {/* small devices */}
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost mr-4 lg:hidden">
                            {
                                isOpen ? <IoMdCloseCircleOutline onClick={() => setIsOpen(false)} className="text-xl" /> : <svg onClick={() => setIsOpen(true)} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            }
                        </div>
                        {
                            isOpen ? <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[50] p-2 shadow bg-base-100 rounded-box w-52">
                                <NavLink to='/' className="text-base hover:bg-green-800 hover:text-white rounded-md p-2 flex items-center gap-1"><IoHomeOutline /> Home</NavLink>
                                <NavLink to='/contact' className="text-base hover:bg-green-800 hover:text-white rounded-md p-2 flex items-center gap-1"><IoIosContact /> Contact</NavLink>
                            </ul> : ''
                        }
                    </div>
                    <Link to='/' className="flex gap-1 items-center justify-center">
                        <img src={logo} className="w-16 h-14" alt="" />
                        <h2 className="text-2xl">LifeCare</h2>
                    </Link>
                </div>
                {/* large devices */}
                <div className="navbar-center top-4 hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-2">
                        <NavLink to='/' className="text-base hover:bg-green-800 hover:text-white rounded-md py-1 px-2 flex items-center gap-1"><IoHomeOutline /> Home</NavLink>
                        <NavLink to='/contact' className="text-base hover:bg-green-800 hover:text-white rounded-md py-1 px-2 flex items-center gap-1"><IoIosContact /> Contact</NavLink>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to='/login' className="btn btn-sm btn-outline text-base font-bold text-blue-600 hover:bg-green-800"><IoMdLogIn /> Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;