import { NavLink } from "react-router-dom";
import Drawer from "./Drawer";


const Navbar = () => {
    return (
        <div className="drawer">
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
  <div className="drawer-content flex flex-col">
    {/* Navbar */}
    <div className="w-full navbar bg-base-300">
      <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
      
       <img className=" w-9 lg:w-16 text-black mr-3 " src="https://i.ibb.co/WfmD9dz/market-logo-removebg-preview.png" alt="" />
     <div className="flex-1 text-xl font-semibold"><span className=" text-blue-500 mr-2">Online</span> <br /> <span className=" text-red-400 ">Marketplaces</span></div>
      <div className="flex-none hidden lg:block">
        <ul className="menu menu-horizontal">
          {/* Navbar menu content here */}
          <NavLink to='/' className={({isActive})=>isActive? 'btn btn-primary btn-sm mr-2' : 'btn-sm btn-ghost'}>Home</NavLink>
          <NavLink  className={({isActive})=>isActive? 'btn btn-primary btn-sm mr-2' : 'btn-sm btn-ghost'}>Add Jobs</NavLink>
          <NavLink  className={({isActive})=>isActive? 'btn btn-primary btn-sm  mr-2' : 'btn-sm btn-ghost'}>My Posted Jobs</NavLink>
          <NavLink  className={({isActive})=>isActive? 'btn btn-primary btn-sm  mr-2' : 'btn-sm btn-ghost'}>My Bids</NavLink>
          <NavLink  className={({isActive})=>isActive? 'btn btn-primary btn-sm  mr-2' : 'btn-sm btn-ghost'}>Bid Request</NavLink>
          <NavLink to='/login'  className={({isActive})=>isActive? 'btn btn-primary btn-sm  mr-2' : 'btn-sm btn-ghost'}>Log In</NavLink>
          <NavLink to='/register' className={({isActive})=>isActive? 'btn btn-primary btn-sm  mr-2' : 'btn-sm btn-ghost'}>Register</NavLink> 

        </ul>
      </div>
    </div>
    {/* Page content here */}
   
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
       <Drawer></Drawer>
  </div>
</div>
    );
};

export default Navbar;






