import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Seller from "./pages/Seller";
import Details from "./pages/Details";
import MainLayout from "./Component/layout/MainLayout";
import './App.css'
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/product", element: <Product /> },
        { path: "/cart", element: <Cart /> },
        { path: "/seller", element: <Seller /> },
        { path: "/details", element: <Details /> },
      ]
    }
  ]);

  return <RouterProvider router={router} />;
};

export default App;