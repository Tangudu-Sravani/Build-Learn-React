import React from "react";
import ReactDOM from "react-dom/client";
import RestaurantCard from './RestaurantCard';
import { useState , useEffect} from 'react';
import resList from '../utils/mockData';


const Body = () => {
 const [ listOfRestaurants, setlListOfRestaurants ] = useState(resList);
 //hook is nothing but normal JS function which react gives to us, it has its own specific function
 //useEffect hook it contains two parameters callbackfunctiona and depedndecy array [dependency array is it is optional]
 // this is called after component is rendered
 useEffect(()=>{
  console.log("useEffect called");
 },[]);
 // first body rendered is called then useEffect will be called
 cosole.log("Body rendered");
  return (
    <div className="body">
      <div className="search">
        <button className="filter-btn" onClick={()=>{
          let filteredList = listOfRestaurants.filter((res)=>res.data.avgRating>4);
          setlListOfRestaurants(filteredList);
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