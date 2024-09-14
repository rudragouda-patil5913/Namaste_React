import { useState } from "react";
import ItemCard from "./ItemCard";

const ResturantCategoryCard = ({ data, showItems, setShowItems }) => {
  const { title } = data;

  // const [showItems, setShowItems] = useState(false);

  // function handleClick() {
  //   ();
  // }

  return (
    <div
      className="w-6/12 mx-auto my-6 bg-slate-100 p-2 shadow-lg"
      onClick={setShowItems}>
      <div className="flex justify-between my-4 cursor-pointer border-b-2 border-b-slate-400">
        <span className="w-2/3 font-bold text-lg">
          {title} ({data.itemCards.length})
        </span>
        <span className="">⬇</span>
      </div>
      {showItems && <ItemCard items={data.itemCards} />}
    </div>
  );
};

export default ResturantCategoryCard;
