import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Components/Provider/Context";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();
  console.log(location.pathname);

  if (loading) {
    return (
      <img
        className="mx-auto h-[500px]"
        src="https://i.postimg.cc/VvySJCTF/d9f21515b1e38d83e94fdbce88f623b6.gif"
        alt="loading gif"
      />
    );
  }

  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to={"/login"}></Navigate>;
};

export default PrivateRoute;
