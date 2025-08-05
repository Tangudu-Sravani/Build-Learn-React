import React from "react";
import ReactDOM from "react-dom/client";
import {Header} from './components/Header.jsx';
import Body from './components/Body.jsx';
import RestaurantCard from './components/RestaurantCard.jsx';
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

reactRoot.render(<AppLayout />);
