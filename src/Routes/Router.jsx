import { createBrowserRouter } from "react-router-dom" 
import App from "../App";
import MainLayOut from "../Components/layout/MainLayOut";
import LogIn from "../Login/Login";
import Register from "../Register/Register";


const routes = createBrowserRouter ([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                path:'/',
                element:<MainLayOut></MainLayOut>
            }
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