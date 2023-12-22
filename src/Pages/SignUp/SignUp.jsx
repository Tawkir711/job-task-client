import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Components/Provider/Context";
import { FaGoogle } from "react-icons/fa";
import Swal from "sweetalert2";

const SignUp = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile, signInGoogle } =
    useContext(AuthContext);

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        updateUserProfile(data.name, data.photoURL)
          .then(() => {
            const userInfo = {
              name: data.name,
              email: data.email
            }
            if (userInfo) {
              reset();
              Swal.fire({
                icon: "success",
                title: "Done...",
                text: "User created successfully & login now",
              });
              navigate("/login");
            }
        });
      })
      .catch((error) => console.log(error));
  };
  const handleGoogle = () => {
    signInGoogle()
      .then((result) => {
        const userInfo = {
          email: result.user?.email,
          name: result.user?.displayName,
        }
        .then((res) => {
          console.log(res.data);
          if (userInfo) {
            Swal.fire({
              icon: "success",
              title: "Your Google Sign In Successfully",
            });
            navigate(location?.state ? location.state : "/");
          }
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops Try Again",
          text: error.message,
        });
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row ">
        <div className="text-center md:w-1/2  lg:text-left">
          <h1 className="text-5xl font-bold text-center mb-5">SignUp now</h1>
          <img
            src="https://i.postimg.cc/J4VywRXd/login-form.gif"
            alt="login gif"
          />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                name="name"
                {...register("name", { required: true })}
                className="input input-bordered"
              />
              {errors.name && (
                <span className="text-red-600 ">Name is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="photo URL"
                {...register("photoURL", { required: true })}
                className="input input-bordered"
              />
              {errors.photoURL && (
                <span className="text-red-600 ">Photo URL is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                {...register("email", { required: true })}
                placeholder="email"
                className="input input-bordered"
              />
              {errors.email && (
                <span className="text-red-600">E-mail is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                {...register("password", {
                  required: true,
                  maxLength: 20,
                  minLength: 6,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                })}
                placeholder="password"
                className="input input-bordered"
              />
              {errors.password?.type === "required" && (
                <p className="text-red-600">Password is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-600">Password must be 6 character</p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-600">
                  Password must have one Uppercase, one lower case, one number
                  and one special character.
                </p>
              )}
            </div>
            <div className="form-control mt-6">
              <input
                className="btn btn-primary text-white"
                type="submit"
                value="Sign Up"
              />
            </div>
          </form>
          <p className="text-center">
            Already have an account?
            <Link className="text-red-600 font-semibold " to={"/login"}>
              Login
            </Link>
          </p>
          <div className="text-center my-4">
            <button
              onClick={handleGoogle}
              className="btn btn-success text-white w-3/4"
            >
              <FaGoogle className="text-xl"></FaGoogle> Google Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
