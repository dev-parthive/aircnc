import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Main from "../Layout/Main";
import Dashboard from "../pages/Dashboard/Dashboard";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import Checkout from "../Shared/Checkout/Checkout";
import CommingSoon from "../Shared/CommingSoon/CommingSoon";
import Details from "../Shared/Details/Details";
import ErrorPage from "../Shared/ErrorPage/ErrorPage";
import SearchResult from "../Shared/SearchResult/SearchResult";
import PrivateRoutes from "./PrivateRoutes";

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
                path: '/dashboard', 
                element: <Dashboard></Dashboard>
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

            }
        ]
    }
])

export default routes;