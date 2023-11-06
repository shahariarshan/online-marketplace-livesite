import { createBrowserRouter } from "react-router-dom" 
import App from "../App";
import MainLayOut from "../Components/layout/MainLayOut";
import LogIn from "../Login/Login";
import Register from "../Register/Register";
import AddJobs from "../Pages/AddJobs";
import ErrorPage from "../Pages/ErrorPage";
import Cards from "../Pages/Cards";

import MyPostedJobs from "../Pages/MyPostedJobs";

const routes = createBrowserRouter ([
    {
        path:'/',
        element:<App/>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<MainLayOut></MainLayOut>,
                
            },
            {
                path:'/addJob',
                element:<AddJobs></AddJobs>
            },
            {
                path:'/category/:category',
                element:<Cards></Cards>,
                loader:()=>fetch('http://localhost:5000/allJobs')
            },
            {
                path:'/category/:_id',
                element:<MyPostedJobs></MyPostedJobs>,
                loader:()=>fetch('http://localhost:5000/allJobs')
            },
            // {
            //     path : `/category/:category/:id`,
            //     element : <JobDetails></JobDetails>
            // }
            // {
            //     path:'jobDetails/:id',
            //     element:<JobDetails></JobDetails>,
            //     loader:({params})=>fetch(`http://localhost:5000/allJobs${params.id}`)
            // }

            
           
       ]
    },
   
     {
         path:'/login',
        element:<LogIn></LogIn>
     },
     {
         path:'/register',
        element:<Register></Register>
     },
    
]);
export default routes