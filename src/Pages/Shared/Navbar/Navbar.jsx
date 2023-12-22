import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Components/Provider/Context';
import Swal from 'sweetalert2';

const Navbar = () => {

  const { user, logOut } = useContext(AuthContext);
  const [disabled, setDisabled] = useState(true);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Your Log Out Successfully",
        });
      })
      .catch();
  };
  const userImage =
    user && user.photoURL
      ? user.photoURL
      : "https://i.postimg.cc/zB10zYpJ/userImg.jpg";
  const userName = user?.displayName;

  const navLink = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      {
        user && <li>
          <Link to={'/dashboard'}>
          Dashboard
          </Link>
        </li>
      }
      {user ? (
        disabled
      ) : (
        <li>
          <Link
            to={"/login"}
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "underline text-white btn btn-primary btn-sm"
                : "btn btn-ghost btn-sm"
            }
          >
            Login
          </Link>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100 sticky top-0 z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLink}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Technovision</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLink}</ul>
      </div>
      {user && (
        <div className="navbar-end">
          <p className="mr-2"> {userName} </p>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src={userImage} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <button onClick={handleLogOut}>Log Out</button>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;