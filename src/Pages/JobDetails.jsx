import { useLoaderData } from "react-router-dom";



const JobDetails = () => {
    const details = useLoaderData()
    console.log(details);
    return (

        <div>
            <div className="card w-96 bg-primary text-primary-content">
                <div className="card-body">
                    <h2 className="card-title">{details.length}</h2>
                    {/* <p>{description}</p> */}
                    <div className="card-actions justify-end">
                        <button className="btn">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default JobDetails;