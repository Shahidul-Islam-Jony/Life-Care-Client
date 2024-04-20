import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar/Navbar";


const MedicineLayout = () => {
    return (
        <div>
            <div className="relative z-20">
                <Navbar></Navbar>
                <p className="mt-20">This is Medicine Layout</p>
            </div>
            <div className="grid grid-cols-12">
                <div className="col-span-3 bg-blue-300 min-h-screen">
                    <NavLink to='babyCare' className="text-base hover:bg-green-800 hover:text-white rounded-md py-1 px-2 flex items-center gap-1">Baby Care</NavLink>
                </div>
                <div>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default MedicineLayout;