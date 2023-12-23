import { NavLink, Outlet } from "react-router-dom";
import { FaCheckCircle, FaHome, FaPlayCircle,  FaProductHunt, FaTasks } from "react-icons/fa";

const Dashboard = () => {
  const links = (
    <>
      <li className="font-semibold">
        <NavLink to={"/dashboard/todoList"}>
          <FaTasks className="text-xl"></FaTasks>
          <span className="hidden md:block">Todo List</span>
        </NavLink>
      </li>
      <li className="font-semibold">
        <NavLink to={"/dashboard/complete"}>
          <FaCheckCircle className="text-xl" />
          <span className="hidden md:block">Completed</span>
        </NavLink>
      </li>
      <li className="font-semibold">
        <NavLink to={"/dashboard/ongoing"}>
          <FaPlayCircle className="text-xl" />
          <span className="hidden md:block">OnGoing</span>
        </NavLink>
      </li>
      <li className="font-semibold">
        <NavLink to={"/dashboard/profile"}>
          <FaProductHunt className="text-xl" />
          <span className="hidden md:block">Profile</span>
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