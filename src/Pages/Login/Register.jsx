

import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import SocialLogin from "./SocialLogin";
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GoEyeClosed } from "react-icons/go";
import { IoEyeOutline } from "react-icons/io5";

const Register = () => {
  useEffect(() => {
    document.title = 'REALESTATE/REGISTER '; 
  }, []); 
  const { createUser, updateUserProfile } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const from = "/";
  
  const [toastMessage, setToastMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    const { email, password, image, fullName } = data;

    // Password validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      toast.error("Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long.");
      return;
    }

    createUser(email, password)
      .then(() => {
        updateUserProfile(fullName, image)
          .then(() => {
            toast("Registration successful!");
            navigate(from);
          });
      })
      .catch(error => {
        console.error("Error registering user:", error);
        toast("Error occurred during registration. Please try again later.");
      });
  };

  return (
    <>
      <ToastContainer />
      <div className="bg-base-200 my-5 mt-40"  data-aos="zoom-in">
        <h1 className="text-5xl font-bold text-center py-5">Register now!</h1>
        <div className="hero min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="card flex-shrink-0 w-full lg:w-[500px] shadow-2xl bg-base-100"
            >
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Full Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Full name"
                    className="input input-bordered"
                    {...register("fullName", { required: true })}
                  />
                  {errors.fullName && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Email"
                    className="input input-bordered"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Image Url</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Image url"
                    className="input input-bordered"
                    {...register("image")}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="input input-bordered pr-10"
                    {...register("password", { required: true })}
                  />
                  <button
                    type="button"
                    className="ml-96 -mt-8 text-gray-500 focus:outline-none"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <IoEyeOutline className="h-6 w-6" /> : <GoEyeClosed className="h-6 w-6" />}
                  </button>
                  {errors.password && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>
                <div className="form-control mt-6 p-0">
                  <button className="btn btn-neutral">Register</button>
                </div>
                <label className="label">
                  Already have an account?{" "}
                  <Link to="/login" className="label-text-alt link link-hover">
                    Login here
                  </Link>
                </label>
                <SocialLogin />
              </div>
            </form>
          </div>
        </div>
      </div>
      {toastMessage && (
        <div className="toast toast-success">
          <button className="btn btn-ghost btn-sm" onClick={() => setToastMessage("")}>
            Close
          </button>
          <span>{toastMessage}</span>
        </div>
      )}
    </>
  );
};

export default Register;
