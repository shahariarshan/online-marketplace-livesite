import { Link } from "react-router-dom";
import Category from "../../public/category.json"

const WebBase = () => {
    return (
        <div>
            <div className=" lg:flex mt-3 justify-evenly gap-4">
                {
                    Category.map((element, idx) => < Link to={`/category/${element.category}`} key={idx} className="btn text-orange-400 bg-gray-600 aria-checked:bg-sky-700">{element.category}</Link >)
                }
            </div>
        </div>
    );
};

export default WebBase;