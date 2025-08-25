import React from "react";
import ReactDOM from "react-dom/client";
import {Header} from './components/Header.jsx';
import Body from './components/Body.jsx';
import RestaurantCard from './components/RestaurantCard.jsx';
import About from './components/About';
import Error from './components/Error';
import Contact from './components/Contact';
import RestaurantMenu from './components/RestaurantMenu';
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import Grocery from './components/Grocery';
import { Suspense,lazy } from 'react';

("use strict");

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};
const reactRoot = ReactDOM.createRoot(document.getElementById("root"));
const Grocery = lazy(() => import('./components/Grocery'));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: <Suspense fallback ={<h1>Loading...</h1>}><Grocery /></Suspense>,
      },
      // this means when the url/path is /restaurants/:resId then render RestaurantMenu component
      {
        path: "/restaurants/:resId",
        //:resId it means dynamic declaration ":" colon creates dynamic
        element:<RestaurantMenu />
      }
    ],
    errorElement: <Error />,
  },
]);

reactRoot.render(<RouterProvider router ={appRouter}/>);
