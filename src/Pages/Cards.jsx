import { NavLink, useLoaderData, useParams } from "react-router-dom";


const Cards = () => {
    const {category} = useParams()
    console.log(category);
    const loadedData = useLoaderData()
    console.log(loadedData);
    const fetchItems = loadedData.filter(item => item.category.toLowerCase() === category.toLowerCase())
    // console.log(fetchItems)
    return (
        <div className="card  ">
            {/* <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="car!"/></figure> */}
             <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-10">
                {
                    fetchItems.map(item => <span key={item._id}  >
                        <div className="card card-compact  bg-gray-300 shadow-xl ">
                            {/* <figure><img className="p-7" src={product.photo} /></figure> */}
                            <div className="card-body">
                                <div className=" text-center">
                                   
                                    <p><span className="text-2xl mr-3 "><span className="text-2xl font-bold font-mono text-red-500 mb-3"> {item.category.toUpperCase()}</span></span></p>
                                    <p><span className="text-xl font-serif font-medium text-red-600"></span><span className=" mr-3 "><span className="text-xl font-semibold ">Title:</span>{item.title}</span></p>
                                    <h2 className="mt-2" ><span className="text-xl font-serif font-medium text-red-600"></span><span className=" mr-3 "><span className="text-xl font-semibold ">Deadline:</span>:{item.data}</span></h2>
                                    <h2 className="mt-2"><span className="text-xl font-serif font-medium text-red-600"></span><span className=" mr-3 "><span className="text-xl font-semibold ">Minimum Price:</span>{item.miniPrice}</span></h2>
                                    <h2 className="mt-2"><span className="text-xl font-serif font-medium text-red-600"></span><span className=" mr-3 "><span className="text-xl font-semibold ">Maximum Price:</span>{item.maxPrice}</span></h2>
                                   <p><span className=" mr-3 "><span className="text-xl font-semibold ">Details:</span>{item.description}</span></p>

                                </div>
                                <div className="card-actions justify-center mt-2">
                                    {/* <Link >
                                        <button className="btn btn-link">details</button>
                                    </Link> */}
                                    <NavLink to={`/category/${item.category}/${item._id}`}>
                                        <button className="btn btn-neutral ">Bid Now</button>
                                    </NavLink>
                                </div>
                            </div>
                        </div>



                    </span>)
                }

            </div>
        </div>
        
    );
};

export default Cards;