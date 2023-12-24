import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Components/Provider/Context";
import { FaGoogle } from "react-icons/fa";

const Login = () => {

  const { signIn, signInGoogle } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password).then((result) => {
      const user = result.user;
      if (user) {
        Swal.fire({
          icon: "success",
          title: "Done...",
          text: "Your Login is successfully",
        });
      }
      navigate(from, { replace: true });
    });
  };

  const handleGoogle = () => {
    signInGoogle()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Your Google Sign In Successfully",
        });
        navigate(location?.state ? location.state : "/");
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
    <div className="hero min-h-screen bg-base-200 mb-5">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center md:w-1/2 ">
          <img
            src="https://i.postimg.cc/J4VywRXd/login-form.gif"
            alt="login gif"
          />
        </div>
        <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-5xl font-bold text-center">Login now!</h1>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
                name="email"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
                name="password"
              />
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary text-white" type="submit" value="Login" />
            </div>
          </form>
          <p className="text-center">
            Don't have an account?
            <Link className="text-red-600 font-semibold " to={"/signUp"}>
              SignUp
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

export default Login;