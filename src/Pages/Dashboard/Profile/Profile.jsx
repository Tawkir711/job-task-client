import React, { useContext } from 'react';
import { AuthContext } from '../../../Components/Provider/Context';
import Swal from 'sweetalert2';

const Profile = () => {
  const { user, logOut } = useContext(AuthContext);
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
  return (
    <div>
      <div className="rounded-xl bg-blue-400 text-black  mb-4 shadow-xl text-center py-4 px-4 ml-5">
        <img src={user?.photoURL} className="rounded-full mb-3 mx-auto w-[300px]" />
        <h2 className="mb-3 font-bold">{user?.displayName}</h2>
        <button onClick={handleLogOut}
          className="btn btn-secondary text-center hover:text-white
           hover:shadow-xl"
        >
          LogOut
        </button>
      </div>
    </div>
  );
};

export default Profile;