import { NavLink } from "react-router-dom";


const Sidebar = () => {
    return (
        <ul className="menu p-4 w-80 min-h-full bg-base-200">
            {/* Sidebar content here */}
            <div className="flex flex-col gap-3 ">
                {/* Navbar menu content here */}
                <NavLink  className={({isActive})=>isActive? 'btn btn-primary btn-sm mr-2' : 'btn-sm btn-ghost'}>Add Jobs</NavLink>
          <NavLink  className={({isActive})=>isActive? 'btn btn-primary btn-sm  mr-2' : 'btn-sm btn-ghost'}>My Posted Jobs</NavLink>
          <NavLink  className={({isActive})=>isActive? 'btn btn-primary btn-sm  mr-2' : 'btn-sm btn-ghost'}>My Bids</NavLink>
          <NavLink  className={({isActive})=>isActive? 'btn btn-primary btn-sm  mr-2' : 'btn-sm btn-ghost'}>Bid Request</NavLink>
          <NavLink to='/login' className={({isActive})=>isActive? 'btn btn-primary btn-sm  mr-2' : 'btn-sm btn-ghost'}>Log In</NavLink>
          <NavLink to='/register' className={({isActive})=>isActive? 'btn btn-primary btn-sm  mr-2' : 'btn-sm btn-ghost'}>Register</NavLink> 
              
              </div>
          </ul>
    );
};

export default Sidebar;