import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold text-red-500 mt-5">
        404
        <br />
        ----/ Page not Found \----
      </h2>
      <Link to={"/"}>
        <button className="btn bg-red-500 mt-5 text-white">Go back Home</button>
      </Link>
      <img
        className="h-[50%] mx-auto my-10 rounded-xl"
        src="https://i.postimg.cc/jSPjYXQc/404-error-page.gif"
        alt="error page"
      />
    </div>
  );
};

export default ErrorPage;
