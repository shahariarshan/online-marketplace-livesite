import Navbar from "../Components/layout/Navbar";


const ErrorPage = () => {
   
    
    return (
        <div  data-aos="fade-up">
            <Navbar></Navbar>
             <img className="h-[700px] w-[700px] mx-auto" src="https://i.ibb.co/zsFyxgD/4660894-2456051.jpg" alt="" />
          <div>
          <h2 className="text-2xl text-blue-400 font-mono font-bold  text-center ">No new product</h2>
          </div>
        </div>
    );
};

export default ErrorPage;