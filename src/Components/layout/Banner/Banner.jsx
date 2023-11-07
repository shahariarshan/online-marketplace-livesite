// import Categories from "../../../Pages/Categories";

import WebBase from "../../../Pages/webBase";

// import { Link } from "react-router-dom";
// import Category from "../../../../public/category.json"




const Banner = () => {

  
  return (
   <div >


{/* <div className="mx-auto lg:flex mt-3 justify-evenly">
{
  Category.map((element,idx)=> < Link to={`/category/${element.category}`} key={idx} className="btn">{element.category}</Link >)
}
</div> */}
<WebBase></WebBase>
  
<div className="hero min-h-screen mt-5" style={{backgroundImage: 'url(https://i.ibb.co/3Y93ybT/b1.webp)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="">
      <h1 className="mb-5 text-5xl font-bold">Your Ultimate Online Shopping Destination</h1>
      <p className="mb-5">Connect buyers, sellers; diverse products; seamless transactions; convenient shopping experience online.</p>
      
    </div>
  </div>
</div>
   </div>
  );
};

export default Banner;