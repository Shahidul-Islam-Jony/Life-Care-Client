import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../layout/MainLayout";
import Login from "../pages/Login/Login";
import BabyCare from "../pages/BabyCare/BabyCare";
import MedicineLayout from "../layout/MedicineLayout";
import Contact from "../pages/Contact/Contact";
import ForWomen from "../pages/ForWomen/ForWomen";
import DiabeticCare from "../pages/DiabeticCare/DiabeticCare";
import OTC_Medicine from "../pages/OTC_Medicine/OTC_Medicine";
import DentalCare from "../pages/DentalCare/DentalCare";
import PersonalCare from "../pages/PersonalCare/PersonalCare";
import HerbalCare from "../pages/HerbalCare/HerbalCare";
import PhermacyMedi from "../pages/PhermacyMedi/PhermacyMedi";
import PrescriptionMedi from "../pages/PrescriptionMedi/PrescriptionMedi";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'contact',
                element: <Contact></Contact>
            },
            {
                path: 'allMedicine',
                element: <MedicineLayout></MedicineLayout>,
                children: [
                    {
                        path: 'babyCare',
                        element: <BabyCare></BabyCare>
                    },
                    {
                        path:'women',
                        element:<ForWomen></ForWomen>
                    },
                    {
                        path:'diabetic',
                        element:<DiabeticCare></DiabeticCare>
                    },
                    {
                        path:'otc',
                        element:<OTC_Medicine></OTC_Medicine>
                    },
                    {
                        path:'dental',
                        element:<DentalCare></DentalCare>
                    },
                    {
                        path:'personal',
                        element:<PersonalCare></PersonalCare>
                    },
                    {
                        path:'herbal',
                        element:<HerbalCare></HerbalCare>
                    },
                    {
                        path:'phermacy',
                        element:<PhermacyMedi></PhermacyMedi>
                    },
                    {
                        path:'prescription',
                        element:<PrescriptionMedi></PrescriptionMedi>
                    }
                ]
            },


        ]
    }
   
])

export default router;