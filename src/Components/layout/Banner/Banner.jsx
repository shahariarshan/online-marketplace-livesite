// import Categories from "../../../Pages/Categories";

import { Helmet } from "react-helmet-async";
import WebBase from "../../../Pages/webBase";


const Banner = () => {


  return (
    <div  className="mt-5">
      <Helmet>
    <title>
      Online Marketplace|| Home
    </title>
  </Helmet>

      <div className="carousel w-full h-[600px]">
      <div id="slide1" className="carousel-item relative w-full">
        <img src="https://i.ibb.co/B6hZr7F/b3.png" className="w-full rounded-xl" />
        <div className="absolute h-full flex rounded-xl  left-0 top-0 items-center text-white 
    bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] ">
          <div className="pl-5  space-y-7">
            <h2 className="text-6xl font-bold">Your Ultimate Online Shopping Destination</h2>
            <p className="text-center">Connect buyers, sellers; diverse products; seamless transactions; convenient shopping experience online.</p>
            <div className="">
             <WebBase></WebBase>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 ">
          <a href="#slide4" className="btn btn-circle bg-red-500 mr-5">❮</a>
          <a href="#slide2" className="btn btn-circle bg-red-500 mr-5">❯</a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src="https://i.ibb.co/wsTntMZ/b1.webp" className="w-full rounded-xl" />
        <div className="absolute h-full flex  left-0 top-0 rounded-xl items-center text-white 
    bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] ">
          <div className="pl-5  space-y-7">
            <h2 className="text-6xl font-bold">Your Ultimate Online Shopping Destination</h2>
            <p className="text-center">Connect buyers, sellers; diverse products; seamless transactions; convenient shopping experience online.</p>
            <div className="mx-auto justify-evenly">
             <WebBase></WebBase>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle bg-red-500 mr-5">❮</a>
          <a href="#slide3" className="btn btn-circle bg-red-500 mr-5">❯</a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src="https://i.ibb.co/DLFWR6Z/b2.png" className="w-full rounded-xl" />
        <div className="absolute h-full flex  left-0 rounded-xl top-0 items-center text-white 
    bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] ">
          <div className="pl-5  space-y-7">
            <h2 className="text-6xl font-bold">Your Ultimate Online Shopping Destination</h2>
            <p className="text-center">Connect buyers, sellers; diverse products; seamless transactions; convenient shopping experience online.</p>
            <div className="mx-auto justify-evenly">
             <WebBase></WebBase>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle bg-red-500  mr-5">❮</a>
          <a href="#slide4" className="btn btn-circle bg-red-500 mr-5">❯</a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src="https://i.ibb.co/5ry142k/laptop-shopping-bags-online-shopping-concept.jpg" className="w-full rounded-xl" />
        <div className="absolute h-full flex  left-0 top-0 rounded-xl items-center text-white 
    bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] ">
          <div className="pl-5  space-y-7">
            <h2 className="text-6xl font-bold">Your Ultimate Online Shopping Destination</h2>
            <p className="text-center ">Connect buyers, sellers; diverse products; seamless transactions; convenient shopping experience online.</p>
            <div className="mx-auto justify-evenly">
             <WebBase></WebBase>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle bg-red-500  mr-5">❮</a>
          <a href="#slide1" className="btn btn-circle bg-red-500 mr-5">❯</a>
        </div>
      </div>
     
  
    </div>




     
    </div>
  );
};

export default Banner;