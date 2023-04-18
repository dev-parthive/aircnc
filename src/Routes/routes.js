import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import Checkout from "../Shared/Checkout/Checkout";
import CommingSoon from "../Shared/CommingSoon/CommingSoon";
import Details from "../Shared/Details/Details";
import ErrorPage from "../Shared/ErrorPage/ErrorPage";
import SearchResult from "../Shared/SearchResult/SearchResult";
import PrivateRoutes from "./PrivateRoutes";
import DashboardLayout from "../Layout/DashboardLayout";
import Welcome from "../pages/Dashboard/Welcome";
import MyBookings from "../pages/Dashboard/MyBookings";
import BecomeAHost from "../pages/Dashboard/BecomeAHost";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
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
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/comming-soon',
                element: <CommingSoon></CommingSoon>
            },
            {
                path: '/service-details',
                element: <Details></Details>
            },
            {
                path: '/search-result',
                element: <SearchResult></SearchResult>
            },
            {
                path: '/checkout',
                // element: <PrivateRoutes><Checkout></Checkout></PrivateRoutes>
                element: <Checkout></Checkout>

            },

        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoutes><DashboardLayout></DashboardLayout></PrivateRoutes>,
        children: [
            {
                path: "",
                element: <Welcome></Welcome>
            },
            {
                path: "my-bookings",
                element:<PrivateRoutes> <MyBookings></MyBookings></PrivateRoutes>
            },
            {
                path: 'become-host', 
                element:  <PrivateRoutes><BecomeAHost></BecomeAHost></PrivateRoutes>
            }

        ]

    }
])

export default routes;