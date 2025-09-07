import React from "react";
import ReactDOM from "react-dom/client";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cloudinaryImageId, cuisines, avgRating, costForTwo } =
    resData?.data || resData?.info || resData?.info?.sla;
  const deliveryTime = resData?.info?.sla?.deliveryTime;
  return (
    <div
      className="m-4 p-4 w-[200px] rounded-lg hover:bg-gray-200 bg-gray-100"
    >
      <img className="rounded-xl w-[400px] h-[150px]" src={CDN_URL + cloudinaryImageId} />
      {/* <div className="res-details"> */}
        <h3 className="font-bold pt-2 pb-3 text-lg">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>₹{costForTwo / 100} FOR TWO</h4>
        <h4>{deliveryTime} minutes</h4>
      </div>
    // </div>
  );
};
export default RestaurantCard;
