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
 <Marquee>
            <div className="card  bg-white shadow-xl ml-5  ">
                <figure className="px-10 pt-10">
                    <img src="https://i.ibb.co/d7Bzksd/portrait-young-smiling-handsome-model-man-dressed-gray-casual-hoodie-clothes-posing-white-wall-isola.jpg" alt="Shoes" className="rounded-full w-24" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Shohel</h2>
                    <p className="text-center ">Nike excels with quality, innovation <br />, and style. Their products blend <br /> comfort and performance, making them a top <br /> choice for athletes worldwide.Nike's relentless pursuit of excellence <br /> defines their global athletic dominance.</p>
                    <div className="rating rating-xs">
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-sky-600" />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-sky-600" checked />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-sky-600" />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-sky-600" />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-sky-600" />
                    </div>
                </div>
            </div>
            <div className="card  bg-red-400 shadow-xl ml-5">
                <figure className="px-10 pt-10">
                    <img src="https://i.ibb.co/4F9Lc3r/portrait-smiling-blonde-woman.jpg" alt="Shoes" className="rounded-full w-24" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Sadia</h2>
                    <p className="text-center">Zara offers trendy, affordable fashion. With rapid turnover, <br /> they capture current styles, catering to diverse tastes. Quality varies, <br /> but their chic designs and accessibility make them <br /> a fashion-forward choice</p>
                    <div className="rating rating-xs">
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-sky-600" />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-sky-600" checked />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-sky-600" />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-sky-600" />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-sky-600" />
                    </div>
                </div>
            </div>
            <div className="card  bg-red-400 shadow-xl ml-5">
                <figure className="px-10 pt-10">
                    <img src="https://i.ibb.co/smsVqVH/young-happy-woman-with-ok-sign-white-shirt.jpg" alt="Shoes" className="rounded-full w-24" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Mymuna</h2>
                    <p className="text-center">Adidas, a powerhouse in sports fashion, merges performance and 
                        <br />style flawlessly. Their innovative designs, quality materials, <br />and comfortable fit appeal to athletes  <br /> and fashion enthusiasts, defining them as <br />a leading brand.</p>
                    <div className="rating rating-xs">
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-sky-600" />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-sky-600" checked />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-sky-600" />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-sky-600" />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-sky-600" />
                    </div>
                </div>
            </div>
            <div className="card  bg-red-400 shadow-xl ml-5">
                <figure className="px-10 pt-10">
                    <img src="https://i.ibb.co/Wc0wbN1/8c660e10-c110-43bb-a350-df50800fb45c.jpg" className="rounded-full w-24 h-24" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Daddy</h2>
                    <p className="text-center">Gucci epitomizes luxury, crafting timeless designs <br /> with impeccable craftsmanship. Their <br />iconic products exude sophistication,
                    <br /> making a bold statement in the fashion world. A symbol <br />of elegance and opulence.</p>
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