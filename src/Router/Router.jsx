import { createBrowserRouter } from "react-router-dom";
import Home from "../Layout/Home";
import Root from "../Layout/Root";
import StartLearning from "../Component/StartLearning";
import Tutorial from "../Component/Tutorial";
import AboutUs from "../Component/AboutUs";


const Router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
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
            element:<Tutorial></Tutorial>,
        },
        {
            path:"/about-us",
            element:<AboutUs></AboutUs>,
        },
      ]
    },
  ]);

export default Router;