import { Link } from "react-router-dom";
import Category from "../../public/category.json"

const WebBase = () => {
    return (
        <div>
            <div className="mx-auto lg:flex mt-3 justify-evenly">
                {
                    Category.map((element, idx) => < Link to={`/category/${element.category}`} key={idx} className="btn">{element.category}</Link >)
                }
            </div>
        </div>
    );
};

export default WebBase;