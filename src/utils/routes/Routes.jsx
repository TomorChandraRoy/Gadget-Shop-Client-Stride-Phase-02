
import { createBrowserRouter } from "react-router";
import MainLayout from "../../layouts/MainLayout";
import Home from "../../pages/Home";
import { Contact } from "../../pages/Contact";
import Products from "../../pages/Products";
import SignUp from "../../pages/SignUp";
import SignIn from "../../pages/SignIn";
import AboutUs from "../../pages/Aboutus";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children:[
        {
          path: "/products",
          element: <Products />,
  
        },
        {
          path: "/",
          element: <Home />,
  
        },
        {
          path: "/about",
          element: <AboutUs />,
  
        },
        {
          path: "/contect-us",
          element: <Contact />,
  
        },
        {
          path: "/sign-up",
          element: <SignUp />,
  
        },
        {
          path: "/sign-in",
          element: <SignIn />,
  
        },
      ]
    },
  ]);