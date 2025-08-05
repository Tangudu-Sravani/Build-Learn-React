import React from "react";
import ReactDOM from "react-dom/client";
import RestaurantCard from './RestaurantCard';
import { useState } from 'react';
import resList from '../utils/mockData';


const Body = () => {
 const [ listOfRestaurants, setlListOfRestaurants ] = useState(resList);
  return (
    <div className="body">
      <div className="search">
        <button className="filter-btn" onClick={()=>{
          //Filter logic
          let filteredList = listOfRestaurants.filter((res)=>res.data.avgRating>4);
          setlListOfRestaurants(filteredList);// this will does the re-render the component, if use-state varible gets updated
           {console.log("listOfRestaurants", listOfRestaurants)}
        }}>Top Rated restaurant</button>
       
      </div>
      <div className="restaurant-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;