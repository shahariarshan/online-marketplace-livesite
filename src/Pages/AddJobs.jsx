import { Link } from "react-router-dom";
import { FaBackward } from 'react-icons/fa';
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";





const AddJobs = () => {


    const handelAddJob = event => {
        event.preventDefault();

        const form = event.target;

        const email = form.email.value;
        const title = form.title.value;
        const data = form.data.value;
        const category = form.type.value;
        const miniPrice = form.miniPrice.value;
        const maxPrice = form.maxPrice.value;
        const description = form.description.value;

        const infoJob = { email, title, data, category, miniPrice, maxPrice, description }
        console.log(infoJob)



        fetch('https://online-marketplace-server-side.vercel.app/allJobs', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(infoJob)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId
                ) {
                    Swal.fire({
                        title: 'Job add Success!',
                        text: 'Want to add job',
                        icon: 'success',
                        confirmButtonText: 'Great '
                    })

                }
            })


    }


    return (


        <div className="  lg:p-12">
            <Helmet>
                <title>
                    Online Marketplace|| Add Jobs
                </title>
            </Helmet>
            <div className=" p-7 ">

                <Link to='/' className=" btn btn-secondary mx-auto">
                    <FaBackward className="text-2xl text-black"></FaBackward>
                    <span className="text-orange-400 font-serif text-xl ml-3"> Home</span>
                </Link>


                <h2 className="text-3xl font-extrabold text-center mt-5">Add a New Job</h2>
                <form onSubmit={handelAddJob} className="mt-5" >

                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Email of the employer</span>
                            </label>
                            <label className="input-group">
                                <input type="email" name="email" placeholder="Your Email" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 lg:ml-4">
                            <label className="label">
                                <span className="label-text">Job title</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="title" placeholder="Title" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>



                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Deadline</span>
                            </label>
                            <label className="input-group">
                                <input type="date" name="data" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 lg:ml-4 ">
                            <label className="label">
                                <span className="label-text">Select your Job Category</span>
                            </label>
                            <select name="type" className="select select-bordered w-full ">
                                <option value={`Web Development`}>Web Development</option>
                                <option value={`Digital Marketing`}>Digital Marketing</option>
                                <option value={`Graphic Design`}>Graphic Design</option>
                            </select>

                        </div>


                    </div>



                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Minimum Price</span>
                            </label>
                            <label className="input-group">
                                <input type="number" name="miniPrice" placeholder="Minimum Price" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 lg:ml-4">
                            <label className="label">
                                <span className="label-text">Maximum Price</span>
                            </label>
                            <label className="input-group">
                                <input type="number" name="maxPrice" placeholder="Max-Price" className="input input-bordered w-full" />
                            </label>
                        </div>

                    </div>



                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="description" placeholder="Description" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <input type="submit" value="Add This job" className="btn bg-lime-700 w-full mt-5" />

                </form>
            </div>
        </div>
    );
};

export default AddJobs;