import { createBrowserRouter } from "react-router-dom" 
import App from "../App";
import MainLayOut from "../Components/layout/MainLayOut";
import LogIn from "../Login/Login";
import Register from "../Register/Register";
import AddJobs from "../Pages/AddJobs";
import ErrorPage from "../Pages/ErrorPage";
import Card from "../Pages/Card";



const routes = createBrowserRouter ([
    {
        path:'/',
        element:<App/>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<MainLayOut></MainLayOut>,
                loader:()=>fetch('/category.json')
                
            },
            {
                path:'/addJob',
                element:<AddJobs></AddJobs>
            },
            {
                path:'/category/:type',
                element:<Card></Card>,
                loader:()=>fetch(`http://localhost:5000/allJobs`),
              },
            
           
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