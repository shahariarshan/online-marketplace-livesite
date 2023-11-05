import Banner from "./Banner/Banner";
import Navbar from "./Navbar";

const MainLayOut = () => {
    return (
        <div className="mx-auto container">
            <Navbar></Navbar>
            <Banner></Banner>
        </div>
    );
};

export default MainLayOut;

