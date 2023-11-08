import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { Helmet } from "react-helmet-async";



const JobDetails = () => {
    const details = useLoaderData()
    const {user} =useContext(AuthContext)
    console.log(details,user);
    const {email,title,  miniPrice, maxPrice} =details;
    const handelPlaceJob = event => {
        event.preventDefault();

        const form = event.target;
        const bemail = form.bemail.value;
        const title = form.title.value;
        const email = form.email.value;
        const data = form.data.value;
        const miniPrice = form.miniPrice.value;
        const maxPrice = form.maxPrice.value;
        

        const updateCategory = { bemail,email,user, title,data,miniPrice,maxPrice}
        console.log(updateCategory)
        fetch(`http://localhost:5000/placeBid`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateCategory)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.insertedId
                    ){
                        toast.success('Bidding Success')
                }
            })


    }
    return (

        <div className="flex justify-center mt-5">
            <Toaster
  position="top-right"
  reverseOrder={false}
/>
<Helmet>
    <title>
      Online Marketplace| Details
    </title>
  </Helmet>
            <div className="card bg-slate-400 shadow-2xl">
                <div className="card-body">
                    <h2 className="text-2xl text-red-500 text-center font-mono">{details.title}</h2>
                    <h2 className="text-center"><span className="font-bold">Deadline:</span>{details.data}</h2>
                    <h2 className="text-center"><span className="font-bold">Minimum Price:</span>{details.miniPrice}</h2>
                    <h2 className="text-center "><span className="font-bold">Maximum Price:</span>{details.maxPrice}</h2>
                    <p> <span className="font-bold">Details:</span>{details.description}</p>
                    <div className="card-actions ">
                        {/* Open the modal using document.getElementById('ID').showModal() method */}
                        <button className="btn btn-group btn-info mt-4 w-full" onClick={() => document.getElementById('my_modal_5').showModal()}>Place Your Bid</button>
                        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box">



                                <div>
                                    <div>
                                        <form onSubmit={handelPlaceJob} className="mt-5" >

                                            <div className="md:flex mb-8">
                                                <div className="form-control md:w-1/2">
                                                    <label className="label">
                                                        <span className="label-text">Buyer Email</span>
                                                    </label>
                                                    <label className="input-group">
                                                        <input type="email" name="bemail" defaultValue={email} readOnly placeholder="Your Email" className="input input-bordered w-full" />
                                                    </label>
                                                </div>
                                                <div className="form-control md:w-1/2">
                                                    <label className="label">
                                                        <span className="label-text">User Email</span>
                                                    </label>
                                                    <label className="input-group">
                                                        <input type="email" name="email" defaultValue={user?.email} readOnly placeholder="Your Email" className="input input-bordered w-full" />
                                                    </label>
                                                </div>
                                               
                                            </div>

                                            <div className="md:flex mb-8">
                                                <div className="form-control md:w-1/2">
                                                    <label className="label">
                                                        <span className="label-text">Minimum Price</span>
                                                    </label>
                                                    <label className="input-group">
                                                        <input type="number" name="miniPrice" defaultValue={miniPrice} placeholder="Minimum Price" className="input input-bordered w-full" />
                                                    </label>
                                                </div>
                                                <div className="form-control md:w-1/2 lg:ml-4">
                                                    <label className="label">
                                                        <span className="label-text">Maximum Price</span>
                                                    </label>
                                                    <label className="input-group">
                                                        <input type="number" name="maxPrice" defaultValue={maxPrice} className="input input-bordered w-full" />
                                                    </label>
                                                </div>

                                            </div>
                                            <div className="md:flex mb-8">
                                                <div className="form-control md:w-1/2">
                                                    <label className="label">
                                                        <span className="label-text">Title</span>
                                                    </label>
                                                    <label className="input-group">
                                                        <input type="text" name="title" defaultValue={title} className="input input-bordered w-full" />
                                                    </label>
                                                </div>
                                                <div className="form-control md:w-1/2">
                                                    <label className="label">
                                                    <span className="label-text">Deadline</span>
                                                    </label>
                                                    <label className="input-group">
                                                        <input type="date" name="data" className="input input-bordered w-full" />
                                                    </label>
                                                </div>

                                            </div>
                                            


                                            
                                            <input type="submit" value="Bid On the Project" className="btn bg-lime-700 w-full mt-5" />

                                        </form>
                                    </div>
                                </div>



                                <div className="modal-action">
                                    <form method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="btn">Close</button>
                                    </form>
                                </div>
                            </div>
                        </dialog>

                    </div>
                </div>
            </div>
        </div>


    );
};

export default JobDetails;