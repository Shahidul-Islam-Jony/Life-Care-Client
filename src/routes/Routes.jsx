import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../layout/MainLayout";
import Login from "../pages/Login/Login";
import BabyCare from "../pages/BabyCare/BabyCare";
import MedicineLayout from "../layout/MedicineLayout";


const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'login',
                element:<Login></Login>
            },

        ]
    },
    {
        path:'medicine/layout',
        element:<MedicineLayout></MedicineLayout>,
        children:[
            {
                path:'medicine/layout',
                element:<BabyCare></BabyCare>
            }
        ]
    }
])

export default router;