import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";
import { Helmet } from "react-helmet-async";


const Update = () => {
    <Helmet>
    <title>
      Online Marketplace || Update
    </title>
  </Helmet>
    const {user} =useContext(AuthContext)
    const mail =user?.email
    const loder =useLoaderData()
    console.log(loder);
    const {_id,email, title, data, type, miniPrice, maxPrice, description} =loder
    const handelUpdateJob = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const title = form.title.value;
        const data = form.data.value;
        const type = form.type.value;
        const miniPrice = form.miniPrice.value;
        const maxPrice = form.maxPrice.value;
        const description = form.description.value;

        const updateCategory = {mail, email,title,data,type,miniPrice,maxPrice,description}
        console.log(updateCategory)

        

        fetch(`https://online-marketplace-server-side.vercel.app/allJobs/${_id}`, {
            method: "DELETE",
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
                        Swal.fire({
                            title: 'Job Update Success!',
                            text: 'Want to Update job',
                            icon: 'success',
                            confirmButtonText: 'Great '
                          })

                }
            })


    }

    
    return (


        <div className="  lg:p-12">
            <div className=" p-7 ">
                <h2 className="text-3xl font-extrabold text-center mt-5">Update Your Job</h2>
                <form onSubmit={handelUpdateJob} className="mt-5" >

                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Email of the employer</span>
                            </label>
                            <label className="input-group">
                                <input type="email" name="email" defaultValue={email} readOnly placeholder="Your Email" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 lg:ml-4">
                            <label className="label">
                                <span className="label-text">Job title</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="title" defaultValue={title} placeholder="Title" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>



                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Deadline</span>
                            </label>
                            <label className="input-group">
                                <input type="date" name="data" defaultValue={data} className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 lg:ml-4 ">
                                <label className="label">
                                <span className="label-text">Select your Job Category</span>
                                </label>
                            {/* <select name="type" defaultValue={type} className="select select-bordered w-full ">
                                <option value={`Web Development`}>Web Development</option>
                                <option value={`Digital Marketing`}>Digital Marketing</option>
                                <option value={`Graphic Design`}>Graphic Design</option>
                            </select> */}
                           <label className="input-group">
                                <input type="text" name="type" defaultValue={type}  className="input input-bordered w-full" />
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
                                <input type="number" name="maxPrice" defaultValue={maxPrice} placeholder="Max-Price" className="input input-bordered w-full" />
                            </label>
                        </div>

                    </div>



                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="description" defaultValue={description} placeholder="Description" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <input type="submit" value="Update This job" className="btn bg-lime-700 w-full mt-5" />

                </form>
            </div>
        </div>
    );
};

export default Update;