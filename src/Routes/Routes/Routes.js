import { createBrowserRouter } from "react-router-dom"
import Main from "../../Layout/Main"
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import Home from "../../Pages/Home/Home/Home"
import Login from "../../Pages/Login/Login";
import Reviews from "../../Pages/Reviews/Reviews";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/appointment',
                element: <Appointment></Appointment>
            },
            {
                path: '/reviews',
                element: <Reviews></Reviews>
            },
        ]
    }
])

export default router;