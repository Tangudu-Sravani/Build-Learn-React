import React from "react";
import ReactDOM from "react-dom/client";
import {Header} from './components/Header.jsx';
import Body from './components/Body.jsx';
import RestaurantCard from './components/RestaurantCard.jsx';
import About from './components/About';
import Error from './components/Error';
import Contact from './components/Contact'
import {createBrowserRouter,RouterProvider} from 'react-router-dom';

("use strict");

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const reactRoot = ReactDOM.createRoot(document.getElementById("root"));
/**
 *  calling createBrowserRouter with an array of route objects.

    Each object maps:

    path → URL segment

    element → React element (component) that will render when the URL matches.

    So:

    / → <AppLayout />

    /about → <About />
 */
const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <AppLayout />,
    errorElement: <Error />,
  },
  {
    path:"/about",
    element:<About/>,
    errorElement: <Error />,
  },
  {
    path:"/contact",
    element:<Contact/>,
    errorElement: <Error />,
  }
])

reactRoot.render(<RouterProvider router ={appRouter}/>);
