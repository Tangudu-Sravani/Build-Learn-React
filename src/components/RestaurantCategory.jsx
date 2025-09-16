import ItemList from "./ItemList";
import {useState} from 'react';
const RestaurantCategory = (props) => {
  // console.log("props ", props.data);
  const [showItems,setShowItems] = useState(false);
  const handleClick = () => {
    setShowItems(!showItems);
    console.log(" Clicked ");
  };


  const data = props.data;
  return (
    <div>
      {/* {Header } */}
      <div className="mx-auto my-3 w-6/12 bg-gray-50 shadow-lg p-4 ">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
          <span className="font-bold text-l">
            {data.title}({data.itemCards.length})
          </span>
          <span>⬇️ </span>
        </div>
        {/* accordian body */}
        <div>
         {showItems && <ItemList key={data.itemCards.id} items={data.itemCards} />}
        </div>
      </div>
    </div>
  );
};
export default RestaurantCategory;
