import { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaCheckCircle, FaHome, FaPlayCircle, FaTasks } from "react-icons/fa";
import { AuthContext } from "../Components/Provider/Context";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const links = (
    <>
      <li className="font-semibold">
        <NavLink to={"/dashboard/todoList"}>
          <FaTasks className="text-xl"></FaTasks>
          <span className="hidden md:block">Todo List</span>
        </NavLink>
      </li>
      <li className="font-semibold">
        <NavLink to={"/dash/com"}>
          <FaCheckCircle className="text-xl" />
          <span className="hidden md:block">Completed</span>
        </NavLink>
      </li>
      <li className="font-semibold">
        <NavLink to={"/dash/on"}>
          <FaPlayCircle className="text-xl" />
          <span className="hidden md:block">OnGoing</span>
        </NavLink>
      </li>
      <div className="divider"></div>
      <li className="font-semibold">
        <NavLink to={"/"}>
          <FaHome className="text-xl" />
          <span className="hidden md:block">Home</span>
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="flex container mx-auto mt-6">
      <div>
        <div className="rounded-xl bg-blue-400 text-black  mb-4 shadow-xl text-center py-4 px-4">
          <img src={user?.photoURL} className="rounded-full mb-3 mx-auto" />
          <h2 className="mb-3 font-bold">{user?.displayName}</h2>
          <button
            className="btn btn-secondary text-center hover:text-white
           hover:shadow-xl"
          >
            LogOut
          </button>
        </div>
        <div
          className="rounded-xl shadow-xl menu menu-vertical h-full bg-blue-400
         text-black mx-auto text-center"
        >
          {links}
        </div>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default Dashboard;