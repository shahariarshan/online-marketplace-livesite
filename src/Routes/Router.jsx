import { createBrowserRouter } from "react-router-dom"
import App from "../App";
import MainLayOut from "../Components/layout/MainLayOut";
import LogIn from "../Login/Login";
import Register from "../Register/Register";
import AddJobs from "../Pages/AddJobs";
import ErrorPage from "../Pages/ErrorPage";
import Cards from "../Pages/Cards";

import MyPostedJobs from "../Pages/MyPostedJobs";
import Update from "../Pages/Update";
import JobDetails from "../Pages/JobDetails";
import PrivateRoute from "./PrivateRoute";
import MyBids from "../Pages/MyBids";



const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <MainLayOut></MainLayOut>,

            },

            {
                path: '/addJob',
                element: <PrivateRoute><AddJobs></AddJobs></PrivateRoute>
            },
            {
                path: '/category/:category',
                element: <Cards></Cards>,
                loader: () => fetch('https://online-marketplace-server-side.vercel.app/allJobs')
            },
            {
                path: '/category',
                element: <PrivateRoute><MyPostedJobs></MyPostedJobs></PrivateRoute>,
                loader: () => fetch('https://online-marketplace-server-side.vercel.app/allJobs')
            },
            {
                path:'update/:id',
                element:<Update></Update>,
                loader:({params})=>fetch(`https://online-marketplace-server-side.vercel.app/allJobs/${params.id}`)
            },
            {
                path:'/jobDetails/:id',
                element:<PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
                loader: ({params}) => fetch(`https://online-marketplace-server-side.vercel.app/allJobs/${params.id}`)
            },
            {
                path:'/myBids',
                element:<PrivateRoute><MyBids></MyBids></PrivateRoute>,
                loader:()=>fetch('https://online-marketplace-server-side.vercel.app/placeBid')
            }



        ]
    },

    {
        path: '/login',
        element: <LogIn></LogIn>
    },
    {
        path: '/register',
        element: <Register></Register>
    },

]);
export default routes