import React from "react";
import ReactDOM from "react-dom/client";
import {Header} from './components/Header.jsx';
import Body from './components/Body.jsx';
import RestaurantCard from './components/RestaurantCard.jsx';
import About from './components/About';
import Error from './components/Error';
import Contact from './components/Contact'
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";

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
      }
    ],
    errorElement: <Error />,
  },
]);

reactRoot.render(<RouterProvider router ={appRouter}/>);
