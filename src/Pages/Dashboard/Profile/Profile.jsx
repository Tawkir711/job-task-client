import React, { useContext } from 'react';
import { AuthContext } from '../../../Components/Provider/Context';

const Profile = () => {
    const { user } = useContext(AuthContext);
  return (
    <div>
      <div className="rounded-xl bg-blue-400 text-black  mb-4 shadow-xl text-center py-4 px-4 ml-5">
        <img src={user?.photoURL} className="rounded-full mb-3 mx-auto" />
        <h2 className="mb-3 font-bold">{user?.displayName}</h2>
        <button
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