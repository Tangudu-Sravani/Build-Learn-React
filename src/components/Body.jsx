import React from "react";
import ReactDOM from "react-dom/client";
import RestaurantCard from './RestaurantCard';
import { useState , useEffect} from 'react';
import resList from '../utils/mockData';
import Shimmer from './Shimmer';

const Body = () => {
 const [ listOfRestaurants, setListOfRestaurants ] = useState([]);
  const [searchText,setSearchText]=useState([]);

 const [ filterSearchlist, setfilterSearchlist ] = useState([]);

 useEffect(()=>{
fetchData();
},[]);

const fetchData = async() => {
const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.624480699999999&page_type=DESKTOP_WEB_LISTING"); 
 const fetchJSON = await data.json();

    setListOfRestaurants(
      fetchJSON?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setfilterSearchlist(
      fetchJSON?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
}


  return listOfRestaurants.length <= 0 ?  <Shimmer/> : (    <div className="body">
      <div className="search">
         <input type="text" placeholder="dosa" className="search-box" value={searchText}
         onChange={(e)=>{
          setSearchText(e.target.value);
        }}/>
        <button className="search-btn" onClick={()=>{
          let filterSearchres =  filterSearchlist.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()))
          setfilterSearchlist(filterSearchres);
        }}
        >Search</button>
        <button className="filter-btn" onClick={()=>{
          // Filter the restro cards and updtes the UI
          //searchText
          let filteredList = listOfRestaurants.filter((res)=>res.data.avgRating>4);
          setListOfRestaurants(filteredList);
           {console.log("listOfRestaurants", listOfRestaurants)}
        }}>Top Rated restaurant</button>
       
      </div>
      <div className="restaurant-container">
        {filterSearchlist.map((restaurant) => (
          <RestaurantCard  key={restaurant?.info?.id || restaurant?.data?.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;