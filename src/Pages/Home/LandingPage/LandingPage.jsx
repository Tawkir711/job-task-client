import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Components/Provider/Context';

const LandingPage = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(https://i.postimg.cc/kgq6hhyL/task.png)",
      }}
    >
      <div className="hero-overlay bg-opacity-70"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            Welcome to SCC Technovision Inc.
          </h1>
          <p className="mb-5">
            A collaborative task management platform designed to streamline your
            workflow and boost productivity. Manage tasks effortlessly and stay
            organized with ease.
          </p>
          <button
            onClick={() => navigate(!user ? "/Login" : "/dashboard")}
            className="rounded-full btn btn-primary mt-7"
          >
            Let's Explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;