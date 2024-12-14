
import { createBrowserRouter } from "react-router";
import MainLayout from "../../layouts/MainLayout";
import Home from "../../pages/Home";
import Aboutus from "../../pages/Aboutus";
import { Contact } from "../../pages/Contact";
import Products from "../../pages/Products";


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
          element: <Aboutus />,
  
        },
        {
          path: "/contect-us",
          element: <Contact />,
  
        },
      ]
    },
  ]);