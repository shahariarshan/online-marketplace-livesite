// import { Link, useNavigate } from "react-router-dom";
// import useAuth from "../Hooks/useAuth";
// import toast from "react-hot-toast";

import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import toast, { Toaster } from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const LogIn = () => {

    const {login,user,googleSign}=useContext(AuthContext)
    console.log(user);
    const navigate =useNavigate()

    const handelLogin = event => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        const user = { email, password }
        console.log(user)
        login(email,password)
        .then(result => {
          const user =result.user
          console.log(user)
        toast.success('Logged In Success')
        event.target.reset()
        
        navigate('/')
        })
        .catch(err=>{
            toast.error(err.message)
        //   console.log(error);
        })
    }
    const handelGoogleSignIn=()=>{
        googleSign()
        .then(result=>{
          console.log(result.user)
          navigate('/')
          
        })
        .catch( error => {
          console.error(error)
    
        })
      }
    return (
        <div className="hero-content flex-col lg:flex-row">
<div><Toaster/></div>
            <div className="card lg:w-1/2 flex-shrink-0 max-w-sm shadow-2xl rounded-xl  bg-orange-200 hover:bg-orange-400 active:bg-violet-700s">
                <form onSubmit={handelLogin} className="card-body space-y-6">
                    <h2 className="text-center font-bold text-5xl font-serif text-sky-700">Login!!</h2>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Password:</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <div className='py-4 space-y-5 text-bold'>
                    {/* <div className='flex justify-center gap-3'>
                        <p className="text-center">Or Sign in with</p>
                        <div className=" text-2xl">
                            <FcGoogle></FcGoogle>
                        </div>
                    </div> */}
                     <div className="  mb-3">
                  <div className=" text-center gap-2 ">
                    
                    <button onClick={handelGoogleSignIn} className="btn w-80  text-black"> <FcGoogle></FcGoogle>Login  with Google</button>
                  </div>
                
                 
                 
                </div>
                

                    <h2 className='text-center  mb-3'>New here? <Link to='/register' className='text-lime-600'>Sign Up</Link></h2>
                </div>
            </div>
            <img src="https://i.ibb.co/J77j93z/login-img02.png" alt="" className="text-black lg:w-3/6 mr-9" />
        </div>

    );
};

export default LogIn;