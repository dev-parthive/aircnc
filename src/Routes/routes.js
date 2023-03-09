import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Main from "../Layout/Main";
import Dashboard from "../pages/Dashboard/Dashboard";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";

const routes = createBrowserRouter([
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
                path: '/signup', 
                element: <Signup></Signup>
            }, 
            {
                path: '/dashboard', 
                element: <Dashboard></Dashboard>
            }
        ]
    }
])

export default routes;