import { useState, useEffect } from "react";
import ShimmerCard from "./ShimmerCard";
import { CDN_IMG_URL, MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestuarantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  console.log(resId);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    // console.log(json?.data?.cards[2]?.card?.card?.info);
    setResInfo(json.data);
  };
  console.log(resInfo);

  const { name, avgRating, cuisines, locality, cloudinaryImageId } =
    resInfo?.cards[2]?.card?.card?.info || {};

  return resInfo === null ? (
    <ShimmerCard />
  ) : (
    <div className="res-menu">
      <img src={CDN_IMG_URL + cloudinaryImageId} alt="" className="res-img" />
      <h1>{name}</h1>
      <h2>{cuisines.join(", ")}</h2>
      <ul>
        <li>{locality}</li>
        <li>{avgRating}</li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};

export default RestuarantMenu;
