import { useLoaderData } from "react-router-dom";


const TypeOfJobs = () => {
    const loadJobs = useLoaderData()
    console.log(loadJobs);
    return (
        <div className="card w-96 bg-primary text-primary-content">
            <div className="card-body">
                <h2 className="card-title">Card title!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <button className="btn">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default TypeOfJobs;