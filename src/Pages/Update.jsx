// import { Link, useLoaderData } from "react-router-dom";
// import { FaBackward } from 'react-icons/fa';
// import Swal from "sweetalert2";





// const Update = () => {

//     const handelUpdateJob = event => {
//         const loadData = useLoaderData();
//     console.log(loadData);
//     const  { email, title, data, category, miniPrice, maxPrice, description} =loadData
//         event.preventDefault();
//         const form = event.target;
//         const email = form.email.value;
//         const title = form.title.value;
//         const data = form.data.value;
//         const category = form.category.value;
//         const miniPrice = form.miniPrice.value;
//         const maxPrice = form.maxPrice.value;
//         const description = form.description.value;

//         const updateJobDetails = { email, title, data, category, miniPrice, maxPrice, description}
//         console.log(updateJobDetails)

        

//         fetch(`http://localhost:5000/allJobs/allJobs/${_id}`, {
//             method: "PUT",
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body: JSON.stringify(infoJob)
//         })
//             .then(res => res.json())
//             .then(data => {
//                 console.log(data)
//                 if(data.insertedId
//                     ){
//                         Swal.fire({
//                             title: 'Job add Success!',
//                             text: 'Want to add job',
//                             icon: 'success',
//                             confirmButtonText: 'Great '
//                           })

//                 }
//             })


//     }
//     return (


//         <div className="bg-stone-500  lg:p-12">
//             <div className=" p-7 ">

//                 <Link to='/' className="flex btn btn-secondary">
//                     <FaBackward className="text-2xl text-black"></FaBackward>
//                     <span className="text-orange-400 font-serif text-xl ml-3">Go to home</span>
//                 </Link>


//                 <h2 className="text-3xl font-extrabold text-center mt-5">Add a New Job</h2>
//                 <form onSubmit={handelUpdateJob} className="mt-5" >

//                     <div className="md:flex mb-8">
//                         <div className="form-control md:w-1/2">
//                             <label className="label">
//                                 <span className="label-text">Email of the employer</span>
//                             </label>
//                             <label className="input-group">
//                                 <input type="email" name="email" 
//                                 defaultValue={email} placeholder="Your Email" className="input input-bordered w-full" />
//                             </label>
//                         </div>
//                         <div className="form-control md:w-1/2 lg:ml-4">
//                             <label className="label">
//                                 <span className="label-text">Job title</span>
//                             </label>
//                             <label className="input-group">
//                                 <input type="text" name="title" 
//                                 defaultValue={title}
//                                 placeholder="Title" className="input input-bordered w-full" />
//                             </label>
//                         </div>
//                     </div>



//                     <div className="md:flex mb-8">
//                         <div className="form-control md:w-1/2">
//                             <label className="label">
//                                 <span className="label-text">Deadline</span>
//                             </label>
//                             <label className="input-group">
//                                 <input type="date" name="data" 
//                                  defaultValue={data} className="input input-bordered w-full" />
//                             </label>
//                         </div>
//                         <div className="form-control md:w-1/2 lg:ml-4 mt-9">
//                             <select className="select select-bordered w-full ">
//                                 <label className="label">
//                                     <option disabled selected>Select your Job Category</option>
//                                     <span className="label-text"></span>
//                                 </label>
//                                 <option>Web Development</option>
//                                 <option>Digital Marketing</option>
//                                 <option>Graphics Design</option>
//                                 <label className="input-group">
//                                 <input type="text" name="category"  defaultValue={category} className="input input-bordered w-full" />
//                             </label>
//                             </select>
//                         </div>


//                     </div>



//                     <div className="md:flex mb-8">
//                         <div className="form-control md:w-1/2">
//                             <label className="label">
//                                 <span className="label-text">Minimum Price</span>
//                             </label>
//                             <label className="input-group">
//                                 <input type="number" name="miniPrice"  defaultValue={miniPrice} placeholder="Minimum Price" className="input input-bordered w-full" />
//                             </label>
//                         </div>
//                         <div className="form-control md:w-1/2 lg:ml-4">
//                             <label className="label">
//                                 <span className="label-text">Maximum Price</span>
//                             </label>
//                             <label className="input-group">
//                                 <input type="number" name="maxPrice" defaultValue={maxPrice} placeholder="Max-Price" className="input input-bordered w-full" />
//                             </label>
//                         </div>

//                     </div>



//                     <div className="form-control md:w-1/2 ">
//                         <label className="label">
//                             <span className="label-text">Description</span>
//                         </label>
//                         <label className="input-group">
//                             <input type="text" name="description" defaultValue={description} placeholder="Description" className="input input-bordered w-full" />
//                         </label>
//                     </div>
//                     <input type="submit" value="Add This job" className="btn bg-lime-700 w-full mt-5" />

//                 </form>
//             </div>
//         </div>
//     );
// };

// export default Update;