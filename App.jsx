import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./logo.png";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          src="https://cdn.pixabay.com/photo/2017/02/17/17/33/food-2074638_960_720.png"
          width="100px"
          height="100px"
          alt="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
// inline css usecase in react , by object form
const styleCard = {
  backgroundColor: "#f0f0f0",
};
const RestaurantCard = () => {
  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        src="https://c.ndtvimg.com/2019-10/7g6mck6g_biryani-badshah_625x300_25_October_19.jpg"
      />
      <div className="res-details">
        <h3>Meghana Foods</h3>
        <h4>Biryani, North Indian , Asian </h4>
        <h4>⭐4.3 star</h4>
        <h4>⌚20 minutes</h4>

      </div>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restaurant-container">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />

      </div>
    </div>
  );
};
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
