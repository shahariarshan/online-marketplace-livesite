import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

import Marquee from "react-fast-marquee";

const Review = () => {
    useEffect(()=>{
        Aos.init();
      },[])
    return (
        
        <div  data-aos="zoom-in-right ">
            <h2 className="text-4xl font-bold text-center">Customers Reviews<span className="text-blue-700 text-6xl ml-2">!!</span></h2>
 <Marquee className="mt-5">
            <div className="card  bg-slate-400 shadow-xl ml-5  ">
                <figure className="px-10 pt-10">
                    <img src="https://i.ibb.co/d7Bzksd/portrait-young-smiling-handsome-model-man-dressed-gray-casual-hoodie-clothes-posing-white-wall-isola.jpg" alt="Shoes" className="rounded-full w-24" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Shohel</h2>
                    <p className="text-center ">I recently had the pleasure of using this online marketplace, <br /> and I must say, it exceeded all my expectations. <br /> The website's user-friendly interface made browsing a breeze, <br /> and finding what I needed was incredibly easy.</p>
                    <div className="rating rating-xs">
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-sky-600" />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-sky-600" checked />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-sky-600" />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-sky-600" />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-sky-600" />
                    </div>
                </div>
            </div>
            <div className="card  bg-slate-400 shadow-xl ml-5">
                <figure className="px-10 pt-10">
                    <img src="https://i.ibb.co/4F9Lc3r/portrait-smiling-blonde-woman.jpg" alt="Shoes" className="rounded-full w-24" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Sadia</h2>
                    <p className="text-center px-3">I also appreciated the community aspect of the platform. <br /> Interacting with other buyers and sellers through reviews <br /> and discussions created a sense of camaraderie. <br /> It felt like being part of a vibrant  </p>
                    <div className="rating rating-xs">
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-sky-600" />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-sky-600" checked />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-sky-600" />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-sky-600" />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-sky-600" />
                    </div>
                </div>
            </div>
            <div className="card  bg-slate-400 shadow-xl ml-5">
                <figure className="px-10 pt-10">
                    <img src="https://i.ibb.co/smsVqVH/young-happy-woman-with-ok-sign-white-shirt.jpg" alt="Shoes" className="rounded-full w-24" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Mymuna</h2>
                    <p className="text-center">One of the standout features of this marketplace is the <br /> incredible deals and discounts available. <br /> I've saved a significant amount of money on <br /> products that would have cost much more elsewhere.</p>
                    <div className="rating rating-xs">
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-sky-600" />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-sky-600" checked />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-sky-600" />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-sky-600" />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-sky-600" />
                    </div>
                </div>
            </div>
            <div className="card  bg-slate-400 shadow-xl ml-5">
                <figure className="px-10 pt-10">
                    <img src="https://i.ibb.co/Wc0wbN1/8c660e10-c110-43bb-a350-df50800fb45c.jpg" className="rounded-full w-24 h-24" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Daddy</h2>
                    <p className="text-center">I also appreciated the community aspect of the platform. <br /> Interacting with other buyers and sellers through reviews <br /> and discussions created a sense of camaraderie. <br /> It felt like being part of a vibrant and </p>
                    <div className="rating rating-xs">
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-sky-600" />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-sky-600" checked />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-sky-600" />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-sky-600" />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-sky-600" />
                    </div>
                </div>
            </div>
            </Marquee>

        </div>

    );
};

export default Review;