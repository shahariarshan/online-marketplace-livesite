
import Why from "../Why";
import Banner from "./Banner/Banner";
import Review from "./Team";


const MainLayOut = () => {
    return (
        <div className="mx-auto container">
            <Banner></Banner>
            <Why></Why>
            <Review></Review>
        </div>
    );
};

export default MainLayOut;

