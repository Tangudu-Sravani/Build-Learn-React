import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";
import  useRestaurantMenu  from "../utils/useRestaurantMenu";
import RestaurantCategory from './RestaurantCategory';
import {useState} from 'react';


const RestaurantMenu = () => {
const {resId} = useParams();
const resInfo = useRestaurantMenu(resId);
const [showIndex,setShowIndex] =useState(2);

 if (resInfo === null) return <Shimmer />;
 const { name,  cuisines,
   costForTwoMessage,
   costForTwo,
   cloudinaryImageId,
   avgRating,
   deliveryTime } =
   resInfo?.cards[2]?.card?.card?.info;

  const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  console.log(" itemCards ",itemCards);   

  const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c)=>
      c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    console.log(" categories ",categories);


  return (
    <div className="text-center">
    
        <h1 className="font-bold my-7 text-2xl">{name}</h1>
        <h2 className="font-bold text-lg">{cuisines.join(",")}</h2>
        {
          /**
        // wanted to do such a thing 
              // - if one accordian is expanded rest all should collaps
                  - have done hardcorded for some particular index to exapnd rest all should collaps 
                  // but if i some how get the info of click which user is selecting , the info can be fetch in RestaurantCategory 
                  // some how i can access the child value then i can controll the accordian by parent 
                  // or by modifiying the state variable of parent by  child [if it is done the we acheived the goal] [DONE by LEVELINg UP Component]
           */
        }
        {/** Controlled compoenent */}
          {/**seting the showIndex to child compoenent ResCateg
          and receiving it in child compoenent so by it as soon as uer clicks on accordian passes the index value to the parent compoenent
          */}
        {categories.map((category,index)=>
        <RestaurantCategory key={category.card.card.title} data = {category?.card?.card} 
        showItems = {index == showIndex ? true : false }
        setShowIndex= {() => setShowIndex(index)}
        />) 
        
        }
    </div>
  );
};

export default RestaurantMenu;
