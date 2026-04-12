import {useEffect, useState} from 'react';
import {  MENU_API,sampleRestroPageJson } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

      useEffect(() => {
    fetchMenu();
  }, []);
  // const fetchMenu = async () => {
  const fetchMenu =  () => {

    // const data = await fetch(MENU_API+resId );
    const data = sampleRestroPageJson.data;
    // const json = await data.json();
    // setResInfo(json.data);
    setResInfo(data);

  };
  return resInfo;
}
export default useRestaurantMenu;