import { NavLink, useLoaderData, useParams } from "react-router-dom";


const MyPostedJobs = () => {
    const {title,category} = useParams()
    console.log(title);
    const loadedData = useLoaderData()
    console.log(loadedData);
    // const fetchItems = loadedData.filter(=> item.category.toLowerCase() === id)
    // console.log(fetchItems)
    return (
        <div className="card  ">
            {/* <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="car!"/></figure> */}
             <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-10">
                {
                    
                        <div className="card card-compact  bg-gray-300 shadow-xl ">
                            {/* <figure><img className="p-7" src={product.photo} /></figure> */}
                            <div className="card-body">
                                <div className=" text-center">
                                   
                                    <p><span className="text-2xl mr-3 "><span className="text-2xl font-bold font-mono text-red-500 mb-3"> {category.toUpperCase()}</span></span></p>
                                    <p><span className="text-xl font-serif font-medium text-red-600"></span><span className=" mr-3 "><span className="text-xl font-semibold ">Title:</span>{title}</span></p>
                                    <h2 className="mt-2" ><span className="text-xl font-serif font-medium text-red-600"></span><span className=" mr-3 "><span className="text-xl font-semibold ">Deadline:</span>:{data}</span></h2>
                                    <h2 className="mt-2"><span className="text-xl font-serif font-medium text-red-600"></span><span className=" mr-3 "><span className="text-xl font-semibold ">Minimum Price:</span>{miniPrice}</span></h2>
                                    <h2 className="mt-2"><span className="text-xl font-serif font-medium text-red-600"></span><span className=" mr-3 "><span className="text-xl font-semibold ">Maximum Price:</span>{maxPrice}</span></h2>
                                   <p><span className=" mr-3 "><span className="text-xl font-semibold ">Details:</span>{description}</span></p>

                                </div>
                                <div className="card-actions justify-center mt-2">
                                    {/* <Link >
                                        <button className="btn btn-link">details</button>
                                    </Link> */}
                                    <NavLink to={`/category/${category}/${_id}`}>
                                        <button className="btn btn-neutral ">Bid Now</button>
                                    </NavLink>
                                </div>
                            </div>
                        </div>



                    
                }

            </div>
        </div>
        
    );
};

export default MyPostedJobs;