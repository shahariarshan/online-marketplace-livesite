import { Link,  useLoaderData, useParams } from "react-router-dom";


const Cards = () => {
    const {category} = useParams()
    // console.log(category);
    const loadedData = useLoaderData()
    // console.log(loadedData);
    const fetchItems = loadedData.filter(item => item.category.toLowerCase() === category.toLowerCase())
    // console.log(fetchItems)
    return (
        <div className="card  ">
          
             <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-10">
                {
                    fetchItems.map(item => <span key={item._id}  >
                        <div className="card card-compact  bg-gray-300 shadow-xl ">
                            {/* <figure><img className="p-7" src={product.photo} /></figure> */}
                            <div className="card-body">
                                <div className=" text-center">
                                   
                                    <p><span className="text-2xl mr-3 "><span className="text-2xl font-bold font-mono text-red-500 mb-3"> {item.category.toUpperCase()}</span></span></p>

                                    <p><span className="text-xl font-serif font-medium text-red-600"></span><span className=" mr-3 "><span className="text-xl text-blue-400 font-semibold   ">Title:</span><span className="ml-2 font-semibold  ">{item.title}</span></span></p>

                                    <h2 className="mt-2" ><span className="text-xl font-serif font-medium text-red-600"></span><span className=" mr-3 "><span className="text-xl font-semibold text-blue-400  ">Deadline:</span><span className="ml-2 font-semibold">{item.data}</span></span></h2>

                                    <h2 className="mt-2"><span className="text-xl font-serif font-medium text-red-600"></span><span className=" mr-3 "><span className="text-xl font-semibold text-blue-400  ">Minimum Price:</span><span className="ml-2 font-semibold  ">
                                    {item.miniPrice}BDT</span></span></h2>

                                    <h2 className="mt-2"><span className="text-xl font-serif font-medium text-red-600"></span><span className=" mr-3 "><span className="text-xl font-semibold text-blue-400  ">Maximum Price:</span><span className="ml-2 font-semibold  ">{item.maxPrice}BDT</span></span></h2>

                                   <p><span className=" mr-3 "><span className="text-xl font-semibold text-blue-400  ">Details:</span><span className="ml-2 font-medium  ">{item.description}</span></span></p>

                                </div>
                                <div className="card-actions justify-center mt-2">
                                    
                                    <Link to={`/jobDetails/${item.category}`}>
                                        <button className="btn btn-neutral ">Bid Now</button>
                                    </Link>
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