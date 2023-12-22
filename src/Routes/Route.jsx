import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import Dashboard from "../Layout/Dashboard";
import TodoList from "../Pages/Dashboard/TodoList/TodoList";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
export const route = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element:<Home></Home>
      },
      {
        path: 'signUp',
        element: <SignUp></SignUp>
      },
      {
        path: 'login',
        element:<Login></Login>
      }
    ]
  },
  {
    path: 'dashboard',
    element: <Dashboard></Dashboard>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: 'todoList',
        element:<TodoList></TodoList>
      }
    ]
  }
]);