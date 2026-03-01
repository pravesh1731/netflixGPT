import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from './Header'
import Browse from './Browse'
import Login from './Login'

const Body = () => {
  const appRoute = createBrowserRouter([
    {
      path : "/",
      element : <Header />
    },
    {
      path : "/browse",
      element : <Browse />
    },
    {
      path : "/login",
      element : <Login />
    }
  ]);

  return (
  <div>
    <RouterProvider router={appRoute} />
  </div>
  )
}

export default Body