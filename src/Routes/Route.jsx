import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
export const route = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      
    ]
  }
]);