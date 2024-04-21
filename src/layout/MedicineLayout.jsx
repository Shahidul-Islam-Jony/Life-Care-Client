import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar/Navbar";


const MedicineLayout = () => {
    return (
        <div className="my-24 w-11/12 mx-auto">
            <div className="relative z-20">
                <Navbar></Navbar>
            </div>
            <div className="grid grid-cols-12">
                <div className="col-span-3 border-2 border-blue-600 p-4 shadow rounded-lg">
                    <NavLink to='babyCare' className="text-base hover:bg-green-800 hover:text-white rounded-md py-1 px-2 flex items-center gap-1">Baby Care</NavLink>
                    <NavLink to='women' className="text-base hover:bg-green-800 hover:text-white rounded-md py-1 px-2 flex items-center gap-1">For Women</NavLink>
                    <NavLink to='diabetic' className="text-base hover:bg-green-800 hover:text-white rounded-md py-1 px-2 flex items-center gap-1">Diabetic Care</NavLink>
                    <NavLink to='otc' className="text-base hover:bg-green-800 hover:text-white rounded-md py-1 px-2 flex items-center gap-1">OTC Medicine</NavLink>
                    <NavLink to='dental' className="text-base hover:bg-green-800 hover:text-white rounded-md py-1 px-2 flex items-center gap-1">Dental Care</NavLink>
                    <NavLink to='personal' className="text-base hover:bg-green-800 hover:text-white rounded-md py-1 px-2 flex items-center gap-1">Personal Care</NavLink>
                    <NavLink to='herbal' className="text-base hover:bg-green-800 hover:text-white rounded-md py-1 px-2 flex items-center gap-1">Herbal Medicine</NavLink>
                    <NavLink to='phermacy' className="text-base hover:bg-green-800 hover:text-white rounded-md py-1 px-2 flex items-center gap-1">Phermacy Medicine</NavLink>
                    <NavLink to='prescription' className="text-base hover:bg-green-800 hover:text-white rounded-md py-1 px-2 flex items-center gap-1">Prescription Medicine</NavLink>
                </div>
                <div className="md:ml-8 col-span-9">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default MedicineLayout;