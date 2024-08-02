import { useState } from "react";
import ShimmerCard from "./ShimmerCard";
import { CDN_IMG_URL, ITEM_CATEGORY_TYPE } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestuarantMenuFetch from "../utils/useRestuarantMenuFetch";
import ResturantCategoryCard from "./ResturantCategoryCard";

const RestuarantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestuarantMenuFetch(resId);
  const [showItems, setShowItems] = useState(null);

  if (resInfo === null) {
    return <ShimmerCard />;
  }

  // if (showItems === showItems) {
  //   setShowItems(null);
  // }

  const { name, avgRating, cuisines, locality, cloudinaryImageId } =
    resInfo?.cards[2]?.card?.card?.info;

  const categoriesArrayList =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const catTypes = categoriesArrayList.filter((category) => {
    return category?.card?.card?.["@type"] === ITEM_CATEGORY_TYPE;
  });

  return (
    <div>
      <div className="w-3/5 mx-auto p-2 my-16 align-center bg-slate-200 flex justify-between md:w-1/2">
        <div className="p-2">
          <img
            src={CDN_IMG_URL + cloudinaryImageId}
            alt=""
            className="w-96 mx-auto pb-4"
          />
        </div>
        <div className="font-serif font-bold text-2xl w-56 p-2 my-4">
          <h1 className="">{name}</h1>
          <h2>{cuisines.join(", ")}</h2>
          <ul>
            <li>📍 {locality}</li>
            <li>{avgRating}</li>
          </ul>
        </div>
      </div>
      {catTypes.map((res, index) => {
        return (
          <ResturantCategoryCard
            key={res.card.card.title}
            data={res.card.card}
            showItems={index === showItems ? true : false}
            setShowItems={() => setShowItems(index)}
          />
        );
      })}
    </div>
  );
};

export default RestuarantMenu;
