import { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";



const MyPostedJobs = () => {
    const { user } = useContext(AuthContext);
    const postedJob = useLoaderData()
    const job = postedJob.filter(element => element.email == user?.email)
    // console.log(postedJob);

    const [carts, setCarts] = useState(postedJob)
    const handelDelete = _id => {
        // make user confirmed to delete
        // console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/allJobs/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your job has been deleted.',
                                'success'
                            )
                            //   remove the cart from UI
                            const remainingCarts = carts.filter(cart => cart._id !== _id);
                            setCarts(remainingCarts);
                        }
                    })
            }
        })
    }


    return (
        <div className="card  ">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-10">
                {
                    job.map(item => <span key={item._id}  >
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




                                <div className="card-actions justify-between mt-2">

                                   

                                    <Link to={`/update/${item._id}`} className="btn btn-success ">Update</Link>
                                    <button onClick={() => handelDelete(item._id)} className="btn btn-success ">Delete</button>

                                </div>
                            </div>
                        </div>



                    </span>)
                }

            </div>

        </div>

    );
};

export default MyPostedJobs;