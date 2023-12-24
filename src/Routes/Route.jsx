import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import Dashboard from "../Layout/Dashboard";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import FAQ from "../Pages/FAQ/FAQ";
import Profile from "../Pages/Dashboard/Profile/Profile";
import PrivateRoute from "./PrivateRoute";
import CreateTask from "../Pages/Dashboard/CreateTask/CreateTask";
import TodoList from './../Pages/Dashboard/TodoList/TodoList';
import Notification from "../Pages/Dashboard/Notification/Notification";
import AboutSection from "../Pages/Home/AboutSection/AboutSection";
// import UpdateTask from "../Pages/Dashboard/UpdateTask/UpdateTask";
export const route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "faq",
        element: <FAQ></FAQ>,
      },
      {
        path: 'about',
        element:<AboutSection></AboutSection>
      }
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "createTask",
        element: <CreateTask></CreateTask>,
      },
      {
        path: "profile",
        element: <Profile></Profile>,
      },
      {
        path: "todoList",
        element: <TodoList></TodoList>,
      },
      {
        path: "notification",
        element: <Notification></Notification>,
      },
      {
        // path: "taskUpdate/:id",
        // element: <UpdateTask></UpdateTask>,
        // loader: () => fetch(``),
      },
    ],
  },
]);