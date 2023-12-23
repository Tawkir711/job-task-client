import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import { route } from './Routes/Route';
import Context from './Components/Provider/Context';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Context>
      <QueryClientProvider client={queryClient}>
      <div className="max-w-screen-xl mx-auto">
        <RouterProvider router={route}></RouterProvider>
      </div>
      </QueryClientProvider>
    </Context>
  </React.StrictMode>
  
      
    
);
