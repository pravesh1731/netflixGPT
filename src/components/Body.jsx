import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import { useDispatch } from "react-redux";


const Body = () => {
  const dispatch = useDispatch();
  const appRoute = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);



  return (
    <div>
      <RouterProvider router={appRoute} />
    </div>
  );
};

export default Body;
