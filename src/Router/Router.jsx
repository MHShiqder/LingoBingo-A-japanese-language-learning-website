import { createBrowserRouter } from "react-router-dom";
import Home from "../Layout/Home";
import Root from "../Layout/Root";
import StartLearning from "../Component/StartLearning";
import Tutorial from "../Component/Tutorial";
import Lesson from "../Component/Lesson";
import Login from "../Component/Login";
import Register from "../Component/Register";
import Forget from "../Component/Forget";
import Profile from "../Component/Profile";
import PrivateProfile from "../Component/PrivateProfile";
import UpdateProfile from "../Component/UpdateProfile";
import ErrorPage from "../Component/ErrorPage";


const Router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:"/",
            element:<Home></Home>,
        },
        {
            path:"/start-learning",
            element:<StartLearning></StartLearning>,
        },
        {
            path:"/tutorials",
            element:<PrivateProfile><Tutorial></Tutorial></PrivateProfile>,
        },
        {
            path:"/about-us",
            element:<div className="text-center text-5xl my-10">This is about us section</div>,
        },
        {
          path:"/lesson/:no",
          element:<Lesson></Lesson>,
          loader:()=>fetch('/japanese_vocabulary.json')
        },
        {
            path:"/login",
            element:<Login></Login>,
        },
        {
            path:"/register",
            element:<Register></Register>,
        },
        {
            path:"/forget",
            element:<Forget></Forget>,
        },
        {
            path:"/profile",
            element:<PrivateProfile><Profile></Profile></PrivateProfile>,
        },
        {
            path:"/update",
            element:<PrivateProfile><UpdateProfile></UpdateProfile></PrivateProfile>,
        },


      ]
    },
  ]);

export default Router;