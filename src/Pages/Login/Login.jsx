

import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from './SocialLogin';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';

import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GoEyeClosed } from "react-icons/go";
import { IoEyeOutline } from "react-icons/io5";

const Login = () => {
    useEffect(() => {
        document.title = 'REALESTATE/LOGIN '; 
    }, []); 
    const { signInUser } = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    // navigation systems
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state || "/";
    // State to manage password visibility
    const [showPassword, setShowPassword] = useState(false);

    // handle form submission
    const onSubmit = async (data) => {
        const { email, password } = data;

        try {
            await signInUser(email, password);
            navigate(from);
        } catch (error) {
            // Display error message using toast
            toast.error('Invalid email or password');
        }
    };

    return (
        <>
            <ToastContainer />
            <div className='bg-base-200 pt-5 mt-40' data-aos="zoom-in">
                <h1 className="text-5xl font-bold text-center ">Login now!</h1>
                <div className="hero min-h-screen">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="card flex-shrink-0 w-full lg:w-[500px] pb-4 shadow-2xl bg-base-100">
                            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" className="input input-bordered"
                                    {...register("email", { required: true })}
                                    />
                                    {errors.email && <span className='text-red-500'>This field is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    
                                        <input type={showPassword ? "text" : "password"} placeholder="password" className="input input-bordered pr-10"
                                            {...register("password", { required: true })}                                                      
                                        />
                                         <button
                                            type="button"
                                            className=" ml-96 -mt-6 transform -translate-y-1/2  text-gray-500 focus:outline-none"
                                            onClick={() => setShowPassword(!showPassword)}
                                        >
                                            {showPassword ? <IoEyeOutline className='h-10 w-6' /> : <GoEyeClosed className='h-10 w-6' />}
                                        </button>
                                       
                                
                                    {errors.password && <span className='text-red-500'>This field is required</span>}
                                  
                                    <label className="label">
        <a
          onClick={() => document.getElementById("my_modal_2").showModal()}
          className="label-text-alt link link-hover"
        >
          Forgot password?
        </a>
      </label>
                                </div>
                                <div className="form-control mt-6 p-0">
                                    <button className="btn btn-neutral">Login</button>
                                </div>
                                <label className="label">
                                    New here? <Link to="/register" className="label-text-alt link link-hover">Create an account</Link>
                                </label>
                            </form>
                            <SocialLogin />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
