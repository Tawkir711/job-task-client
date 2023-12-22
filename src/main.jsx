import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import { route } from './Routes/Route';
import Context from './Components/Provider/Context';


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Context>
      <div className="max-w-screen-xl mx-auto">
        <RouterProvider router={route}></RouterProvider>
      </div>
    </Context>
  </React.StrictMode>
);
