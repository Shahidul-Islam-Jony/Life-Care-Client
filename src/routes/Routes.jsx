import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../layout/MainLayout";
import Login from "../pages/Login/Login";
import BabyCare from "../pages/BabyCare/BabyCare";
import MedicineLayout from "../layout/MedicineLayout";
import Contact from "../pages/Contact/Contact";


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
                ]
            },


        ]
    }
   
])

export default router;